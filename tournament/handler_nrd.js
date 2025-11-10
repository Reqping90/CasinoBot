// tournament/handler_nrd.js
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const game = require("../models_games/game");
const tournamentModel = require("../models_games/tournament");
const db = require("../models/databaseusers"); // assumed path
module.exports = (client) => {

  // start a single nrd match between p1 and p2 - called by start.js
  async function startNrdMatch(torId, channel, p1, p2, bet) {
    // create game docs for p1 (the system in your project expects a game doc per starter)
    let g1 = await game.findOne({ id: p1 }) || await game.create({ id: p1 });
    let g2 = await game.findOne({ id: p2 }) || await game.create({ id: p2 });

    g1.with = p2;
    g1.coins = bet;
    g1.game = "nrd";
    g1.status_playing = "yes";
    await g1.save();

    g2.with = p1;
    g2.coins = bet;
    g2.game = "nrd";
    g2.status_playing = "yes";
    await g2.save();

    // send placeholder message for the match (your nrd handler will update this message as game flows)
    const embed = new MessageEmbed()
      .setTitle("لعبة: النرد (Tournament)")
      .setDescription(`اللاعبان: <@${p1}> vs <@${p2}>\nالمبلغ: ${bet}`)
      .setColor("#2f3136");

    // Use msg id in button customId pattern that your handler expects: nrdk_<msgID>
    const msgSent = await channel.send({
      content: `ابدأ اللعب: <@${p1}> و <@${p2}>`,
      embeds: [embed],
      components: [ new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId(`nrdk_${"PLACEHOLDER"}`) // will edit after send
            .setLabel("العب نردك")
            .setStyle("PRIMARY")
        ) ]
    });

    // update the button customId to include message id (so your existing handler can pick it up)
    try {
      const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId(`nrdk_${msgSent.id}`).setLabel("العب نردك").setStyle("PRIMARY")
      );
      await msgSent.edit({ components: [row] });
    } catch (e) {
      console.error("tournament/handler_nrd - edit msg button id failed", e);
    }

    // write msgID to game docs so your internal logic finds it
    g1.msgID = msgSent.id; await g1.save();
    g2.msgID = msgSent.id; await g2.save();

    // store msgID in tournament matches: find tournament having this pair and update entry
    try {
      const tor = await tournamentModel.findOne({ "matches.p1": p1, "matches.p2": p2, "active": true });
      if (tor) {
        for (let m of tor.matches) {
          if (m.p1 === p1 && m.p2 === p2 && !m.msgID) {
            m.msgID = msgSent.id;
            m.status = "ongoing";
            break;
          }
        }
        await tor.save();
      }
    } catch (err) {
      console.error("tournament/handler_nrd - attach msgID to tournament", err);
    }

    // Listen for message edits to detect winner text. We attach a one-time listener:
    const onUpdate = async (oldMsg, newMsg) => {
      try {
        if (!newMsg || newMsg.id !== msgSent.id) return;
        if (!newMsg.content) return;
        // look for Arabic words 'فائز' or 'فائززز' or 'فائز' in message content (as your nrd code sets)
        if (/فائز/i.test(newMsg.content)) {
          // extract first mention in content as winner
          const mentionMatch = newMsg.content.match(/<@!?\d+>/);
          if (mentionMatch && mentionMatch[0]) {
            const idMatch = mentionMatch[0].replace(/[<@!>]/g, "");
            const winnerId = idMatch;
            // update tournament match with winner
            try {
              const tor2 = await tournamentModel.findOne({ "matches.msgID": msgSent.id, active: true });
              if (tor2) {
                for (let m of tor2.matches) {
                  if (m.msgID === msgSent.id) {
                    m.winner = winnerId;
                    m.status = "done";
                    break;
                  }
                }
                await tor2.save();
                // emit event on client for tournament progress
                client.emit("tournament:matchFinished", { tournamentId: tor2._id.toString(), msgID: msgSent.id, winner: winnerId });
              }
            } catch (err) {
              console.error("tournament/handler_nrd - update winner in DB", err);
            }
            // cleanup listener
            client.off("messageUpdate", onUpdate);
          }
        }
      } catch (e) {
        console.error("tournament/handler_nrd.onUpdate error", e);
      }
    };

    client.on("messageUpdate", onUpdate);

    return msgSent;
  }

  // expose function
  client.tournamentStartNrd = startNrdMatch;

  console.log("[tournament/handler_nrd] initialized");
};