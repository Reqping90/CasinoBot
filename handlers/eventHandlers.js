const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Permissions } = require('discord.js');
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

class EventHandlers {
    constructor(client) {
        this.client = client;
    }

    async handleVoiceStateUpdate(oldState, newState) {
        const connection = getVoiceConnection(newState.guild.id);
        if (oldState.member.id === this.client.user.id && !newState.channelId) {
            setTimeout(connectToVoice, 500);
        }
        if (newState.channelId === voiceChannelId && oldState.channelId !== voiceChannelId && !newState.member.user.bot) {
            const conn = connection || connectToVoice();
            speakArabic(conn, "مرحبا بك في حِلْمْ كازينو");
        }
    }

    async handleInteractionCreate(interaction) {
        if (!interaction.isCommand()) return;

        if (interaction.commandName === 'setup') {
            // Handle setup slash command
            await interaction.reply({ content: 'Setup command executed!', ephemeral: true });
        }
    }

    async handleMessageReactionAdd(reaction, user) {
        // Handle message reactions if needed
    }

    async handleGuildMemberAdd(member) {
        // Handle new member joins
    }

    async handleGuildMemberRemove(member) {
        // Handle member leaves
    }
}

module.exports = EventHandlers;
