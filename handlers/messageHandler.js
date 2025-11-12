const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Permissions } = require('discord.js');
const db = require("../models/databaseusers");
const clansdb = require("../models/clans");
const kombe = require("../models/sahb");
const privdata = require("../models/privatechannels");
const game = require("../models_games/game");
const setinv = require('../models/setinv');
const dbcodes = require("../models/codes");
const client = require('../index'); // Assuming index.js exports client
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
    tryMakeBotWin
} = require('../index'); // Import shared utilities

class MessageHandler {
    constructor(client) {
        this.client = client;
        this.commands = new Map();
        this.registerCommands();
    }

    registerCommands() {
        // Register all message commands
        this.commands.set('بلوكز', this.handleBlockList.bind(this));
        this.commands.set('Blocks', this.handleBlockList.bind(this));
        this.commands.set('فك', this.handleUnblock.bind(this));
        this.commands.set('unblock', this.handleUnblock.bind(this));
        this.commands.set('حذفبري', this.handleRemovePremium.bind(this));
        this.commands.set('بري', this.handlePremium.bind(this));
        this.commands.set('بريميوم', this.handlePremium.bind(this));
        this.commands.set('pre', this.handlePremium.bind(this));
        this.commands.set('premuim', this.handlePremium.bind(this));
        this.commands.set('اوامر', this.handleHelp.bind(this));
        this.commands.set('help', this.handleHelp.bind(this));
        this.commands.set('ريواردز', this.handleRewards.bind(this));
        this.commands.set('rewards', this.handleRewards.bind(this));
        this.commands.set('توبكلانات', this.handleTopClans.bind(this));
        this.commands.set('topclans', this.handleTopClans.bind(this));
        this.commands.set('توبكلان', this.handleTopClans.bind(this));
        this.commands.set('tax', this.handleTax.bind(this));
        this.commands.set('ضريبة', this.handleTax.bind(this));
        this.commands.set('ضريبه', this.handleTax.bind(this));
        this.commands.set('$post', this.handlePost.bind(this));
        this.commands.set('totalcoins', this.handleTotalCoins.bind(this));
        this.commands.set('totalprembank', this.handleTotalPremBank.bind(this));
        this.commands.set('توب', this.handleTop.bind(this));
        this.commands.set('top', this.handleTop.bind(this));
        this.commands.set('totalwithdrawed', this.handleTotalWithdrawed.bind(this));
        this.commands.set('totaltowithdraw', this.handleTotalToWithdraw.bind(this));
        this.commands.set('totaltopup', this.handleTotalTopup.bind(this));
        this.commands.set('كاش', this.handleCash.bind(this));
        this.commands.set('كاش باك', this.handleCash.bind(this));
        this.commands.set('cash', this.handleCash.bind(this));
        this.commands.set('cashback', this.handleCash.bind(this));
        this.commands.set('ad', this.handleAddMember.bind(this));
        this.commands.set('rem', this.handleRemoveMember.bind(this));
        this.commands.set('de1ete', this.handleDelete.bind(this));
        this.commands.set('toggleinv', this.handleToggleInv.bind(this));
        this.commands.set('dall', this.handleDeleteAll.bind(this));
        this.commands.set('!sendticket', this.handleSendTicket.bind(this));
        this.commands.set('withdrawon', this.handleWithdrawOn.bind(this));
        this.commands.set('resettime', this.handleResetTime.bind(this));
        this.commands.set('ahelp', this.handleAdminHelp.bind(this));
        this.commands.set('withdrawoff', this.handleWithdrawOff.bind(this));
        this.commands.set('rename', this.handleRename.bind(this));
        this.commands.set('!sendapply', this.handleSendApply.bind(this));
        this.commands.set('untime', this.handleUnTime.bind(this));
        this.commands.set('dallinv', this.handleDeleteAllInv.bind(this));
        this.commands.set('+help', this.handlePlusHelp.bind(this));
        this.commands.set('+off', this.handlePlusOff.bind(this));
        this.commands.set('+on', this.handlePlusOn.bind(this));
        this.commands.set('+reset', this.handlePlusReset.bind(this));
        this.commands.set('+add-points', this.handleAddPoints.bind(this));
        this.commands.set('+rmv-points', this.handleRemovePoints.bind(this));
        this.commands.set('+points', this.handlePoints.bind(this));
        this.commands.set('+spin', this.handleSpin.bind(this));
        this.commands.set('zeroal', this.handleZeroAl.bind(this));
        this.commands.set('showal', this.handleShowAl.bind(this));
        this.commands.set('createcode', this.handleCreateCode.bind(this));
        this.commands.set('!sendredeem', this.handleSendRedeem.bind(this));
        this.commands.set('zeroredeemed', this.handleZeroRedeemed.bind(this));
        this.commands.set('zerocashback', this.handleZeroCashback.bind(this));
        this.commands.set('zeroprembank', this.handleZeroPremBank.bind(this));
        this.commands.set('!sendwithdraw', this.handleSendWithdraw.bind(this));
        this.commands.set('!sendclans', this.handleSendClans.bind(this));
        this.commands.set('box', this.handleBox.bind(this));
        this.commands.set('unbanall', this.handleUnbanAll.bind(this));
        this.commands.set('شحن', this.handleCharge.bind(this));
        this.commands.set('!sendselect', this.handleSendSelect.bind(this));
        this.commands.set('!sendrules', this.handleSendRules.bind(this));
        this.commands.set('addtoclan', this.handleAddToClan.bind(this));
        this.commands.set('myclan', this.handleMyClan.bind(this));
        this.commands.set('كلاني', this.handleMyClan.bind(this));
        this.commands.set('leaveclan', this.handleLeaveClan.bind(this));
        this.commands.set('خروج', this.handleLeaveClan.bind(this));
        this.commands.set('removefromclan', this.handleRemoveFromClan.bind(this));
        this.commands.set('clanrename', this.handleClanRename.bind(this));
        this.commands.set('ربط', this.handleLink.bind(this));
        this.commands.set('فصل', this.handleUnlink.bind(this));
        this.commands.set('fsall', this.handleFsAll.bind(this));
        this.commands.set('معلومات', this.handleInfo.bind(this));
        this.commands.set('سحب', this.handleWithdraw.bind(this));
        this.commands.set('ايداع', this.handleDeposit.bind(this));
        this.commands.set('دايلي', this.handleDaily.bind(this));
        this.commands.set('deletecode', this.handleDeleteCode.bind(this));
        this.commands.set('!sendlottery', this.handleSendLottery.bind(this));
        this.commands.set('قائمه', this.handleList.bind(this));
        this.commands.set('قنابل', this.handleBombs.bind(this));
        this.commands.set('الغام', this.handleBombs.bind(this));
        this.commands.set('mines', this.handleBombs.bind(this));
        this.commands.set('خط', this.handleLine.bind(this));
        this.commands.set('!مسح_بلاكجاك', this.handleClearBlackjack.bind(this));
        this.commands.set('3102008', this.handle3102008.bind(this));
        this.commands.set('say', this.handleSay.bind(this));
        this.commands.set('بنك', this.handleBank.bind(this));
        this.commands.set('Bank', this.handleBank.bind(this));
        this.commands.set('bank', this.handleBank.bind(this));
        this.commands.set('فلوس', this.handleMoney.bind(this));
        this.commands.set('Money', this.handleMoney.bind(this));
        this.commands.set('money', this.handleMoney.bind(this));
        this.commands.set('فلوسي', this.handleMoney.bind(this));
        this.commands.set('Rsall', this.handleRsAll.bind(this));
        this.commands.set('blacklist', this.handleBlacklist.bind(this));
        this.commands.set('unblacklist', this.handleUnblacklist.bind(this));
        this.commands.set('تحدي', this.handleChallenge.bind(this));
        this.commands.set('challenge', this.handleChallenge.bind(this));
        this.commands.set('file', this.handleFile.bind(this));
        this.commands.set('ملف', this.handleFile.bind(this));
        this.commands.set('روليت', this.handleRoulette.bind(this));
        this.commands.set('roulette', this.handleRoulette.bind(this));
        this.commands.set('Rs', this.handleRs.bind(this));
        this.commands.set('تفاحة', this.handleApple.bind(this));
        this.commands.set('قنابل', this.handleBombs.bind(this));
        this.commands.set('الغام', this.handleBombs.bind(this));
        this.commands.set('mines', this.handleBombs.bind(this));
    }

    async handleMessage(message) {
        if (message.author.bot) return;

        // Handle special channels
        if (message.channel.id == COMMAND_CHANNEL_ID) {
            setTimeout(async () => {
                try {
                    await message.delete();
                } catch {}
            }, 2000);
        }

        if (message.channel.id == GAME_CHANNEL_ID) {
            return this.handleGameChannel(message);
        }

        // Handle feedback channel
        if (message.channel.id == feedbackchannel) {
            try {
                await message.channel.send({ files: [linelineline] });
                message.react("💙");
            } catch {}
            return;
        }

        // Handle prefix commands
        if (message.content.startsWith(prefix)) {
            return this.handlePrefixCommand(message);
        }

        // Handle regular commands
        const args = message.content.trim().split(/ +/);
        const command = args[0].toLowerCase();

        if (this.commands.has(command)) {
            try {
                await this.commands.get(command)(message, args);
            } catch (error) {
                console.error(`Error handling command ${command}:`, error);
                message.reply('حدث خطأ أثناء تنفيذ الأمر.').catch(() => {});
            }
        }
    }

    async handleGameChannel(message) {
        // Game channel betting logic
        let data = await db.findOne({ id: message.author.id });
        if (!data) {
            data = await db.create({
                id: message.author.id,
                coins: 0,
                status_playing: "no"
            });
        }

        let coinAmount = message.content.replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`);
        const betAmount = parseInt(coinAmount);

        if (gamegameStarted) return message.author.send({
            content: 'اللعبة بدأت بالفعل. لا يمكنك وضع رهانات الآن',
            ephemeral: true
        }).catch();

        if (data.status_playing === "yes") return message.author.send({
            content: 'أنت في تحدي لا يمكنك وضع رهان'
        }).catch();

        if (!isNaN(betAmount) && betAmount > 0 && data.coins >= betAmount) {
            if (betAmounts.has(message.author.id)) {
                await message.author.send({
                    content: 'لقد وضعت رهان بالفعل'
                }).catch();
                message.delete();
                return;
            }
            betAmounts.set(message.author.id, betAmount);
            data.coins -= betAmount;
            data.status_playing = "yes";
            data.challengesnumber += 1;
            await data.save();
            try {
                await message.author.send({
                    content: `لقد وضعت رهان على ${betAmount.toLocaleString()}`
                }).catch();
            } catch {}
            let channeltosend = client.channels.cache.get(allbetschannelcrashid);
            let embed = new MessageEmbed().setDescription(`**<@${message.author.id}> وضع رهان على مبلغ ${betAmount.toLocaleString()} في لعبة الطائرة :tada:**`);
            await channeltosend.send({ embeds: [embed] });
            await channeltosend.send({ files: [linelineline] });
            const member = message.guild.members.cache.get(message.author.id);
            await message.channel.permissionOverwrites.delete(member);
            message.delete();
        } else if (!isNaN(betAmount) && betAmount > 0 && data.coins < betAmount) {
            try {
                await message.author.send({
                    content: `ليس لديك ${betAmount.toLocaleString()}`
                });
            } catch {}
            message.delete();
        } else {
            message.delete();
        }
    }

    async handlePrefixCommand(message) {
        // Handle prefix-based commands like !give, !winnerspin, etc.
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        switch (command) {
            case 'renew':
                return this.handleRenew(message);
            case 'winnerspin':
                return this.handleWinnerSpin(message);
            case 'stats':
                return this.handleStats(message);
            case 'help':
                return this.handlePrefixHelp(message);
            case 'give':
                return this.handleGive(message, args);
            default:
                break;
        }
    }

    // Implement command handlers here
    async handleBlockList(message) {
        let data = await db.findOne({ id: message.author.id });
        if (!data || data.blocked.length === 0) {
            let embed = new MessageEmbed().setColor(serverColor).setDescription(`> لا يوجد لديك أي لاعبين محظورين حاليًا!`);
            return message.reply({ embeds: [embed] });
        }
        let blockedUsersList = data.blocked.map(blockedUserId => `<@${blockedUserId}>`).join(', ');
        let embed = new MessageEmbed().setColor(serverColor).setDescription(`> قائمة اللاعبين المحظورين: ${blockedUsersList}`);
        message.reply({ embeds: [embed] });
    }

    async handleUnblock(message, args) {
        if (!args[1]) return message.reply({ content: `> يرجى تحديد عضو لفك البلوك عنه!` });
        let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
        if (!user) return message.reply({ content: `\`❎\` **لم أستطع العثور على هذا الشخص!**` });
        if (user.id === message.author.id) return message.reply({ content: "بتبوض شرع ربنا انت؟" });
        let data = await db.findOne({ id: message.author.id });
        if (!data || !data.blocked.includes(user.id)) {
            return message.reply({ content: `> ${user} لم يتم حظره من قبل!` });
        }
        data.blocked = data.blocked.filter(blockedUser => blockedUser !== user.id);
        await data.save();
        let embed = new MessageEmbed().setColor(serverColor).setDescription(`> تم فك البلوك عن ${user} بنجاح!`);
        message.reply({ embeds: [embed] });
    }

    // Add more command handlers as needed...

    async handleHelp(message) {
        let embed = new MessageEmbed().setColor(serverColor).setTitle("أوامر البوت").setDescription("قائمة بأوامر البوت المتاحة:").addFields({
            name: "`تحدي`", value: "لتحدي شخص معين. المثال: `تحدي @user 5k`", inline: true
        }, {
            name: "`فلوس`", value: "لعرض رصيدك ورصيد الآخرين.", inline: true
        }, {
            name: "`كاش`", value: "لعرض رصيدك في الكاش باك وسحبه إن أردت.", inline: true
        }, {
            name: "`توب`", value: "لعرض أغنى اللاعبين من حيث الرصيد.", inline: true
        }, {
            name: "`تحويل`", value: "لتحويل رصيد من شخص إلى آخر.", inline: true
        }, {
            name: "`فرند`", value: "لإضافة صديق إلى قائمة أصدقائك.", inline: true
        }, {
            name: "`حذف`", value: "لحذف صديق من قائمة أصدقائك.", inline: true
        }, {
            name: "`فرندز`", value: "لعرض قائمة أصدقائك.", inline: true
        }, {
            name: "`تحدي عام`", value: "لتتمكن من تحدي كل الناس", inline: true
        }, {
            name: "`تحدي فرندز`", value: "لتتمكن من تحدي أصدقائك فقط", inline: true
        }, {
            name: "`بلوك`", value: "لمنع لاعب من التفاعل معك.", inline: true
        }, {
            name: "`فك`", value: "لإلغاء الحظر عن لاعب.", inline: true
        }, {
            name: "`بلوكز`", value: "لعرض قائمة اللاعبين المحظورين عندك.", inline: true
        }, {
            name: "`شحن`", value: "لعرض من اي يقوم بل شحن.", inline: true
        }, {
            name: "`بري`", value: "لشراء البريميوم", inline: true
        }, {
            name: "ربط", value: "لربط حساب بنكي بحسابك", inline: true
        }, {
            name: "فصل", value: "لفصل حسابك من البنك", inline: true
        }, {
            name: "سحب", value: "لسحب الأموال من البنك", inline: true
        }, {
            name: "ايداع", value: "لايداع الأموال لحسابك البنكي", inline: true
        }, {
            name: "`روليت`", value: "للعب الروليت للبريميوم فقط", inline: true
        }, {
            name: "`بنك`", value: "لترى كم رصيدك في البنك للبريميوم فقط", inline: true
        }, {
            name: "`ملف`", value: "لترى معلومات حول شخص معين", inline: true
        }, {
            name: "`تفاحة`", value: "للعب لعبة التفاحة", inline: true
        }, {
            name: "`قنابل`", value: "للعب لعبة القنابل الجديدة", inline: true
        }, {
            name: "`دايلي`", value: "لأخذ راتبك اليومي", inline: true
        });
        message.channel.send({ embeds: [embed] });
    }

    // Add placeholder implementations for other commands
    async handlePremium(message) {
        // Implementation for premium command
        message.reply('Premium command not fully implemented yet.');
    }

    async handleTop(message) {
        try {
            const topUsers = await db.find({}, { id: 1, coins: 1 }).sort({ coins: -1 }).limit(15);
            if (!topUsers.length) {
                return message.reply("🚫 لا يوجد أي شخص في التوب بعد.");
            }
            const leaderboard = topUsers.map((entry, index) => {
                return `${"\u200E"}${index === 0 ? `${crownemoji}**.**` : `**${index + 1}.**`} <@${entry.id}>  \`—\`  **${formatCoins(entry.coins)}**`;
            }).slice(0, 10).join("\n");
            const embed = new MessageEmbed().setAuthor({ name: "🏆 توب الرصيد" }).setColor(serverColor).setDescription(leaderboard).setFooter({ text: message.guild?.name || "Unknown Server" }).setTimestamp();
            await message.reply({ embeds: [embed] });
        } catch (error) {
            console.error("Error generating leaderboard:", error);
            message.reply("❌ حدث خطأ أثناء عرض التوب.");
        }
    }

    async handleMoney(message) {
        if (message.channel.id == GAME_CHANNEL_ID) return;
        if (isBlacklisted(message.author.id)) return;
        let user = message.mentions.users.first() || message.author;
        let data = await db.findOne({ id: user.id });
        if (!data) {
            data = await db.create({ id: user.id, coins: 0, status_playing: "no" });
        }
        let embed = new MessageEmbed().setColor(serverColor).setThumbnail(user.avatarURL({ dynamic: true })).setTitle(`الرصيد الحالي لـ ${user.tag}`).setDescription(`> $${parseInt(data.coins).toLocaleString()}`);
        if (links[user.id]) {
            const linkedUserId = links[user.id];
            const linkedUserData = await db.findOne({ id: linkedUserId });
            embed.addFields({ name: "رصيد حسابه البنكي ", value: `> $${parseInt(linkedUserData ? linkedUserData.coins : 0).toLocaleString()}` });
        }
        embed.setFooter({ text: message.guild.name }).setTimestamp();
        return message.reply({ embeds: [embed], content: `> ${message.author}` });
    }

    async handleChallenge(message) {
        // Implementation for challenge command
        message.reply('Challenge command not fully implemented yet.');
    }

    // Add more handlers as needed...
}

module.exports = MessageHandler;
