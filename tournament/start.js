// tournament/start.js
const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js");
const tournamentModel = require("../models_games/tournament");
const game = require("../models_games/game");
const db = require("../models/databaseusers");
const handlerNrdPath = require("./handler_nrd"); // will register handler when required
module.exports = (client) => {
  // ensure handler loaded (it sets client.tournamentStartNrd)
  require("./handler_nrd")(client);

  const MAX_PLAYERS = 4; // as you requested (P4)
  // create tournament command
  client.on("messageCreate", async (msg) => {
    if (!msg.guild || msg.author.bot) return;
    if (!msg.content.startsWith("دوري")) return;
    const parts = msg.content.split(/\s+/);
    const amount = parseInt(parts[1]);
    if (!amount || isNaN(amount) || amount <= 0) return msg.reply("اكتب: `دوري <المبلغ>`");

    // create tournament doc
    const tor = await tournamentModel.create({
      owner: msg.author.id,
      channelID: msg.channel.id,
      entry: amount,
      players: [msg.author.id],
      active: false,
      round: 1,
      matches: []
    });

    // buttons: join, withdraw, start
    const joinBtn = new MessageButton().setCustomId(`tourn_join_${tor._id}`).setLabel("انضمام").setStyle("SUCCESS");
    const withBtn = new MessageButton().setCustomId(`tourn_withdraw_${tor._id}`).setLabel("انسحاب").setStyle("SECONDARY");
    const startBtn = new MessageButton().setCustomId(`tourn_start_${tor._id}`).setLabel("ابدأ (مالك فقط)").setStyle("PRIMARY");
    const row = new MessageActionRow().addComponents(joinBtn, withBtn, startBtn);

    const embed = new MessageEmbed()
      .setTitle("🎯 دوري جديد")
      .setDescription(`المالك: <@${msg.author.id}>\nالمبلغ: **${amount}**\nاللاعبين: **1/${MAX_PLAYERS}**\nاضغط انضمام للانخراط.`);

    const sent = await msg.channel.send({ embeds: [embed], components: [row] });
    tor.msgID = sent.id;
    await tor.save();

    await msg.reply(`تم إنشاء الدوري (#${tor._id}). Players: 1/${MAX_PLAYERS}`);
  });

  // interaction handler for join/withdraw/start/select
  client.on("interactionCreate", async (interaction) => {
    try {
      if (!interaction.isButton() && !interaction.isSelectMenu()) return;

      // JOIN
      if (interaction.customId && interaction.customId.startsWith("tourn_join_")) {
        const torId = interaction.customId.split("tourn_join_")[1];
        const tor = await tournamentModel.findById(torId);
        if (!tor) return interaction.reply({ content: "لا يوجد هذا الدوري.", ephemeral: true });
        if (interaction.channel.id !== tor.channelID) return interaction.reply({ content: "هذا الدوري في قناة أخرى.", ephemeral: true });

        // checks: coins and not playing
        const user = interaction.user;
        const userDoc = await db.findOne({ id: user.id }) || await db.create({ id: user.id, coins: 0, status_playing: "no" });
        if (userDoc.status_playing === "yes") return interaction.reply({ content: "أنت مشغول حاليا.", ephemeral: true });
        if ((userDoc.coins || 0) < tor.entry) return interaction.reply({ content: "رصيدك لا يكفي للدخول.", ephemeral: true });

        if (tor.players.includes(user.id)) return interaction.reply({ content: "أنت بالفعل ضمن الدوري.", ephemeral: true });
        if (tor.players.length >= MAX_PLAYERS) return interaction.reply({ content: "تم اكتمال العدد.", ephemeral: true });

        tor.players.push(user.id);
        await tor.save();

        // update lobby message
        try {
          const ch = await client.channels.fetch(tor.channelID);
          const msg = await ch.messages.fetch(tor.msgID);
          const embed = new MessageEmbed().setTitle("🎯 دوري جديد").setDescription(`المالك: <@${tor.owner}>\nالمبلغ: **${tor.entry}**\nاللاعبين: **${tor.players.length}/${MAX_PLAYERS}**\n${tor.players.map(x => `<@${x}>`).join(" , ")}`);
          await msg.edit({ embeds: [embed] });
        } catch (e) {    }

        await interaction.reply({ content: `تم الانضمام (${tor.players.length}/${MAX_PLAYERS})`, ephemeral: true });
      }

      // WITHDRAW
      if (interaction.customId && interaction.customId.startsWith("tourn_withdraw_")) {
        const torId = interaction.customId.split("tourn_withdraw_")[1];
        const tor = await tournamentModel.findById(torId);
        if (!tor) return interaction.reply({ content: "لا يوجد هذا الدوري.", ephemeral: true });
        if (!tor.players.includes(interaction.user.id)) return interaction.reply({ content: "أنت لست ضمن اللاعبين.", ephemeral: true });

        // owner cannot withdraw (owner must cancel)
        if (interaction.user.id === tor.owner) return interaction.reply({ content: "المالك لا يمكنه الانسحاب. الغِ الدوري إن أردت.", ephemeral: true });

        tor.players = tor.players.filter(p => p !== interaction.user.id);
        await tor.save();

        // update lobby message
        try {
          const ch = await client.channels.fetch(tor.channelID);
          const msg = await ch.messages.fetch(tor.msgID);
          const embed = new MessageEmbed().setTitle("🎯 دوري جديد").setDescription(`المالك: <@${tor.owner}>\nالمبلغ: **${tor.entry}**\nاللاعبين: **${tor.players.length}/${MAX_PLAYERS}**\n${tor.players.map(x => `<@${x}>`).join(" , ")}`);
          await msg.edit({ embeds: [embed] });
        } catch (e) {}

        return interaction.reply({ content: "تم الانسحاب من الدوري.", ephemeral: true });
      }

      // START - owner only
      if (interaction.customId && interaction.customId.startsWith("tourn_start_")) {
        const torId = interaction.customId.split("tourn_start_")[1];
        const tor = await tournamentModel.findById(torId);
        if (!tor) return interaction.reply({ content: "لا يوجد هذا الدوري.", ephemeral: true });
        if (interaction.user.id !== String(tor.owner)) return interaction.reply({ content: "فقط صاحب الدوري يمكنه البدء.", ephemeral: true });
        if (tor.players.length < 2) return interaction.reply({ content: "لا توجد لاعبين كافيين.", ephemeral: true });
        // trim players if more than MAX
        if (tor.players.length > MAX_PLAYERS) tor.players = tor.players.slice(0, MAX_PLAYERS);
        tor.active = true;
        await tor.save();

        // show select menu to choose game for whole tournament
        const select = new MessageSelectMenu()
          .setCustomId(`tourn_select_${tor._id}`)
          .setPlaceholder("اختر لعبة البطولة")
          .addOptions([
            { label: "النرد (Dice)", value: "dice", description: "لعبة النرد - competitivo" }
            // you can add more later
          ]);

        await interaction.reply({ content: "اختر لعبة البطولة:", components: [ new MessageActionRow().addComponents(select) ], ephemeral: true });
      }

      // SELECT CHOSEN GAME
      if (interaction.isSelectMenu() && interaction.customId && interaction.customId.startsWith("tourn_select_")) {
        const torId = interaction.customId.split("tourn_select_")[1];
        const tor = await tournamentModel.findById(torId);
        if (!tor) return interaction.reply({ content: "لا يوجد هذا الدوري.", ephemeral: true });
        if (interaction.user.id !== String(tor.owner)) return interaction.reply({ content: "فقط صاحب الدوري يمكنه اختيار اللعبة.", ephemeral: true });

        const chosen = interaction.values[0] || "dice";
        tor.game = chosen;
        await tor.save();

        // create initial pairings (random shuffle)
        const shuffled = tor.players.sort(() => Math.random() - 0.5);
        const pairs = [];
        for (let i = 0; i < shuffled.length; i += 2) {
          const p1 = shuffled[i];
          const p2 = shuffled[i+1] || null;
          pairs.push({ p1, p2, msgID: null, winner: null, status: p2 ? "pending" : "done" });
        }
        tor.matches = pairs;
        await tor.save();

        await interaction.update({ content: `تم اختيار: ${chosen}. بدأنا إنشاء المباريات...`, components: [] });

        // start all matches of round 1 (only support dice right now)
        const ch = await client.channels.fetch(tor.channelID);

        // for single bye (odd number) we mark winner = p1 automatically
        for (let idx = 0; idx < tor.matches.length; idx++) {
          const m = tor.matches[idx];
          if (!m.p2) {
            m.winner = m.p1;
            m.status = "done";
            continue;
          }
          // start match via handler; available function on client set by handler_nrd
          try {
            await client.tournamentStartNrd(tor._id.toString(), ch, m.p1, m.p2, tor.entry);
          } catch (e) {
            console.error("failed to start match", e);
          }
        }
        await tor.save();

        // reply
        await ch.send(`🎯 بدأت الجولة الأولى لبطولة #${tor._id}. سيتم إبلاغك عند اكتمال الجولة.`);
      }
    } catch (err) {
      console.error("tournament/start interaction error", err);
    }
  });

  // Listen to tournament match finished events (emitted by handler_nrd when match message edited)
  client.on("tournament:matchFinished", async ({ tournamentId, msgID, winner }) => {
    try {
      const tor = await tournamentModel.findById(tournamentId);
      if (!tor) return;
      // mark winner for the match with that msgID
      for (let m of tor.matches) {
        if (m.msgID === msgID) {
          m.winner = winner;
          m.status = "done";
        }
      }
      await tor.save();

      // check if all matches in this round done
      const allDone = tor.matches.every(m => m.status === "done");
      if (!allDone) return;

      // collect winners
      const winners = tor.matches.map(m => m.winner).filter(Boolean);
      // if only one winner -> tournament finished
      if (winners.length === 1) {
        // payout
        const totalPool = tor.entry * tor.players.length;
        const firstShare = Math.floor(totalPool * 0.7);
        const secondShare = Math.floor(totalPool * 0.2);
        const tax = totalPool - firstShare - secondShare;

        // find runner-up: if matches length==1 then runner-up is loser of that match; else needs tournament history.
        // Simpler: the last round had two players; we can find the match in final round
        let runnerUp = null;
        if (tor.matches.length === 1) {
          const lastM = tor.matches[0];
          runnerUp = lastM.p1 === winners[0] ? lastM.p2 : lastM.p1;
        }

        // pay winner
        const wdoc = await db.findOne({ id: winners[0] }) || await db.create({ id: winners[0], coins: 0, status_playing: "no" });
        wdoc.coins = (wdoc.coins || 0) + firstShare;
        await wdoc.save();

        if (runnerUp) {
          const rdoc = await db.findOne({ id: runnerUp }) || await db.create({ id: runnerUp, coins: 0, status_playing: "no" });
          rdoc.coins = (rdoc.coins || 0) + secondShare;
          await rdoc.save();
        }

        // mark all players status_playing = no
        for (let pid of tor.players) {
          const pdoc = await db.findOne({ id: pid }) || await db.create({ id: pid, coins: 0, status_playing: "no" });
          pdoc.status_playing = "no";
          await pdoc.save();
        }

        const ch = await client.channels.fetch(tor.channelID);
        await ch.send(`🏆 انتهت البطولة #${tor._id} ! الفائز: <@${winners[0]}> (يحصل على ${firstShare})\nالوصيف: <@${runnerUp}> (يحصل على ${secondShare})\nالمنصة: ${tax}`);

        // finish tournament
        tor.active = false;
        await tor.save();
        return;
      }

      // else prepare next round: pair winners
      // pair sequentially winners[0] vs winners[1], ...
      const nextPairs = [];
      for (let i = 0; i < winners.length; i += 2) {
        const p1 = winners[i];
        const p2 = winners[i+1] || null;
        nextPairs.push({ p1, p2, msgID: null, winner: null, status: p2 ? "pending" : "done" });
      }
      tor.matches = nextPairs;
      tor.round = tor.round + 1;
      await tor.save();

      // start next round matches
      const ch2 = await client.channels.fetch(tor.channelID);
      for (let m of tor.matches) {
        if (!m.p2) {
          m.winner = m.p1;
          m.status = "done";
          continue;
        }
        await client.tournamentStartNrd(tor._id.toString(), ch2, m.p1, m.p2, tor.entry);
      }
      await tor.save();

      const chref = await client.channels.fetch(tor.channelID);
      await chref.send(`➡️ بدأت الجولة التالية (${tor.round}) في البطولة #${tor._id}`);
    } catch (err) {
      console.error("tournament:matchFinished handler error", err);
    }
  });

  console.log("[tournament/start] initialized");
};
