const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const db = require("../models/databaseusers");
const clansdb = require("../models/clans");
const kombe = require("../models/sahb");
const privdata = require("../models/privatechannels");
const game = require("../models_games/game");
const setinv = require('../models/setinv');
const dbcodes = require("../models/codes");
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
    tryMakeBotWin
} = require('../index');

class InteractionHandler {
    constructor(client) {
        this.client = client;
        this.interactions = new Map();
        this.registerInteractions();
    }

    registerInteractions() {
        // Register interaction handlers
        this.interactions.set('confirm_premium', this.handleConfirmPremium.bind(this));
        this.interactions.set('cancel_premium', this.handleCancelPremium.bind(this));
        this.interactions.set('claimbox_', this.handleClaimBox.bind(this));
        this.interactions.set('withdraw_', this.handleWithdraw.bind(this));
        this.interactions.set('deposit_', this.handleDeposit.bind(this));
        this.interactions.set('confirm_joinclan', this.handleConfirmJoinClan.bind(this));
        this.interactions.set('cancel_joinclan', this.handleCancelJoinClan.bind(this));
        this.interactions.set('confirm_renameclan', this.handleConfirmRenameClan.bind(this));
        this.interactions.set('cancel_renameclan', this.handleCancelRenameClan.bind(this));
        this.interactions.set('accept', this.handleAcceptLink.bind(this));
        this.interactions.set('reject', this.handleRejectLink.bind(this));
        this.interactions.set('cancel', this.handleCancelLink.bind(this));
        this.interactions.set('game_select_', this.handleGameSelect.bind(this));
        this.interactions.set('playdice_', this.handlePlayDice.bind(this));
        this.interactions.set('minesweeperbutton_', this.handleMinesweeper.bind(this));
        this.interactions.set('cashout_', this.handleCashout.bind(this));
        this.interactions.set('move_', this.handleMove.bind(this));
        this.interactions.set('quit', this.handleQuit.bind(this));
        this.interactions.set('startBet', this.handleStartBet.bind(this));
        this.interactions.set('withdrawWinnings', this.handleWithdrawWinnings.bind(this));
        this.interactions.set('buyroomprv', this.handleBuyRoom.bind(this));
        this.interactions.set('takenickname', this.handleTakeNickname.bind(this));
        this.interactions.set('createclan', this.handleCreateClan.bind(this));
        this.interactions.set('removeclan', this.handleRemoveClan.bind(this));
        this.interactions.set('infoclans', this.handleInfoClans.bind(this));
        this.interactions.set('withdrawcredit', this.handleWithdrawCredit.bind(this));
        this.interactions.set('cancelwithdrawcredit', this.handleCancelWithdrawCredit.bind(this));
        this.interactions.set('infowithdrawcredit', this.handleInfoWithdrawCredit.bind(this));
        this.interactions.set('redeem', this.handleRedeem.bind(this));
        this.interactions.set('lotteryButton', this.handleLotteryButton.bind(this));
        this.interactions.set('select_ticket', this.handleSelectTicket.bind(this));
        this.interactions.set('challenge_select', this.handleChallengeSelect.bind(this));
        this.interactions.set('copyTransfer', this.handleCopyTransfer.bind(this));
        this.interactions.set('normal_spin', this.handleNormalSpin.bind(this));
        this.interactions.set('legendary_spin', this.handleLegendarySpin.bind(this));
        this.interactions.set('deletecode_select', this.handleDeleteCodeSelect.bind(this));
        this.interactions.set('ticketCode', this.handleTicketCode.bind(this));
    }

    async handleInteraction(interaction) {
        if (!interaction.isButton() && !interaction.isSelectMenu()) return;

        const customId = interaction.customId;

        // Check for prefix matches
        for (const [key, handler] of this.interactions) {
            if (customId.startsWith(key)) {
                try {
                    await handler(interaction, customId);
                } catch (error) {
                    console.error(`Error handling interaction ${customId}:`, error);
                    interaction.reply({ content: 'حدث خطأ أثناء معالجة التفاعل.', ephemeral: true }).catch(() => {});
                }
                return;
            }
        }

        // Handle exact matches
        if (this.interactions.has(customId)) {
            try {
                await this.interactions.get(customId)(interaction);
            } catch (error) {
                console.error(`Error handling interaction ${customId}:`, error);
                interaction.reply({ content: 'حدث خطأ أثناء معالجة التفاعل.', ephemeral: true }).catch(() => {});
            }
        }
    }

    // Interaction handlers
    async handleConfirmPremium(interaction) {
        if (interaction.user.id !== interaction.message.interaction.user.id) {
            return interaction.reply({ content: "> ❌ **لا يمكنك استخدام هذا الزر!**", ephemeral: true });
        }

        let data = await db.findOne({ id: interaction.user.id });
        if (data.coins >= 50000) {
            data.coins -= 50000;
            data.premiumExpires = moment().add(1, 'months').toDate();
            data.premium = true;
            await data.save();
            await interaction.update({ content: 'تمت الترقية إلى بريميوم بنجاح!', embeds: [], components: [] });
        } else {
            await interaction.update({ content: 'ليس لديك رصيد كافي للترقية.', embeds: [], components: [] });
        }
        activeOperations.delete(interaction.user.id);
    }

    async handleCancelPremium(interaction) {
        if (interaction.user.id !== interaction.message.interaction.user.id) {
            return interaction.reply({ content: "> ❌ **لا يمكنك استخدام هذا الزر!**", ephemeral: true });
        }
        await interaction.update({ content: 'تم إلغاء الترقية.', embeds: [], components: [] });
        activeOperations.delete(interaction.user.id);
    }

    async handleClaimBox(interaction, customId) {
        const msgId = customId.split('_')[1];
        if (interaction.message.id !== msgId) return;

        let data = await db.findOne({ id: interaction.user.id });
        if (!data) data = await db.create({ id: interaction.user.id, coins: 0 });

        // Assuming codeamount is stored somewhere, for now using a placeholder
        const codeamount = 1000; // This should be retrieved from the message or stored data
        data.coins += codeamount;
        await data.save();

        await interaction.update({
            embeds: [new MessageEmbed().setColor(serverColor).setTitle('بوكس جديد!').setThumbnail(interaction.guild.iconURL({ dynamic: true })).addFields({
                name: 'الجائزة:', value: `${formatCoins(codeamount)}`, inline: true
            }, {
                name: 'الفائز:', value: `<@${interaction.user.id}>`, inline: true
            }, {
                name: 'تم إنشاؤه من قبل:', value: `<@${client.user.id}>`, inline: false
            }).setFooter({ text: '7lm Casino', iconURL: interaction.guild.iconURL({ dynamic: true }) }).setTimestamp()],
            components: [new MessageActionRow().addComponents(new MessageButton().setCustomId(`claimbox_${msgId}`).setLabel('أخذ').setStyle('SECONDARY').setDisabled(true))]
        });

        await interaction.followUp({ content: `تم استلام الجائزة من قبل ${interaction.user}` });
    }

    // Add more interaction handlers as needed...

    async handleGameSelect(interaction, customId) {
        const userId = customId.split('_')[2];
        if (interaction.user.id !== userId) return;

        const selectedValue = interaction.values[0];
        // Handle game selection logic here
        // This would be a large implementation, similar to the original code
        await interaction.reply({ content: 'Game selection not fully implemented yet.', ephemeral: true });
    }

    async handlePlayDice(interaction, customId) {
        const userId = customId.split('_')[1];
        if (interaction.user.id !== userId) return;

        // Handle dice playing logic
        await interaction.reply({ content: 'Dice play not fully implemented yet.', ephemeral: true });
    }

    // Placeholder implementations
    async handleWithdraw(interaction, customId) {
        await interaction.reply({ content: 'Withdraw not implemented yet.', ephemeral: true });
    }

    async handleDeposit(interaction, customId) {
        await interaction.reply({ content: 'Deposit not implemented yet.', ephemeral: true });
    }

    async handleConfirmJoinClan(interaction) {
        await interaction.reply({ content: 'Join clan not implemented yet.', ephemeral: true });
    }

    async handleCancelJoinClan(interaction) {
        await interaction.reply({ content: 'Cancel join clan not implemented yet.', ephemeral: true });
    }

    async handleConfirmRenameClan(interaction) {
        await interaction.reply({ content: 'Rename clan not implemented yet.', ephemeral: true });
    }

    async handleCancelRenameClan(interaction) {
        await interaction.reply({ content: 'Cancel rename clan not implemented yet.', ephemeral: true });
    }

    async handleAcceptLink(interaction) {
        await interaction.reply({ content: 'Accept link not implemented yet.', ephemeral: true });
    }

    async handleRejectLink(interaction) {
        await interaction.reply({ content: 'Reject link not implemented yet.', ephemeral: true });
    }

    async handleCancelLink(interaction) {
        await interaction.reply({ content: 'Cancel link not implemented yet.', ephemeral: true });
    }

    async handleMinesweeper(interaction, customId) {
        await interaction.reply({ content: 'Minesweeper not implemented yet.', ephemeral: true });
    }

    async handleCashout(interaction, customId) {
        await interaction.reply({ content: 'Cashout not implemented yet.', ephemeral: true });
    }

    async handleMove(interaction, customId) {
        await interaction.reply({ content: 'Move not implemented yet.', ephemeral: true });
    }

    async handleQuit(interaction) {
        await interaction.reply({ content: 'Quit not implemented yet.', ephemeral: true });
    }

    async handleStartBet(interaction) {
        await interaction.reply({ content: 'Start bet not implemented yet.', ephemeral: true });
    }

    async handleWithdrawWinnings(interaction) {
        await interaction.reply({ content: 'Withdraw winnings not implemented yet.', ephemeral: true });
    }

    async handleBuyRoom(interaction) {
        await interaction.reply({ content: 'Buy room not implemented yet.', ephemeral: true });
    }

    async handleTakeNickname(interaction) {
        await interaction.reply({ content: 'Take nickname not implemented yet.', ephemeral: true });
    }

    async handleCreateClan(interaction) {
        await interaction.reply({ content: 'Create clan not implemented yet.', ephemeral: true });
    }

    async handleRemoveClan(interaction) {
        await interaction.reply({ content: 'Remove clan not implemented yet.', ephemeral: true });
    }

    async handleInfoClans(interaction) {
        await interaction.reply({ content: 'Info clans not implemented yet.', ephemeral: true });
    }

    async handleWithdrawCredit(interaction) {
        await interaction.reply({ content: 'Withdraw credit not implemented yet.', ephemeral: true });
    }

    async handleCancelWithdrawCredit(interaction) {
        await interaction.reply({ content: 'Cancel withdraw credit not implemented yet.', ephemeral: true });
    }

    async handleInfoWithdrawCredit(interaction) {
        await interaction.reply({ content: 'Info withdraw credit not implemented yet.', ephemeral: true });
    }

    async handleRedeem(interaction) {
        await interaction.reply({ content: 'Redeem not implemented yet.', ephemeral: true });
    }

    async handleLotteryButton(interaction) {
        await interaction.reply({ content: 'Lottery button not implemented yet.', ephemeral: true });
    }

    async handleSelectTicket(interaction) {
        await interaction.reply({ content: 'Select ticket not implemented yet.', ephemeral: true });
    }

    async handleChallengeSelect(interaction) {
        await interaction.reply({ content: 'Challenge select not implemented yet.', ephemeral: true });
    }

    async handleCopyTransfer(interaction) {
        await interaction.reply({ content: 'Copy transfer not implemented yet.', ephemeral: true });
    }

    async handleNormalSpin(interaction) {
        await interaction.reply({ content: 'Normal spin not implemented yet.', ephemeral: true });
    }

    async handleLegendarySpin(interaction) {
        await interaction.reply({ content: 'Legendary spin not implemented yet.', ephemeral: true });
    }

    async handleDeleteCodeSelect(interaction) {
        await interaction.reply({ content: 'Delete code select not implemented yet.', ephemeral: true });
    }

    async handleTicketCode(interaction) {
        await interaction.reply({ content: 'Ticket code not implemented yet.', ephemeral: true });
    }
}

module.exports = InteractionHandler;
