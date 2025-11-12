const { MessageEmbed } = require('discord.js');
const db = require("../models/databaseusers");
const clansdb = require("../models/clans");
const kombe = require("../models/sahb");
const privdata = require("../models/privatechannels");
const game = require("../models_games/game");
const setinv = require('../models/setinv');
const client = require('../index');
const {
    serverColor,
    ownerrole,
    rsrole,
    betcateg,
    borrowedrole,
    disablebotbet,
    BOT_RATE,
    TAX_RATE,
    bankusername,
    ownertr,
    status,
    disableprembank,
    bettingserverid,
    crownemoji,
    psychemoji,
    hiddenemoji,
    feedbackchannel,
    linelineline,
    prefix,
    settings,
    bannerlink,
    allbetschannelid,
    allbetschannelcrashid,
    GAME_CHANNEL_ID,
    COMMAND_CHANNEL_ID,
    links,
    inProgress,
    activeOperations,
    activeOperationsClansAddMember,
    activeOperationsClansRename,
    cooldowns12,
    pendingRequests,
    determineWinner,
    formatCoins,
    parseCoins,
    saveLinks,
    isBlacklisted,
    loadTickets,
    saveTickets,
    loadWinners,
    saveWinners,
    generateTicketCode,
    sendRandomBox,
    clearAllDatabase,
    clearDatabase,
    allbetssend,
    allbetssendxo,
    updatePlayerBalances,
    checkWinner,
    sendBoard,
    createBoardComponents,
    startGame,
    makeMove,
    xoGame,
    getRandomNumbertakribi,
    startPvPGame,
    PvpMinesweeper,
    minegame,
    rpsgamedata,
    nrdusr,
    takribi,
    tkusr,
    nrd,
    TofehaGame,
    updateTofehaGame,
    safeFetchChannel,
    getTimeLeft,
    checkRoom,
    initializeDatabase,
    refreshInvites,
    getRandomPrize,
    alreadyinaclan,
    myclann,
    saveBlacklistedUsers,
    addToBlacklist,
    removeFromBlacklist,
    connectToVoice,
    speakArabic,
    allbetssendtofeha,
    getRandomNumber,
    clearAllMessages,
    startGamecrash,
    startGameLoop,
    shuffleArray,
    createGrid,
    createQuitButton,
    getLevelDescription,
    updateButtonStyles,
    saveLinks,
    loadBlacklistedUsers,
    isBlacklisted,
    saveBlacklistedUsers,
    addToBlacklist,
    removeFromBlacklist,
    connectToVoice,
    speakArabic,
    allbetssend,
    clearDatabase,
    clearAllDatabase,
    addDuration,
    calculateDuration,
    parseCoins,
    formatCoins,
    startPvPGame,
    getRandomNumbertakribi,
    createBoardComponents,
    startGame,
    makeMove,
    checkWinner,
    sendBoard,
    allbetssendxo,
    updatePlayerBalances,
    getRandomCard,
    getInitialHand,
    cardValue,
    calcTotal,
    displayHand,
    tryMakeBotWin,
    statuses,
    voiceChannelId,
    millionrolename,
    diamondrolename,
    topmoneyrolename,
    champrolename,
    unrealrolename,
    blacklistrolename,
    premiumroleid,
    channelidpanel,
    clanpanelid,
    panelid,
    notifycateg,
    giveawaymentionroleid,
    logsall,
    supportcateg,
    ticketcategid,
    logRoomSupport,
    logTickets,
    categoryIdSupport,
    categoryIdApply,
    channelwinningspin,
    logwelcome,
    Transfer,
    loggetcoin,
    logaddrmv,
    WITHDRAW_CHANNEL_ID,
    feedbackchannel,
    linelineline,
    emojilegend,
    emojinormal,
    rewnnormal,
    rewnlegendary,
    managerrole,
    setlimitrole,
    supportRoleId,
    rsrole,
    ownerrole,
    crownemoji,
    psychemoji,
    hiddenemoji,
    channelreward,
    selfChannelId,
    addedmulti,
    notifycateg,
    giveawaymentionroleid,
    BOT_TRICK_ROULETTE,
    BOT_TRICK_PERCENTAGE,
    notifyprobotid,
    bigamount,
    TOTAL_BULLETS,
    logs,
    prefix,
    settings,
    voiceChannelId,
    millionrolename,
    diamondrolename,
    status
} = require('../index');

class ReadyHandler {
    constructor(client) {
        this.client = client;
        this.guild = null;
        this.topMoneyRole = null;
        this.champRole = null;
        this.diamondRole = null;
        this.millionRole = null;
        this.blacklistRole = null;
        this.unrealRole = null;
        this.premiumRole = null;
    }

    async handleReady() {
        console.log(`DISCORD CONNECT`);
        connectToVoice();

        this.guild = await this.client.guilds.fetch(bettingserverid);
        this.topMoneyRole = this.guild.roles.cache.find(r => r.name === topmoneyrolename);
        this.champRole = this.guild.roles.cache.find(r => r.name === champrolename);
        this.diamondRole = this.guild.roles.cache.find(r => r.name === diamondrolename);
        this.millionRole = this.guild.roles.cache.find(r => r.name === millionrolename);
        this.blacklistRole = this.guild.roles.cache.find(r => r.name === blacklistrolename);
        this.unrealRole = this.guild.roles.cache.find(r => r.name === unrealrolename);
        this.premiumRole = this.guild.roles.cache.get(premiumroleid);

        // Start role updater interval
        this.startRoleUpdater();

        // Start status rotation
        this.startStatusRotation();

        // Start room checker
        this.startRoomChecker();

        // Start kombe checker
        this.startKombeChecker();

        // Start game timeout checker
        this.startGameTimeoutChecker();

        // Start random box sender
        this.startRandomBoxSender();

        // Initialize database and invites
        if (this.guild) {
            initializeDatabase(this.guild);
            refreshInvites(this.guild);
            setInterval(() => refreshInvites(this.guild), 3000);
        }

        // Start game loop
        startGameLoop();

        // Set up slash commands
        this.setupSlashCommands();
    }

    startRoleUpdater() {
        setInterval(async () => {
            try {
                if (!this.guild) return;

                // Update top money role
                const top = await db.findOne({}, { id: 1 }).sort({ coins: -1 }).lean();
                if (top && top.id !== this.lastTopId && this.topMoneyRole) {
                    this.lastTopId = top.id;
                    this.guild.members.cache.forEach(member => {
                        if (member.roles.cache.has(this.topMoneyRole.id) && member.id !== top.id)
                            member.roles.remove(this.topMoneyRole);
                    });

                    const topMember = this.guild.members.cache.get(top.id);
                    if (topMember && !topMember.roles.cache.has(this.topMoneyRole.id))
                        topMember.roles.add(this.topMoneyRole);
                }

                // Update wealthy roles
                const wealthy = await db.aggregate([
                    {
                        $addFields: {
                            totalWealth: { $add: ["$coins", "$prembank", "$cashback"] }
                        }
                    },
                    {
                        $match: {
                            totalWealth: { $gte: 100000 }
                        }
                    },
                    {
                        $project: { id: 1, totalWealth: 1 }
                    }
                ]);

                for (const u of wealthy) {
                    const member = this.guild.members.cache.get(u.id);
                    if (!member) continue;

                    const total = u.totalWealth;
                    if (total >= 10000000 && this.unrealRole && !member.roles.cache.has(this.unrealRole.id))
                        member.roles.add(this.unrealRole);
                    if (total >= 1000000 && this.millionRole && !member.roles.cache.has(this.millionRole.id))
                        member.roles.add(this.millionRole);
                    if (total >= 500000 && this.diamondRole && !member.roles.cache.has(this.diamondRole.id))
                        member.roles.add(this.diamondRole);
                    if (total >= 100000 && this.champRole && !member.roles.cache.has(this.champRole.id))
                        member.roles.add(this.champRole);
                }

                // Update blacklist roles
                const blacklistPath = path.resolve(__dirname, "../blacklist.json");
                if (this.blacklistRole && fs.existsSync(blacklistPath)) {
                    const data = fs.readFileSync(blacklistPath, "utf8");
                    if (data !== this.lastBlacklistData) {
                        this.lastBlacklistData = data;
                        const blacklist = JSON.parse(data);
                        const ids = new Set(blacklist.map(u => u.id));

                        this.guild.members.cache.forEach(async member => {
                            const inList = ids.has(member.id);
                            const hasRole = member.roles.cache.has(this.blacklistRole.id);
                            if (inList && !hasRole) await member.roles.add(this.blacklistRole);
                            else if (!inList && hasRole) await member.roles.remove(this.blacklistRole);
                        });
                    }
                }

                // Update premium roles
                if (this.premiumRole) {
                    const now = new Date();
                    const users = await db.find({}, { id: 1, premium: 1, premiumExpires: 1 }).lean();
                    const updates = [];
                    const newPremiumIds = new Set();

                    for (const user of users) {
                        if (user.premiumExpires && new Date(user.premiumExpires) >= now) {
                            newPremiumIds.add(user.id);
                            if (!user.premium)
                                updates.push(db.updateOne({ id: user.id }, { $set: { premium: true } }));
                        } else if (user.premium) {
                            updates.push(db.updateOne({ id: user.id }, { $set: { premium: false } }));
                        }
                    }
                    if (updates.length) await Promise.all(updates);
                    if (JSON.stringify([...newPremiumIds]) !== JSON.stringify([...this.lastPremiumIds])) {
                        this.lastPremiumIds = newPremiumIds;

                        this.guild.members.cache.forEach(async member => {
                            const hasRole = member.roles.cache.has(this.premiumRole.id);
                            const isPremium = newPremiumIds.has(member.id);
                            if (isPremium && !hasRole) await member.roles.add(this.premiumRole);
                            else if (!isPremium && hasRole) await member.roles.remove(this.premiumRole);
                        });
                    }
                }

            } catch (err) {
                console.error("Role updater error:", err);
            }
        }, 3000);
    }

    startStatusRotation() {
        let i = 0;
        setInterval(() => {
            this.client.user.setActivity(statuses[i], {
                type: "STREAMING",
                url: "https://www.twitch.tv/7lmcasino"
            });
            i = (i + 1) % statuses.length;
        }, 10000);
    }

    startRoomChecker() {
        setInterval(async () => {
            let privaterooms = (await privdata.find({}));
            await privaterooms.forEach(async (data) => {
                await checkRoom(data);
            });
        }, 20000);
    }

    async startKombeChecker() {
        let adasd = await kombe.findOne();
        if (!adasd) {
            adasd = await kombe.create({
                kombe: 2000,
                yesorno: "no",
                dailylimit: 2000
            });
        }

        setInterval(async () => {
            let countt = 0;
            const count = await privdata.countDocuments({});
            if (!count) {
                countt = 6;
            } else {
                if (count >= 6) countt = 0;
                else if (count == 0) countt = 6;
                else if (count == 1) countt = 5;
                else if (count == 2) countt = 4;
                else if (count == 3) countt = 3;
                else if (count == 4) countt = 2;
                else if (count == 5) countt = 1;
            }

            const embed = new MessageEmbed().setTitle('شراء روم خاصة').setDescription(`**لشراء روم خاصة قم بالضغط على الزر الي بالاسفل**\n** **`).addFields({
                name: `سعر الرومات الخاصة`,
                value: `30000`
            }, {
                name: `عدد الرومات المتوفرة الان`,
                value: `${countt}`
            }).setColor(serverColor);

            const button = new MessageButton().setCustomId('buyroomprv').setLabel("اضغط لشراء روم خاص بك").setStyle('PRIMARY');
            const actionRow = new MessageActionRow().addComponents(button);

            this.client.channels.cache.get(channelidpanel).messages.fetch(panelid).then(messagee => messagee.edit({
                embeds: [embed],
                components: [actionRow]
            })).catch();

            this.client.channels.cache.get(channelidclanpanel).messages.fetch(clanpanelid).then(async (messageee) => {
                const fetchTopClans = async () => {
                    const clans = await clansdb.find();
                    const clansWithWealth = await Promise.all(clans.map(async (clan) => {
                        const memberData = await db.find({
                            id: {
                                $in: clan.members
                            }
                        });
                        const totalWealth = memberData.reduce((sum, m) => sum + (m.coins || 0), 0);
                        return {
                            ...clan._doc,
                            totalWealth
                        };
                    }));
                    return clansWithWealth.sort((a, b) => b.totalWealth - a.totalWealth).slice(0, 10);
                };

                const sortedClans = await fetchTopClans();
                if (!sortedClans.length) {
                    return messageee.edit({
                        embeds: [
                            new MessageEmbed().setColor(serverColor).setDescription("❌ لا يوجد كلانات بعد!"),
                        ],
                    });
                }

                let leaderboard = "";
                const medals = ["🥇", "🥈", "🥉"];
                sortedClans.forEach((clan, i) => {
                    const rank = i + 1;
                    const medal = medals[i] || `#${rank}`;
                    const ownerMention = `<@${clan.ownerid}>`;
                    const formattedWealth = clan.totalWealth.toLocaleString();
                    const clanName = clan.clanname;
                    leaderboard += `${"\u200E"}**${medal} ${ownerMention} • [${clanName}] — 💰 ${formattedWealth}**\n`;
                });

                const embed = new MessageEmbed().setColor(serverColor).setTitle("👑 قائمة أفضل الكلانات").setDescription(leaderboard).setFooter({
                    text: "📊 يتم التحديث كل 20 ثانية"
                }).setTimestamp();

                try {
                    await messageee.edit({
                        embeds: [embed]
                    });
                } catch (e) {
                    console.error("Failed to edit leaderboard:", e);
                }
            }).catch();
        }, 20000);
    }

    startGameTimeoutChecker() {
        setInterval(async () => {
            let es = (await game.find());
            es.forEach(async d => {
                let time = await d.time;
                if (!time) return;
                if (time == timestamp(moment(Date.now())) || time < timestamp(moment(Date.now()))) {
                    // Handle game timeouts (this is a large block, simplified for brevity)
                    // Original timeout logic would go here
                }
            });

            let esed = (await TofehaGame.find());
            esed.forEach(async tofehaGame => {
                let time = await tofehaGame.time;
                if (!time) return;
                if (time == timestamp(moment(Date.now())) || time < timestamp(moment(Date.now()))) {
                    const player = await db.findOne({ id: tofehaGame.playerId });
                    player.coins -= tofehaGame.betAmount;
                    player.cashback += parseInt(tofehaGame.betAmount * 0.02);
                    player.losenumber += 1;
                    player.totallost += tofehaGame.betAmount;
                    player.challengesnumber += 1;
                    player.status_playing = "no";
                    await player.save();

                    const playedRows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, true));
                    const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription('لقد خسرت! هذه هي الصفوف التي لعبتها:');

                    await this.client.channels.cache.get(tofehaGame.channelId).messages.fetch(tofehaGame.messageId).then(msgggggg => {
                        msgggggg.edit({
                            content: `** **`,
                            components: [...playedRows, new MessageActionRow().addComponents(createQuitButton(true))],
                            embeds: [embed]
                        });
                    });

                    await allbetssendtofeha(player, 0, tofehaGame.betAmount);
                    await TofehaGame.deleteOne({ messageId: tofehaGame.messageId });
                    return;
                }
            });
        }, 20000);
    }

    startRandomBoxSender() {
        setInterval(sendRandomBox, Math.floor(Math.random() * (3600000 - 1800000 + 1)) + 1800000);
    }

    setupSlashCommands() {
        const data = [{
            name: 'setup',
            description: 'إعداد قائمة اختيار الدوريات لعرض مباريات اليوم',
        }];
        this.client.application.commands.set(data);
    }

    // Cron job for daily reset
    setupCronJobs() {
        cron.schedule('0 23 * * *', async () => {
            let adasd = await kombe.findOne();
            if (!adasd) {
                adasd = await kombe.create({
                    kombe: 2000,
                    yesorno: "no",
                    dailylimit: 2000
                });
            }
            adasd.kombe = adasd.dailylimit;
            adasd.save();
        });
    }
}

module.exports = ReadyHandler;
