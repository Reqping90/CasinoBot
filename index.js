/////////////////////////////////// Constants //////////////////////////////////
const roleOptions = [{
	label: "هدايا",
	value: '1',
	roleId: '1414939374688276652',
	emoji: "🎁"
}, {
	label: "تحديثات",
	value: '2',
	roleId: '1414939402207105126',
	emoji: "♻️"
}, {
	label: "أخبار",
	value: '3',
	roleId: '1414939400818790462',
	emoji: "📰"
}, {
	label: "تحداني من 100 إلى الف",
	value: '4',
	roleId: '1414939400042840134',
	emoji: "🎮"
}, {
	label: "تحداني من 1000 إلى 10 الاف",
	value: '5',
	roleId: '1414939399027691600',
	emoji: "🎮"
}, {
	label: "تحداني من 10 الاف إلى 50 الاف",
	value: '6',
	roleId: '1414939398092361850',
	emoji: "🎮"
}, {
	label: "تحداني أكثر من 50 الف",
	value: '7',
	roleId: '1414939396955832351',
	emoji: "🎮"
}]
const prizes = {
	normal: [{
		label: '1000',
		weight: 55
	}, {
		label: '2000',
		weight: 55
	}, {
		label: '3000',
		weight: 55
	}, {
		label: '5000',
		weight: 50
	}, {
		label: '10000',
		weight: 40
	}, {
		label: '20000',
		weight: 15
	}, {
		label: '30000',
		weight: 6
	}, {
		label: '40000',
		weight: 6
	}],
	legendary: [{
		label: '5000',
		weight: 70
	}, {
		label: '10000',
		weight: 60
	}, {
		label: '20000',
		weight: 30
	}, {
		label: '30000',
		weight: 6
	}, {
		label: '40000',
		weight: 6
	}, {
		label: '50000',
		weight: 1
	}, {
		label: 'اعادة',
		weight: 60
	}]
};
const emojiMap = {
	"1": ["<:1re:1365135661459443752>"],
	"2": ["<:2re:1368643943868272811>"],
	"3": ["<:3re:1368644027305427125>"],
	"4": ["<:4re:1368644102345719838>"],
	"5": ["<:5re:1368644170822058156>"],
	"6": ["<:6re:1368644264606568488>"],
	"7": ["<:7re:1368644313499570326>"],
	"8": ["<:8re:1368644352833884333>"],
	"9": ["<:9re:1368644387197947976>"],
	"10": ["<:10re:1368644421582721075>"],
	"11": ["<:Jb:1368642061200527491>"],
	"12": ["<:Qb:1368642117181767762>"],
	"13": ["<:kb:1368641902034948126>"]
};
const targetMultipliers = {
	2: 1.5,
	3: 1.7,
	4: 2,
	5: 2.5,
	6: 3,
	7: 3.5,
	8: 4,
	9: 4.5,
	10: 5,
	11: 5.5,
	12: 6,
	13: 6.5,
	14: 7,
	15: 8
};
const LEVELS = [{
	correct: 4,
	multiplier: 0.5
}, {
	correct: 3,
	multiplier: 1
}, {
	correct: 2,
	multiplier: 2
}, {
	correct: 1,
	multiplier: 10
}];
const API_KEY = '2399bedc87264d7f98a6271232b4e159';
const BASE_URL = 'https://api.football-data.org/v4/';
///////////////////////////////// Dependencies /////////////////////////////////
const {
	Client,
	MessageEmbed,
	MessageActionRow,
	MessageButton,
	MessageSelectMenu,
	Permissions,
	MessageAttachment,
	Modal,
	TextInputComponent
} = require('discord.js');
const {
	joinVoiceChannel,
	getVoiceConnection,
	createAudioPlayer,
	createAudioResource,
	AudioPlayerStatus,
	NoSubscriberBehavior
} = require("@discordjs/voice");
const googleTTS = require("google-tts-api");
const {
	Probot
} = require("discord-probot-transfer");
const cron = require('node-cron');
const {
	createCanvas,
	loadImage
} = require('canvas');
const {
	disablebotbet,
	logRoomSupport,
	logTickets,
	categoryIdSupport,
	categoryIdApply,
	channelwinningspin,
	BOT_RATE,
	borrowedrole,
	disableprembank,
	ticketcategid,
	betcateg,
	privateroomcateg,
	channelidpanel,
	channelidclanpanel,
	probotId,
	ownertr,
	champrolename,
	unrealrolename,
	profilepng,
	logwelcome,
	bettingserverid,
	premiumroleid,
	blacklistrolename,
	topmoneyrolename,
	COMMAND_CHANNEL_ID,
	feedbackchannel,
	allbetschannelcrashid,
	allbetschannelid,
	linelineline,
	TAX_RATE,
	bankusername,
	channelrewardspin,
	GAME_CHANNEL_ID,
	nardwinners,
	bannerlink,
	managerrole,
	panelid,
	clanpanelid,
	addedmulti,
	notifycateg,
	selfChannelId,
	crownemoji,
	psychemoji,
	hiddenemoji,
	channelreward,
	ownerrole,
	rsrole,
	logsall,
	supportcateg,
	supportRoleId,
	setlimitrole,
	serverColor,
	statuses,
	WITHDRAW_CHANNEL_ID,
	logaddrmv,
	Transfer,
	loggetcoin,
	emojilegend,
	emojinormal,
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
} = require('./config.json');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
let antiCrash = require('discord-anticrash')
require('./traceInteractions');
const { connect } = require("mongoose");
const timestamp = require('discord-timestamp');
const moment = require("moment");
const ms = require('ms');
const uri = process.env.mongoose;
const db = require("./models/databaseusers")
const clansdb = require("./models/clans")
const dbcodes = require("./models/codes")
const kombe = require("./models/sahb")
const privdata = require("./models/privatechannels")
const game = require("./models_games/game")
const minegame = require('./models_games/minegame')
const PvpMinesweeper = require('./models_games/bombgame')
const xoGame = require('./models_games/xogame')
const nrd = require("./models_games/nrd")
const rpsgamedata = require("./models_games/rpsgamedata")
const nrdusr = require("./models_games/nrdusergame")
const takribi = require("./models_games/takribi")
const tkusr = require("./models_games/takribiusergame")
const setinv = require('./models/setinv');
const InviteDatabase = require('./models/dbinv');
const dataPath = path.join(__dirname, 'data');
const ticketsFile = path.join(dataPath, 'tickets.json');
const winnersFile = path.join(dataPath, 'winners.json');
const TofehaGame = require("./models_games/tofeha");
const invites = new Map();
const activeOperations = new Set();
const activeOperationsClansDelete = new Set();
const activeOperationsClansCreate = new Set();
const activeOperationsClansAddMember = new Set();
const activeOperationsClansRename = new Set();
const cooldowns12 = new Map();
const pendingRequests = new Set();
const inProgress = new Map();
const betAmounts = new Map();
const cooldowns5 = new Map();
const deleteCooldowns = new Map();
let currentMultiplier = 0.0;
let gameInterval = null;
let gameMessage = null;
let gameStarted = false;
let gamegameStarted = false;
let blacklistedUsers = [];
let links = {};
const cards = Object.keys(emojiMap);
////////////////////////////////// Initialisation //////////////////////////////
connect(uri).then(() => {
	console.log('DATABASE CONNECT');
}).catch();
loadBlacklistedUsers();
const client = new Client({
	intents: 53608447
});
client.probot = Probot(client, {
	fetchGuilds: true,
	data: [{
		fetchMembers: true,
		guildId: bettingserverid,
		probotId: probotId,
		owners: ownertr,
	},],
});
client.login(process.env.token);
new antiCrash(client, {
	enableAntiCrash: 'true'
});
setInterval(sendRandomBox, Math.floor(Math.random() * (3600000 - 1800000 + 1)) + 1800000);
if (fs.existsSync('links.json')) {
	links = JSON.parse(fs.readFileSync('links.json', 'utf-8'));
}
if (!fs.existsSync(dataPath)) {
	fs.mkdirSync(dataPath, {
		recursive: true
	});
}
/////////////////////////////// Utility Functions //////////////////////////////
function saveLinks() {
	fs.writeFileSync('links.json', JSON.stringify(links, null, 2), 'utf-8');
}
function updateButtonStyles(rows, clickedButtonId, correctButtonId, disableall = false) {
	return rows.map(row => {
		const newRow = new MessageActionRow();
		row.components.forEach(button => {
			if (button.customId === clickedButtonId) {
				newRow.addComponents(new MessageButton().setCustomId('clicked' + button.customId).setEmoji(button.customId === correctButtonId ? crownemoji : psychemoji).setStyle(button.customId === correctButtonId ? 'SUCCESS' : 'DANGER').setDisabled(true));
			} else if (button.customId.startsWith("clicked")) {
				newRow.addComponents(new MessageButton().setCustomId(button.customId).setEmoji(psychemoji).setStyle('DANGER').setDisabled(true));
			} else {
				newRow.addComponents(new MessageButton().setCustomId(button.customId).setEmoji(hiddenemoji).setStyle('PRIMARY').setDisabled(disableall));
			}
		});
		return newRow;
	});
}
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
function createGrid(level, pressedButtons, buttonOrder, currentLevel, gameEnded) {
	const shuffledButtons = buttonOrder[level];
	const rowComponents = shuffledButtons.map(button => {
		let emoji = '🔲';
		const pressedButton = pressedButtons.find(b => b.level === level && b.index === button.index);
		if (pressedButton) {
			emoji = pressedButton.result === 'correct' ? '<:correctapple:1270208069518757938>' : '<:bittenapple:1270208087453732928>';
		} else if (gameEnded) {
			emoji = button.correct === true ? '<:correctapple:1270208069518757938>' : '<:bittenapple:1270208087453732928>';
		}
		return new MessageButton().setCustomId(`${button.id}_${button.index}_${level}`).setEmoji(emoji).setStyle('PRIMARY').setDisabled(gameEnded || level !== currentLevel);
	});
	const row = new MessageActionRow().addComponents(rowComponents);
	return row;
}
function createQuitButton(disableee) {
	return new MessageButton().setCustomId('quit').setLabel('إنهاء').setStyle('DANGER').setDisabled(disableee);
}
function getLevelDescription(level) {
	const levelInfo = LEVELS[level];
	return `المستوى ${level + 1}: ضرب المضاعف ×${levelInfo.multiplier}`;
}
async function allbetssendtofeha(winner, win, amount) {
	let channeltosend = client.channels.cache.get(allbetschannelid)
	if (win == 1) {
		let embed = new MessageEmbed().setDescription(`**<@${winner.id}> , فاز في لعبة التفاحة بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		channeltosend.send({
			embeds: [embed]
		});
		channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**<@${winner.id}> , فاز في لعبة التفاحة بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channell.send({
			embeds: [embedd]
		})
	} else if (win == 0) {
		let embed = new MessageEmbed().setDescription(`**<@${winner.id}> , خسر في لعبة التفاحة بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channeltosend.send({
			embeds: [embed]
		});
		await channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**<@${winner.id}> , خسر في لعبة التفاحة بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channell.send({
			embeds: [embedd]
		})
	}
}
async function getRandomNumber() {
	const losenumbers = [0.6, 0.6, 0.6, 0.8, 0.8, 1];
	const wins = [
		1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2,
		1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4,
		1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6,
		1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8,
		2.0, 2.0, 2.0, 2.0, 2.0, 2.0,
		2.2, 2.2, 2.2, 2.2, 2.2,
		2.4, 2.4, 2.4, 2.4,
		2.6, 2.6, 2.6,
		2.8, 2.8,
		3.0
	]
	let winnumbers = wins
	const win = [true, false, true, false, true]
	const winor = win[parseInt(Math.random() * win.length)]
	if (winor == true) {
		return winnumbers[parseInt(Math.random() * winnumbers.length)]
	} else if (winor == false) {
		return losenumbers[parseInt(Math.random() * losenumbers.length)]
	}
}
async function clearAllMessages(channel) {
	try {
		fetched = await channel.messages.fetch({
			limit: 100
		});
		await channel.bulkDelete(fetched);
	} catch { }
}
async function startGamecrash() {
	const randomMultiplierrrr = await getRandomNumber();
	const randomMultiplier = randomMultiplierrrr + addedmulti
	const channel = await client.channels.fetch(GAME_CHANNEL_ID);
	const embed = new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424438042218860676/image.png?ex=68e49b8e&is=68e34a0e&hm=891a8e99ab6ea7ae9e99bf8144a53db913a0d1edf92d95f97ba009c6bbfc7dce&').setDescription('اللعبة ستبدأ بعد 10 ثواني. ضع رهان').addFields({
		name: 'الحالة',
		value: 'بانتظار الرهانات',
		inline: true
	}).setColor(serverColor);
	clearAllMessages(channel);
	await channel.send({
		files: [linelineline]
	});
	gameMessage = await channel.send({
		content: "** **",
		embeds: [embed],
		components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('startBet').setLabel('وضع رهان').setStyle('PRIMARY'), new MessageButton().setCustomId('withdrawWinnings').setLabel('التقاط مكسب').setStyle('SUCCESS').setDisabled(true))]
	});
	channel.send({
		files: [linelineline]
	});
	await new Promise(resolve => setTimeout(resolve, 1000));
	for (i = 9; i >= 1; i--) {
		embedd = new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424438042218860676/image.png?ex=68e49b8e&is=68e34a0e&hm=891a8e99ab6ea7ae9e99bf8144a53db913a0d1edf92d95f97ba009c6bbfc7dce&').setDescription(`اللعبة ستبدأ بعد ${i} ثواني. ضع رهان`).addFields({
			name: 'الحالة',
			value: 'بانتظار الرهانات',
			inline: true
		}).setColor(serverColor);
		gameMessage.edit({
			embeds: [embedd]
		});
		await new Promise(resolve => setTimeout(resolve, 1000));
	}
	gameStarted = true;
	currentMultiplier = 0.0;
	gamegameStarted = true;
	if (currentMultiplier >= randomMultiplier) {
		clearInterval(gameInterval);
		await gameMessage.edit({
			embeds: [new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424437992331673761/image.png?ex=68e49b82&is=68e34a02&hm=347f63314263d4daa0fb8e573bee5ab542f5e2dd6e2e55082ac180bdafd074b8&').setDescription('الطائرة صدمت واللعبة انتهت').addFields({
				name: 'المضاعف النهائي',
				value: `${currentMultiplier.toFixed(1)}`,
				inline: true
			}, {
				name: 'الحالة',
				value: 'الطائرة صدمت',
				inline: true
			}).setColor('#ff0000')],
			components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('startBet').setLabel('وضع رهان').setStyle('PRIMARY').setDisabled(true), new MessageButton().setCustomId('withdrawWinnings').setLabel('التقاط مكسب').setStyle('SUCCESS').setDisabled(true))]
		});
		betAmounts.forEach(async (amountt, loserid) => {
			let channeltosend = client.channels.cache.get(allbetschannelcrashid)
			let embed = new MessageEmbed().setDescription(`**<@${loserid}> خسر مبلغ ${amountt.toLocaleString()} في لعبة الطائرة :tada:**`);
			await channeltosend.send({
				embeds: [embed]
			});
			await channeltosend.send({
				files: [linelineline]
			});
		})
		betAmounts.clear();
		gameStarted = false;
		gamegameStarted = false;
	} else {
		await gameMessage.edit({
			embeds: [new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424438020446355587/image.png?ex=68e49b88&is=68e34a08&hm=7c8fcdd72da405249d0481a772ec5f1462f0b1a78e22c60fb6d04033bc3e3d65&').setDescription('الطائرة تطير').addFields({
				name: 'المضاعف الحالي',
				value: `${currentMultiplier.toFixed(1)}`,
				inline: true
			}, {
				name: 'الحالة',
				value: 'الطائرة لم تصدم',
				inline: true
			}).setColor(serverColor)],
			components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('startBet').setLabel('وضع رهان').setStyle('PRIMARY').setDisabled(true), new MessageButton().setCustomId('withdrawWinnings').setLabel('التقاط مكسب').setStyle('SUCCESS').setDisabled(false))]
		});
	}
	if (gamegameStarted) {
		gameInterval = setInterval(async () => {
			currentMultiplier += 0.2;
			gamegameStarted = true;
			if (currentMultiplier >= randomMultiplier) {
				clearInterval(gameInterval);
				await gameMessage.edit({
					embeds: [new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424437992331673761/image.png?ex=68e49b82&is=68e34a02&hm=347f63314263d4daa0fb8e573bee5ab542f5e2dd6e2e55082ac180bdafd074b8&').setDescription('الطائرة صدمت واللعبة انتهت').addFields({
						name: 'المضاعف النهائي',
						value: `${currentMultiplier.toFixed(1)}`,
						inline: true
					}, {
						name: 'الحالة',
						value: 'الطائرة صدمت',
						inline: true
					}).setColor('#ff0000')],
					components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('startBet').setLabel('وضع رهان').setStyle('PRIMARY').setDisabled(true), new MessageButton().setCustomId('withdrawWinnings').setLabel('التقاط مكسب').setStyle('SUCCESS').setDisabled(true))]
				});
				betAmounts.forEach(async (amountt, loserid) => {
					let channeltosend = client.channels.cache.get(allbetschannelcrashid)
					let embed = new MessageEmbed().setDescription(`**<@${loserid}> خسر مبلغ ${amountt.toLocaleString()} في لعبة الطائرة :tada:**`);
					await channeltosend.send({
						embeds: [embed]
					});
					await channeltosend.send({
						files: [linelineline]
					});
					let data = await db.findOne({
						id: loserid
					});
					if (!data) {
						data = await db.create({
							id: loserid,
							coins: 0,
							status_playing: "no"
						});
					}
					data.status_playing = "no";
					data.totallost += parseInt(amountt);
					data.cashback += parseInt(amountt * 0.02)
					await data.save();
				})
				betAmounts.clear();
				gameStarted = false;
				gamegameStarted = false;
			} else {
				await gameMessage.edit({
					embeds: [new MessageEmbed().setTitle('لعبة الطائرة:airplane_small:').setImage('https://cdn.discordapp.com/attachments/1416181366449635511/1424438020446355587/image.png?ex=68e49b88&is=68e34a08&hm=7c8fcdd72da405249d0481a772ec5f1462f0b1a78e22c60fb6d04033bc3e3d65&').setDescription('الطائرة تطير').addFields({
						name: 'المضاعف الحالي',
						value: `${currentMultiplier.toFixed(1)}`,
						inline: true
					}, {
						name: 'الحالة',
						value: 'الطائرة لم تصدم',
						inline: true
					}).setColor(serverColor)],
					components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('startBet').setLabel('وضع رهان').setStyle('PRIMARY').setDisabled(true), new MessageButton().setCustomId('withdrawWinnings').setLabel('التقاط مكسب').setStyle('SUCCESS').setDisabled(false))]
				});
			}
		}, 1000);
	}
}
function startGameLoop() {
	async function gameLoop() {
		while (true) {
			if (!gameStarted) {
				await startGamecrash();
			} else {
				await new Promise(resolve => setTimeout(resolve, 3000));
			}
		}
	}
	gameLoop();
}
async function updateTofehaGame(interaction, tofehaGame, correctPressed) {
	const player = await db.findOne({
		id: tofehaGame.playerId
	});
	const level = tofehaGame.currentLevel;
	const multiplier = LEVELS[level].multiplier;
	if (correctPressed) {
		tofehaGame.winnings = tofehaGame.betAmount * multiplier;
		tofehaGame.currentLevel += 1;
		if (tofehaGame.currentLevel >= LEVELS.length) {
			player.coins += parseInt(tofehaGame.winnings - tofehaGame.betAmount);
			player.winnumber += 1;
			player.totalwinnings += parseInt(tofehaGame.winnings - tofehaGame.betAmount);
			player.challengesnumber += 1;
			player.status_playing = "no";
			await player.save();
			await TofehaGame.deleteOne({
				messageId: tofehaGame.messageId
			});
			const playedRows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, true));
			const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription(`🎉 تهانينا! لقد ربحت ${tofehaGame.winnings} عملات!`);
			await interaction.update({
				content: `🎉 تهانينا! لقد ربحت ${tofehaGame.winnings} عملات!`,
				components: [...playedRows, new MessageActionRow().addComponents(createQuitButton(true))],
				embeds: [embed]
			});
			await allbetssendtofeha(player, 1, tofehaGame.winnings)
			return;
		}
	} else {
		player.coins -= tofehaGame.betAmount;
		player.cashback += parseInt(tofehaGame.betAmount * 0.02)
		player.losenumber += 1;
		player.totallost += parseInt(tofehaGame.betAmount);
		player.challengesnumber += 1;
		player.status_playing = "no";
		await player.save();
		await TofehaGame.deleteOne({
			messageId: tofehaGame.messageId
		});
		const playedRows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, true));
		const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription('لقد خسرت! هذه هي الصفوف التي لعبتها:');
		await interaction.update({
			content: `** **`,
			components: [...playedRows, new MessageActionRow().addComponents(createQuitButton(true))],
			embeds: [embed]
		});
		await allbetssendtofeha(player, 0, tofehaGame.betAmount)
		return;
	}
	tofehaGame.pressedButtons.push({
		level: level,
		index: parseInt(interaction.customId.split('_')[1], 10),
		result: correctPressed ? 'correct' : 'wrong'
	});
	tofehaGame.playedRows.push(level);
	await tofehaGame.save();
	const rows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, false));
	const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription(`${getLevelDescription(tofehaGame.currentLevel)}\nاضغط على الزر الصحيح للفوز!\n \nالمرابيح الحالية: ${tofehaGame.winnings.toLocaleString()}`);
	await interaction.update({
		content: ` `,
		components: [...rows, new MessageActionRow().addComponents(createQuitButton(false))],
		embeds: [embed]
	});
}
async function safeFetchChannel(channelId) {
	try {
		const channel = await client.channels.fetch(channelId);
		return channel;
	} catch (error) {
		if (error.code === 10003) {
			return null;
		} else {
			throw error;
		}
	}
}
function getTimeLeft(targetDate) {
	const now = new Date();
	const difference = targetDate - now;
	if (difference <= 0) {
		return 'The date has already passed!';
	}
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);
	return `${days} يوم, ${hours} ساعة, ${minutes} دقيقة, و ${seconds} ثانية`;
}
async function checkRoom(data) {
	try {
		const currentDate = new Date();
		const channell = await await safeFetchChannel(data.channelid)
		if (!channell) return await privdata.findOneAndDelete({
			channelid: data.channelid
		});
		if (new Date(data.expiredate) < currentDate) {
			channell.delete();
			await privdata.findOneAndDelete({
				channelid: data.channelid
			});
		} else {
			let messagee = await channell.messages.fetch(data.announcemessageid);
			const timeLeft = getTimeLeft(data.expiredate);
			let embed = new MessageEmbed().addFields({
				name: "> صاحب الروم :",
				value: `<@${data.owner}>`,
				inline: false
			}, {
				name: "> تبقي من مدة الروم :",
				value: timeLeft,
				inline: false
			}).setThumbnail(messagee.guild.iconURL({
				dynamic: true
			}))
			messagee.edit({
				embeds: [embed]
			})
		}
	} catch { }
}
function determineWinner(authorChoice, opponentChoice) {
	if (authorChoice === opponentChoice) return 'draw';
	if (
		(authorChoice === 'حجرة' && opponentChoice === 'مقص') || (authorChoice === 'مقص' && opponentChoice === 'ورقة') || (authorChoice === 'ورقة' && opponentChoice === 'حجرة')) {
		return 'author';
	} else {
		return 'opponent';
	}
}
async function initializeDatabase(guild) {
	const members = await guild.members.fetch();
	for (const [id, member] of members) {
		const existingMember = await InviteDatabase.findOne({
			userId: id
		});
		if (!existingMember) {
			const newMember = new InviteDatabase({
				userId: id,
				inviterName: member.user.username
			});
			newMember.save();
		}
	}
}
async function refreshInvites(guild) {
	try {
		const fetchedInvites = await guild.invites.fetch();
		invites.set(guild.id, new Map(fetchedInvites.map(invite => [invite.code, invite.uses])));
	} catch { }
}
function getRandomPrize(type) {
	const prizeList = prizes[type];
	const totalWeight = prizeList.reduce((sum, prize) => sum + prize.weight, 0);
	let random = Math.random() * totalWeight;
	for (const prize of prizeList) {
		random -= prize.weight;
		if (random < 0) return prize.label;
	}
}
async function alreadyinaclan(userid) {
	already = false
	let clans = await clansdb.find({})
	let i = 0
	do {
		already = clans[i].members.includes(userid)
		i += 1
	} while (i < clans.length && already == false)
	return already
}
async function myclann(userid) {
	clannamee = ""
	already = false
	let clans = await clansdb.find({})
	let i = 0
	if (clans.length == 0) return ""
	do {
		already = clans[i].members.includes(userid)
		if (already) {
			clannamee = clans[i].clanname
		}
		i += 1
	} while (i < clans.length && already == false)
	return clannamee
}
async function sendRandomBox() {
	const randomAmount = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
	const guild = client.guilds.cache.get(bettingserverid);
	const everyoneRole = guild.roles.everyone;
	const channels = client.channels.cache.filter(channel => channel.type === 'GUILD_TEXT' && notifycateg.includes(channel.parentId) && (channel.permissionsFor(everyoneRole)?.has('VIEW_CHANNEL', false) || channel.permissionsFor(everyoneRole)?.has('VIEW_CHANNEL', true)));
	const targetChannel = channels.random();
	const codeamount = parseInt(randomAmount)
	const embed = new MessageEmbed().setColor(serverColor).setTitle('بوكس جديد!').setThumbnail(targetChannel.guild.iconURL({
		dynamic: true
	})).addFields({
		name: 'الجائزة:',
		value: `${formatCoins(codeamount)}`,
		inline: true
	}, {
		name: '\u200B',
		value: '\u200B',
		inline: true
	}, {
		name: 'تم إنشاؤه من قبل:',
		value: `<@${client.user.id}>`,
		inline: false
	}).setFooter({
		text: '7lm Casino',
		iconURL: targetChannel.guild.iconURL({
			dynamic: true
		})
	}).setTimestamp();
	targetChannel.send(`<@&${giveawaymentionroleid}>`)
	await new Promise(resolve => setTimeout(resolve, 1000));
	targetChannel.send("3")
	await new Promise(resolve => setTimeout(resolve, 1000));
	targetChannel.send("2")
	await new Promise(resolve => setTimeout(resolve, 1000));
	targetChannel.send("1")
	await new Promise(resolve => setTimeout(resolve, 1000));
	let msg = await targetChannel.send({
		embeds: [embed]
	});
	const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`claimbox_${msg.id}`).setLabel('أخذ').setStyle('SECONDARY'));
	msg = await msg.edit({
		components: [row]
	});
	const filter = i => (i.customId === `claimbox_${msg.id}`);
	const collector = msg.createMessageComponentCollector({
		filter,
		time: 60000
	});
	collector.on('end', async collected => {
		if (!collected.size) {
			await msg.edit({
				content: 'تم إلغاء البوكس بسبب عدم التفاعل.',
				components: [],
				embeds: []
			});
		}
	});
	collector.on('collect', async i => {
		collector.stop();
		await msg.edit({
			embeds: [
				new MessageEmbed().setColor(serverColor).setTitle('بوكس جديد!').setThumbnail(i.guild.iconURL({
					dynamic: true
				})).addFields({
					name: 'الجائزة:',
					value: `${formatCoins(codeamount)}`,
					inline: true
				}, {
					name: 'الفائز:',
					value: `<@${i.user.id}>`,
					inline: true
				}, {
					name: 'تم إنشاؤه من قبل:',
					value: `<@${client.user.id}>`,
					inline: false
				}).setFooter({
					text: '7lm Casino',
					iconURL: i.guild.iconURL({
						dynamic: true
					})
				}).setTimestamp()
			],
			components: [
				new MessageActionRow().addComponents(new MessageButton().setCustomId(`claimbox_${msg.id}`).setLabel('أخذ').setStyle('SECONDARY').setDisabled(true))
			]
		});
		await i.reply({
			content: `تم استلام الجائزة من قبل ${i.user}`
		})
		let data = await db.findOne({
			id: i.user.id
		})
		if (!data) data = await db.create({
			id: i.user.id,
			coins: 0
		})
		data.coins += codeamount
		await data.save();
		return;
	});
}
function loadTickets() {
	try {
		if (fs.existsSync(ticketsFile)) {
			return JSON.parse(fs.readFileSync(ticketsFile, 'utf8'));
		}
	} catch (error) {
		console.error('Error loading tickets:', error);
	}
	return {};
}
function saveTickets(tickets) {
	try {
		fs.writeFileSync(ticketsFile, JSON.stringify(tickets, null, 2));
	} catch (error) {
		console.error('Error saving tickets:', error);
	}
}
function loadWinners() {
	try {
		if (fs.existsSync(winnersFile)) {
			return JSON.parse(fs.readFileSync(winnersFile, 'utf8'));
		}
	} catch (error) {
		console.error('Error loading winners:', error);
	}
	return [];
}
function saveWinners(winners) {
	try {
		fs.writeFileSync(winnersFile, JSON.stringify(winners, null, 2));
	} catch (error) {
		console.error('Error saving winners:', error);
	}
}
function generateTicketCode() {
	return settings.ticketPrefix + '-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}
function f(N) {
	if (N < 2 || N > 15) throw new Error("N must be between 2 and 15");
	const raw = 0.85 + ((N - 2) / (15 - 2)) * (0.98 - 0.85);
	const value = Math.min(0.98, Math.max(0.85, raw));
	return Number(value.toFixed(6));
}
function g(N) {
	if (N < 2 || N > 15) throw new Error("N must be between 2 and 15");
	const final = targetMultipliers[N];
	const S = 16 - N;
	const base = 0.85 + ((N - 2) / (15 - 2)) * (0.98 - 0.85);
	const gValue = Math.pow(final / base, 1 / S) - 1;
	return +gValue.toFixed(6);
}
function loadBlacklistedUsers() {
	try {
		const data = fs.readFileSync(path.resolve(__dirname, 'blacklist.json'));
		blacklistedUsers = JSON.parse(data);
	} catch { }
}
function isBlacklisted(userId) {
	try {
		const blacklistData = fs.readFileSync(path.resolve(__dirname, 'blacklist.json'));
		const blacklist = JSON.parse(blacklistData);
		return blacklist.some(user => user.id === userId);
	} catch {
		return false;
	}
}
function saveBlacklistedUsers() {
	try {
		fs.writeFileSync(path.resolve(__dirname, 'blacklist.json'), JSON.stringify(blacklistedUsers, null, 2));
	} catch { }
}
function addToBlacklist(userId) {
	if (!blacklistedUsers.find(user => user.id === userId)) {
		blacklistedUsers.push({
			id: userId
		});
		saveBlacklistedUsers();
	} else { }
}
function removeFromBlacklist(userId) {
	const index = blacklistedUsers.findIndex(user => user.id === userId);
	if (index !== -1) {
		blacklistedUsers.splice(index, 1);
		saveBlacklistedUsers();
	}
}
function connectToVoice() {
	const channel = client.channels.cache.get(voiceChannelId);
	if (!channel || channel.type !== "GUILD_VOICE") return;
	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: channel.guild.voiceAdapterCreator,
		selfDeaf: true,
		selfMute: false
	});
	return connection;
}
async function speakArabic(connection, text) {
	try {
		const url = googleTTS.getAudioUrl(text, {
			lang: "ar",
			slow: false,
			host: "https://translate.google.com"
		});
		const player = createAudioPlayer({
			behaviors: {
				noSubscriber: NoSubscriberBehavior.Pause
			}
		});
		const resource = createAudioResource(url);
		player.play(resource);
		connection.subscribe(player);
		player.on(AudioPlayerStatus.Idle, () => {
			player.stop();
		});
	} catch (err) {
		console.error("Error while speaking:", err);
	}
}
async function allbetssend(gametype, winner, loser, tie, amount) {
	let channeltosend = client.channels.cache.get(allbetschannelid)
	if (tie == 1) {
		let embed = new MessageEmbed().setDescription(`**[ <@${winner.id}> / <@${loser.id}> ] , تعادلوا في ال${gametype} على مبلغ ${amount.toLocaleString()} ! :balloon:**`);
		await channeltosend.send({
			embeds: [embed]
		});
		await channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**[ <@${winner.id}> / <@${loser.id}> ] , تعادلوا في ال${gametype} على مبلغ ${amount.toLocaleString()} ! :balloon:**`);
		await channell.send({
			embeds: [embedd]
		})
	} else if (tie == 0) {
		let embed = new MessageEmbed().setDescription(`**<@${winner.id}> تحدى <@${loser.id}> , وفاز في ال${gametype} بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channeltosend.send({
			embeds: [embed]
		});
		await channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**<@${winner.id}> تحدى <@${loser.id}> , وفاز في ال${gametype} بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channell.send({
			embeds: [embedd]
		})
	}
}
async function clearDatabase(user) {
	try {
		let data = await db.findOne({
			id: user
		});
		if (!data) {
			data = await db.create({
				id: user
			})
		}
		data.status_playing = "no";
		await data.save();
	} catch { }
}
async function clearAllDatabase() {
	try {
		let d = await db.find();
		d?.forEach(async (data) => {
			data.status_playing = "no";
			await data.save();
		})
	} catch { }
}
function addDuration(duration) {
	const timeUnits = {
		d: 'days',
		h: 'hours',
		m: 'minutes',
		s: 'seconds',
		ي: 'days',
		س: 'hours',
		دق: 'minutes',
		ث: 'seconds'
	};
	const match = duration.match(/^(\d+)([a-zA-Zأ-ي]+)$/);
	if (!match) return {
		undefined,
		undefined
	};
	const value = parseInt(match[1], 10);
	const unit = timeUnits[match[2]];
	if (!unit) throw new Error(`Unknown time unit: ${match[2]}`);
	return {
		value,
		unit
	};
}
function calculateDuration(duration) {
	const {
		value,
		unit
	} = addDuration(duration);
	return moment().add(value, unit).toDate();
}
function parseCoins(input) {
	if (input.endsWith("k") || input.endsWith("K") || input.endsWith("ك")) {
		return parseFloat(input.slice(0, -1)) * 1000;
	} else if (input.endsWith("m") || input.endsWith("M") || input.endsWith("م")) {
		return parseFloat(input.slice(0, -1)) * 1000000;
	} else if (input.endsWith("b") || input.endsWith("B")) {
		return parseFloat(input.slice(0, -1)) * 1000000000;
	} else if (!isNaN(input)) {
		return parseInt(input);
	} else {
		return null;
	}
}
function formatCoins(coins, language = "english") {
	if (coins >= 1000000000) {
		return (coins / 1000000000).toFixed(1) + (language == "english" ? 'B' : " مليار");
	} else if (coins >= 1000000) {
		return (coins / 1000000).toFixed(1) + (language == "english" ? 'M' : "م");
	} else if (coins >= 1000) {
		return (coins / 1000).toFixed(1) + (language == "english" ? 'K' : "ك");
	} else {
		return coins.toString();
	}
}
async function startPvPGame(msg, player1, player2, betAmount) {
	let correctButtons = new Set();
	while (correctButtons.size < 8) {
		correctButtons.add(Math.floor(Math.random() * 16));
	}
	let buttons = [];
	for (let i = 0; i < 16; i++) {
		let button = new MessageButton().setCustomId(`minesweeperbutton_${player1.id}_${player2.id}_${i}`).setEmoji('🔲').setStyle('PRIMARY').setDisabled(false);
		buttons.push(button);
	}
	let rows = [];
	for (let i = 0; i < 4; i++) {
		let row = new MessageActionRow().addComponents(buttons.slice(i * 4, (i + 1) * 4));
		rows.push(row);
	}
	const embed = new MessageEmbed().setTitle('لعبة الألغام').setDescription(`المبلغ: ${betAmount}`).addFields({
		name: 'نتائج اللعبة',
		value: 'انتظر اللاعبين لتبدأ اللعبة...'
	}).setColor('#0099ff');
	const gameState = new PvpMinesweeper({
		player1: {
			userId: player1.id,
			score: 0
		},
		player2: {
			userId: player2.id,
			score: 0
		},
		betAmount: betAmount,
		correctButtons: Array.from(correctButtons),
		buttonStates: Array(16).fill('PRIMARY'),
		messageId: msg.id
	});
	await gameState.save();
	await msg.edit({
		embeds: [embed],
		components: rows,
		content: `**الدور الآن عند <@${player1.id}>**`
	});
}
function getRandomNumbertakribi(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function createBoardComponents(board, disableAll = false) {
	const rows = [];
	for (let i = 0; i < 3; i++) {
		const row = new MessageActionRow();
		for (let j = 0; j < 3; j++) {
			const label = board[i][j] || '-';
			row.addComponents(new MessageButton().setCustomId(`move_${i}_${j}`).setLabel(label.toString()).setStyle(label ? 'SECONDARY' : 'PRIMARY').setDisabled(disableAll));
		}
		rows.push(row);
	}
	return rows;
}
async function startGame(message, playerX, playerO, bet) {
	const board = Array(3).fill().map(() => Array(3).fill('-'));
	const embed = new MessageEmbed().setTitle('لعبة XO').setDescription(`**النتيجة:** لم تنته بعد.\n**اللاعب الحالي:** <@${playerX.id}>`).addFields({
		name: 'الرهان',
		value: `${bet} عملة`
	}).setFooter({
		text: '7lm Casino'
	});
	await message.edit({
		content: " ",
		embeds: [embed],
		components: createBoardComponents(board)
	});
	const gamedata = new xoGame({
		messageId: message.id,
		playerX: playerX.id,
		playerO: playerO.id,
		currentPlayer: playerX.id,
		board: board,
		bet: bet
	});
	await gamedata.save();
}
async function makeMove(user, row, col, interaction) {
	const gamedb = await xoGame.findOne({
		messageId: interaction.message.id
	});
	if (!gamedb) {
		await interaction.reply({
			content: 'لم يتم العثور على اللعبة.',
			ephemeral: true
		});
		return;
	}
	if (gamedb.currentPlayer !== user.id) {
		await interaction.reply({
			content: 'ليس دورك للعب.',
			ephemeral: true
		});
		return;
	}
	if (gamedb.board[row][col] !== '-') {
		await interaction.reply({
			content: 'هذا المكان مشغول بالفعل.',
			ephemeral: true
		});
		return;
	}
	const gamedata = await game.findOne({
		msgID: gamedb.messageId
	});
	if (!gamedata) {
		await interaction.reply({
			content: 'لم يتم العثور على بيانات اللعبة العامة.',
			ephemeral: true
		});
		return;
	}
	gamedata.time = timestamp(moment(ms("90s")) + Date.now());
	await gamedata.save();
	gamedb.board[row][col] = gamedb.currentPlayer === gamedb.playerX ? '❌' : '⭕';
	gamedb.currentPlayer = gamedb.currentPlayer === gamedb.playerX ? gamedb.playerO : gamedb.playerX;
	await gamedb.save();
	const result = checkWinner(gamedb.board);
	const disableAll = (result == "TIE" || result == "❌" || result == "⭕");
	const playerX = await db.findOne({
		id: gamedb.playerX
	});
	const playerO = await db.findOne({
		id: gamedb.playerO
	});
	const bet = gamedb.bet;
	await sendBoard(interaction.channel, gamedb.board, gamedb.messageId, result, playerX, playerO, bet);
	if (result === 'TIE') {
		await interaction.reply({
			content: 'النتيجة: تعادل',
			ephemeral: true
		});
		await updatePlayerBalances(gamedb, result);
	} else if (result == "❌" || result == "⭕") {
		await interaction.reply({
			content: `النتيجة: ${result}`,
			ephemeral: true
		});
		await updatePlayerBalances(gamedb, result);
	} else {
		try {
			await interaction.reply({
				content: `الآن دور اللاعب التالي.`,
				ephemeral: true
			});
		} catch { }
	}
}
function checkWinner(board) {
	const winningCombinations = [
		[
			[0, 0],
			[0, 1],
			[0, 2]
		],
		[
			[1, 0],
			[1, 1],
			[1, 2]
		],
		[
			[2, 0],
			[2, 1],
			[2, 2]
		],
		[
			[0, 0],
			[1, 0],
			[2, 0]
		],
		[
			[0, 1],
			[1, 1],
			[2, 1]
		],
		[
			[0, 2],
			[1, 2],
			[2, 2]
		],
		[
			[0, 0],
			[1, 1],
			[2, 2]
		],
		[
			[0, 2],
			[1, 1],
			[2, 0]
		]
	];
	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
			return board[a[0]][a[1]];
		}
	}
	const isBoardFull = board.every(row => row.every(cell => cell !== '-'));
	return isBoardFull ? 'TIE' : null;
}
async function sendBoard(channel, board, messageId, result = null, playerX = null, playerO = null, bet = 'لم يتم تحديد المبلغ') {
	const gamedb = await xoGame.findOne({
		messageId: messageId
	});
	const rows = createBoardComponents(board, (result == "TIE" || result == "❌" || result == "⭕"));
	const embed = new MessageEmbed().setTitle('لعبة XO').setFooter({
		text: '7lm Casino'
	}).addFields({
		name: 'الرهان',
		value: `${bet} عملة`
	})
	if (result === 'TIE') {
		embed.setDescription('النتيجة: تعادل');
		await allbetssendxo("اكس او", playerX.id, playerO.id, 1, bet);
	} else if (result === '❌' || result === '⭕') {
		const winner = result === '❌' ? `<@${playerX.id}>` : `<@${playerO.id}>`;
		const loser = result === '❌' ? `<@${playerO.id}>` : `<@${playerX.id}>`;
		const winnerid = result === '❌' ? playerX.id : playerO.id;
		const loserid = result === '❌' ? playerO.id : playerX.id;
		embed.setDescription('النتيجة: انتهت!').addFields({
			name: 'الفائز',
			value: winner || 'غير معروف'
		}, {
			name: 'الخاسر',
			value: loser || 'غير معروف'
		});
		await allbetssendxo("اكس او", playerX.id, playerO.id, 0, bet);
	} else {
		embed.setDescription(`**النتيجة:** لم تنته بعد.\n**اللاعب الحالي:** <@${gamedb.currentPlayer === playerX.id ? playerX.id : playerO.id}>`);
	}
	try {
		const message = await channel.messages.fetch(messageId);
		await message.edit({
			embeds: [embed],
			components: rows
		});
	} catch { }
}
async function allbetssendxo(gametype, winner, loser, tie, amount) {
	let channeltosend = client.channels.cache.get(allbetschannelid)
	if (tie == 1) {
		let embed = new MessageEmbed().setDescription(`**[ <@${winner}> / <@${loser}> ] , تعادلوا في ال${gametype} على مبلغ ${amount.toLocaleString()} ! :balloon:**`);
		channeltosend.send({
			embeds: [embed]
		});
		channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**[ <@${winner}> / <@${loser}> ] , تعادلوا في ال${gametype} على مبلغ ${amount.toLocaleString()} ! :balloon:**`);
		await channell.send({
			embeds: [embedd]
		})
	} else if (tie == 0) {
		let embed = new MessageEmbed().setDescription(`**<@${winner}> تحدى <@${loser}> , وفاز في ال${gametype} بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		channeltosend.send({
			embeds: [embed]
		});
		channeltosend.send({
			files: [linelineline]
		});
		const channell = await client.channels.fetch(logsall);
		let embedd = new MessageEmbed().setDescription(`**<@${winner}> تحدى <@${loser}> , وفاز في ال${gametype} بمبلغ ${amount.toLocaleString()} ! :tada:**`);
		await channell.send({
			embeds: [embedd]
		})
	}
}
async function updatePlayerBalances(xgame, result) {
	if (result === "TIE") {
		const winnerId = xgame.playerX;
		const loserId = xgame.playerO;
		if (!winnerId || !loserId) {
			return;
		}
		try {
			const winner = await db.findOne({
				id: winnerId
			});
			const loser = await db.findOne({
				id: loserId
			});
			winner.status_playing = "no";
			loser.status_playing = "no";
			winner.challengesnumber += 1
			winner.tienumber += 1
			loser.challengesnumber += 1
			loser.tienumber += 1
			await winner.save();
			await loser.save();
			await xoGame.findOneAndDelete({
				messageId: xgame.messageId
			});
			await game.findOneAndDelete({
				msgId: xgame.messageId
			});
		} catch { }
	} else {
		const winnerId = result === '❌' ? xgame.playerX : result === '⭕' ? xgame.playerO : null;
		const loserId = result === '❌' ? xgame.playerO : result === '⭕' ? xgame.playerX : null;
		try {
			const winner = await db.findOne({
				id: winnerId
			});
			const loser = await db.findOne({
				id: loserId
			});
			const betAmount = xgame.bet;
			winner.coins = (winner.coins || 0) + parseInt(parseInt(betAmount) * (1 - TAX_RATE));
			winner.challengesnumber += 1
			winner.winnumber += 1
			winner.totalwinnings += parseInt(parseInt(betAmount) * (1 - TAX_RATE))
			loser.coins = (loser.coins || 0) - parseInt(betAmount);
			loser.cashback += parseInt(parseInt(betAmount) * 0.02)
			loser.challengesnumber += 1
			loser.losenumber += 1
			loser.totallost += parseInt(betAmount)
			winner.status_playing = "no";
			loser.status_playing = "no";
			await winner.save();
			await loser.save();
			await xoGame.findOneAndDelete({
				messageId: xgame.messageId
			});
			await game.findOneAndDelete({
				msgId: xgame.messageId
			});
		} catch { }
	}
}
function getRandomCard() {
	const value = cards[Math.floor(Math.random() * cards.length)];
	return {
		value
	};
}
function getInitialHand() {
	let hand = [getRandomCard(), getRandomCard()];
	return hand;
}
function cardValue(card, total) {
	if (card.value === "1") return total + 11 > 21 ? 1 : 11;
	if (["13", "12", "11"].includes(card.value)) return 10;
	return Number(card.value);
}
function calcTotal(hand) {
	return hand.reduce((total, card) => total + cardValue(card, total), 0);
}
function displayHand(hand) {
	return hand.map(card => {
		const list = emojiMap[card.value];
		return list[Math.floor(Math.random() * list.length)];
	}).join(' ');
}
async function tryMakeBotWin(playerTotal, botHand) {
	for (let i = 0; i < 3; i++) {
		for (const value of cards) {
			const newCard = {
				value
			};
			const testHand = [...botHand, newCard];
			const testTotal = calcTotal(testHand);
			if (testTotal > playerTotal && testTotal <= 21) {
				botHand.push(newCard);
				return true;
			}
		}
	}
	return false;
}
//////////////////////////////// Events ////////////////////////////////
client.on('ready', async () => {
	console.log(`DISCORD CONNECT`);
	connectToVoice();
	let i = 0;
	let lastTopId = null;
	let lastBlacklistData = "";
	let lastPremiumIds = new Set();
	const guild = await client.guilds.fetch(bettingserverid);
	const topMoneyRole = guild.roles.cache.find(r => r.name === topmoneyrolename);
	const champRole = guild.roles.cache.find(r => r.name === champrolename);
	const diamondRole = guild.roles.cache.find(r => r.name === diamondrolename);
	const millionRole = guild.roles.cache.find(r => r.name === millionrolename);
	const blacklistRole = guild.roles.cache.find(r => r.name === blacklistrolename);
	const unrealRole = guild.roles.cache.find(r => r.name === unrealrolename);
	const premiumRole = guild.roles.cache.get(premiumroleid);
	setInterval(async () => {
		try {
			if (!guild) return;
			const top = await db.findOne({}, { id: 1 }).sort({ coins: -1 }).lean();
			if (top && top.id !== lastTopId && topMoneyRole) {
				lastTopId = top.id;
				guild.members.cache.forEach(member => {
					if (member.roles.cache.has(topMoneyRole.id) && member.id !== top.id)
						member.roles.remove(topMoneyRole);
				});

				const topMember = guild.members.cache.get(top.id);
				if (topMember && !topMember.roles.cache.has(topMoneyRole.id))
					topMember.roles.add(topMoneyRole);
			}
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
				const member = guild.members.cache.get(u.id);
				if (!member) continue;

				const total = u.totalWealth;
				if (total >= 10000000 && unrealRole && !member.roles.cache.has(unrealRole.id))
					member.roles.add(unrealRole);
				if (total >= 1000000 && millionRole && !member.roles.cache.has(millionRole.id))
					member.roles.add(millionRole);
				if (total >= 500000 && diamondRole && !member.roles.cache.has(diamondRole.id))
					member.roles.add(diamondRole);
				if (total >= 100000 && champRole && !member.roles.cache.has(champRole.id))
					member.roles.add(champRole);
			}
			const blacklistPath = path.resolve(__dirname, "blacklist.json");
			if (blacklistRole && fs.existsSync(blacklistPath)) {
				const data = fs.readFileSync(blacklistPath, "utf8");
				if (data !== lastBlacklistData) {
					lastBlacklistData = data;
					const blacklist = JSON.parse(data);
					const ids = new Set(blacklist.map(u => u.id));

					guild.members.cache.forEach(async member => {
						const inList = ids.has(member.id);
						const hasRole = member.roles.cache.has(blacklistRole.id);
						if (inList && !hasRole) await member.roles.add(blacklistRole);
						else if (!inList && hasRole) await member.roles.remove(blacklistRole);
					});
				}
			}
			if (premiumRole) {
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
				if (JSON.stringify([...newPremiumIds]) !== JSON.stringify([...lastPremiumIds])) {
					lastPremiumIds = newPremiumIds;

					guild.members.cache.forEach(async member => {
						const hasRole = member.roles.cache.has(premiumRole.id);
						const isPremium = newPremiumIds.has(member.id);
						if (isPremium && !hasRole) await member.roles.add(premiumRole);
						else if (!isPremium && hasRole) await member.roles.remove(premiumRole);
					});
				}
			}

		} catch (err) {
			console.error("Role updater error:", err);
		}
	}, 3000);

	setInterval(() => {
		client.user.setActivity(statuses[i], {
			type: "STREAMING",
			url: "https://www.twitch.tv/7lmcasino"
		});
		i = (i + 1) % statuses.length;
	}, 10000);
	setInterval(async () => {
		let privaterooms = (await privdata.find({}));
		await privaterooms.forEach(async (data) => {
			await checkRoom(data)
		})
	}, 20000)
	let adasd = await kombe.findOne();
	if (!adasd) {
		adasd = await kombe.create({
			kombe: 2000,
			yesorno: "no",
			dailylimit: 2000
		})
	}
	setInterval(async () => {
		let countt = 0
		const count = await privdata.countDocuments({});
		if (!count) {
			countt = 6
		} else {
			if (count >= 6) countt = 0
			else if (count == 0) countt = 6
			else if (count == 1) countt = 5
			else if (count == 2) countt = 4
			else if (count == 3) countt = 3
			else if (count == 4) countt = 2
			else if (count == 5) countt = 1
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
		client.channels.cache.get(channelidpanel).messages.fetch(panelid).then(messagee => messagee.edit({
			embeds: [embed],
			rows: [actionRow]
		})).catch();
		client.channels.cache.get(channelidclanpanel).messages.fetch(clanpanelid).then(async (messageee) => {
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
	setInterval(async () => {
		let es = (await game.find())
		es.forEach(async d => {
			let time = await d.time
			if (!time) return;
			if (time == timestamp(moment(Date.now())) || time < timestamp(moment(Date.now()))) {
				let ndata = await nrd.findOne({
					idstusr: d.id,
					msgID: d.msgID
				})
				let tkdata = await takribi.findOne({
					idstusr: d.id,
					msgID: d.msgID
				});
				let xodata = await xoGame.findOne({
					messageId: d.msgID
				});
				let tartibdata = await minegame.findOne({
					messageId: d.msgID
				})
				let rpsdata = await rpsgamedata.findOne({
					messageId: d.msgID
				});
				let bombdata = await PvpMinesweeper.findOne({
					messageId: d.msgID
				})
				if (ndata) {
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					let st1usrrr = client.users.cache.get(ndata.notrole)
					let st2usrrr = client.users.cache.get(ndata.role)
					let userr1r = await nrdusr.findOne({
						id: st1usrrr.id
					})
					let userr2r = await nrdusr.findOne({
						id: st2usrrr.id
					})
					try {
						client.channels.cache.get(gdata.channelID).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							content: `بسبب الخمول لقد فاز ${st1usrrr} بمجموع \`${userr1r.result || 0}\`
	
	لقد خسر ${st2usrrr} بمجموع \`${userr2r.result || 0}\`
	
	> || ${st1usrrr} | ${st2usrrr} ||`,
							components: []
						}));
					} catch { }
					let datacoinsusr1st = await db.findOne({
						id: st1usrrr.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: st1usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.winnumber += 1
					datacoinsusr1st.totalwinnings += parseInt(total)
					let datacoinsusr2st = await db.findOne({
						id: st2usrrr.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: st2usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr2st.losenumber += 1
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.totallost += parseInt(gdata.coins)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await nrd.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: d.id
					})
					await nrdusr.findOneAndDelete({
						id: st1usrrr.id
					})
					await nrdusr.findOneAndDelete({
						id: st2usrrr.id
					})
					await game.findOneAndDelete({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
				} else if (tkdata) {
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					let st1usrrr = client.users.cache.get(tkdata.notrole);
					let st2usrrr = client.users.cache.get(tkdata.role);
					if (tkdata.controllingid == tkdata.notrole && tkdata.conditions === true) {
						st2usrrr = client.users.cache.get(tkdata.notrole);
						st1usrrr = client.users.cache.get(tkdata.role);
					}
					if (!st1usrrr || !st2usrrr) return;
					let userr1r = await tkusr.findOne({
						id: st1usrrr.id
					});
					let userr2r = await tkusr.findOne({
						id: st2usrrr.id
					});
					if (!userr1r || !userr2r) return;
					try {
						client.channels.cache.get(gdata.channelID).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							content: `بسبب الخمول لقد فاز ${st1usrrr} بمجموع \`${userr1r.result || 0}\`

لقد خسر ${st2usrrr} بمجموع \`${userr2r.result || 0}\`

> || ${st1usrrr} | ${st2usrrr} ||`,
							components: []
						}))
					} catch { }
					let datacoinsusr1st = await db.findOne({
						id: st1usrrr.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: st1usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.winnumber += 1
					datacoinsusr1st.totalwinnings += parseInt(total)
					let datacoinsusr2st = await db.findOne({
						id: st2usrrr.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: st2usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.losenumber += 1
					datacoinsusr2st.totallost += parseInt(gdata.coins)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: d.id
					})
					await tkusr.findOneAndDelete({
						id: st1usrrr.id,
						msgID: d.msgID
					})
					await tkusr.findOneAndDelete({
						id: st2usrrr.id,
						msgID: d.msgID
					})
					await game.findOneAndDelete({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
				} else if (xodata) {
					let gdata = await game.findOne({
						id: d.id,
						msgID: d.msgID
					});
					let loserId = xodata.currentPlayer;
					let winnerId = loserId === xodata.playerX ? xodata.playerO : xodata.playerX;
					let data = await db.findOne({
						id: loserId
					})
					let data2 = await db.findOne({
						id: winnerId
					})
					data.coins -= parseInt(xodata.bet)
					data.cashback += parseInt(parseInt(xodata.bet) * 0.02)
					data.challengesnumber += 1
					data.losenumber += 1
					data.totallost += parseInt(xodata.bet)
					data.status_playing = "no";
					data2.coins += parseInt(parseInt(xodata.bet) * (1 - TAX_RATE));
					data2.challengesnumber += 1
					data2.winnumber += 1
					data2.totalwinnings += parseInt(parseInt(xodata.bet) * (1 - TAX_RATE))
					data2.status_playing = "no";
					await data.save();
					await data2.save();
					const loserMention = `<@${loserId}>`;
					const winnerMention = `<@${winnerId}>`;
					try {
						await client.channels.cache.get(gdata.channelID).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							content: `بسبب الخمول لقد فاز ${winnerMention} بمجموع \`${xodata.bet}\`
	
	لقد خسر ${loserMention} بمجموع \`${xodata.bet}\`
	
	> || ${winnerMention} | ${loserMention} ||`,
							components: [],
							embeds: []
						}))
					} catch { }
					await game.findOneAndDelete({
						msgID: d.msgID
					});
					await xoGame.findOneAndDelete({
						messageId: d.msgID
					});
				} else if (bombdata) {
					let gdata = await game.findOne({
						id: d.id,
						msgID: d.msgID
					});
					let loserId = bombdata.currentPlayer === "player1" ? bombdata.player1.userId : bombdata.player2.userId;
					let winnerId = bombdata.currentPlayer === "player1" ? bombdata.player2.userId : bombdata.player1.userId;
					let data = await db.findOne({
						id: loserId
					})
					let data2 = await db.findOne({
						id: winnerId
					})
					data.coins -= parseInt(bombdata.betAmount)
					data.cashback += parseInt(parseInt(bombdata.betAmount) * 0.02)
					data.challengesnumber += 1
					data.losenumber += 1
					data.totallost += parseInt(bombdata.betAmount)
					data.status_playing = "no";
					data2.coins += parseInt(parseInt(bombdata.betAmount) * (1 - TAX_RATE));
					data2.challengesnumber += 1
					data2.winnumber += 1
					data2.totalwinnings += parseInt(parseInt(bombdata.betAmount) * (1 - TAX_RATE))
					data2.status_playing = "no";
					await data.save();
					await data2.save();
					const loserMention = `<@${loserId}>`;
					const winnerMention = `<@${winnerId}>`;
					try {
						await client.channels.cache.get(d.channelID).messages.fetch(d.msgID).then(msg1 => msg1.edit({
							content: `بسبب الخمول لقد فاز ${winnerMention} بمجموع \`${bombdata.betAmount}\`
	
	لقد خسر ${loserMention} بمجموع \`${bombdata.betAmount}\`
	
	> || ${winnerMention} | ${loserMention} ||`,
							components: [],
							embeds: []
						}))
					} catch { }
					await game.findOneAndDelete({
						msgID: d.msgID
					});
					await PvpMinesweeper.findOneAndDelete({
						messageId: d.msgID
					});
				} else if (tartibdata) {
					let gdata = await game.findOne({
						id: d.id,
						msgID: d.msgID
					});
					let loserId = tartibdata.players[tartibdata.turn];
					let winnerId = tartibdata.turn === 0 ? tartibdata.players[1] : tartibdata.players[0];
					let data = await db.findOne({
						id: loserId
					})
					let data2 = await db.findOne({
						id: winnerId
					})
					data.coins -= parseInt(tartibdata.betAmount)
					data.cashback += parseInt(parseInt(tartibdata.betAmount) * 0.02)
					data.challengesnumber += 1
					data.losenumber += 1
					data.totallost += parseInt(tartibdata.betAmount)
					data.status_playing = "no";
					data2.coins += parseInt(parseInt(tartibdata.betAmount) * (1 - TAX_RATE));
					data2.challengesnumber += 1
					data2.winnumber += 1
					data2.totalwinnings += parseInt(parseInt(tartibdata.betAmount) * (1 - TAX_RATE))
					data2.status_playing = "no";
					await data.save();
					await data2.save();
					const loserMention = `<@${loserId}>`;
					const winnerMention = `<@${winnerId}>`;
					try {
						await client.channels.cache.get(d.channelID).messages.fetch(d.msgID).then(msg1 => msg1.edit({
							content: `بسبب الخمول لقد فاز ${winnerMention} بمجموع \`${tartibdata.betAmount}\`
	
	لقد خسر ${loserMention} بمجموع \`${tartibdata.betAmount}\`
	
	> || ${winnerMention} | ${loserMention} ||`,
							components: [],
							embeds: []
						}))
					} catch { }
					await game.findOneAndDelete({
						msgID: d.msgID
					});
					await minegame.findOneAndDelete({
						messageId: d.msgID
					});
				} else if (!ndata && !tkdata && !xodata && !tartibdata && !rpsdata && !bombdata) {
					let stusrgame = client.users.cache.get(d.id)
					if (!stusrgame) stusrgame = "unknown";
					let wthusrgame = client.users.cache.get(d.with)
					if (!wthusrgame) wthusrgame = "unknown";
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					if (gdata) {
						await game.findOneAndDelete({
							id: d.id,
							with: d.with,
							msgID: d.msgID
						})
					}
					try {
						client.channels.cache.get(gdata.channelID).messages.fetch(d.msgID).then(msg1 => msg1.edit({
							embeds: [],
							content: `تم إلغاء التحدي بسبب الخمول
	> || ${stusrgame} | ${wthusrgame} || `,
							components: [],
							embeds: []
						}))
					} catch { }
					let datacoinsusr1st = await db.findOne({
						id: d.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: d.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let datacoinsusr2st = await db.findOne({
						id: d.with
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: d.with,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
				}
			}
		})
		let esed = (await TofehaGame.find())
		esed.forEach(async tofehaGame => {
			let time = await tofehaGame.time
			if (!time) return;
			if (time == timestamp(moment(Date.now())) || time < timestamp(moment(Date.now()))) {
				const player = await db.findOne({
					id: tofehaGame.playerId
				});
				player.coins -= tofehaGame.betAmount;
				player.cashback += parseInt(tofehaGame.betAmount * 0.02)
				player.losenumber += 1;
				player.totallost += tofehaGame.betAmount;
				player.challengesnumber += 1;
				player.status_playing = "no";
				await player.save();
				const playedRows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, true));
				const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription('لقد خسرت! هذه هي الصفوف التي لعبتها:');
				await client.channels.cache.get(tofehaGame.channelId).messages.fetch(tofehaGame.messageId).then(msgggggg => {
					msgggggg.edit({
						content: `** **`,
						components: [...playedRows, new MessageActionRow().addComponents(createQuitButton(true))],
						embeds: [embed]
					});
				})
				await allbetssendtofeha(player, 0, tofehaGame.betAmount)
				await TofehaGame.deleteOne({
					messageId: tofehaGame.messageId
				});
				return;
			}
		})
	}, 20000)
	cron.schedule('0 23 * * *', async () => {
		let adasd = await kombe.findOne();
		if (!adasd) {
			adasd = await kombe.create({
				kombe: 2000,
				yesorno: "no",
				dailylimit: 2000
			})
		}
		adasd.kombe = adasd.dailylimit;
		adasd.save();
	});
	startGameLoop();
	const data = [{
		name: 'setup',
		description: 'إعداد قائمة اختيار الدوريات لعرض مباريات اليوم',
	},];
	client.application.commands.set(data);
	if (guild) {
		initializeDatabase(guild);
		refreshInvites(guild);
		setInterval(() => refreshInvites(guild), 3000);
	}
});
client.on("voiceStateUpdate", (oldState, newState) => {
	const connection = getVoiceConnection(newState.guild.id);
	if (oldState.member.id === client.user.id && !newState.channelId) {
		setTimeout(connectToVoice, 500);
	}
	if (newState.channelId === voiceChannelId && oldState.channelId !== voiceChannelId && !newState.member.user.bot) {
		const conn = connection || connectToVoice();
		speakArabic(conn, "مرحبا بك في حِلْمْ كازينو");
	}
});
client.on('messageCreate', async message => {
	if (message.channel.id == COMMAND_CHANNEL_ID && !message.author.bot) {
		setTimeout(async () => {
			try {
				await message.delete()
			} catch { }
		}, 2000)
	}
	if (message.channel.id == GAME_CHANNEL_ID) {
		if (message.author.bot) return;
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no"
			});
		}
		let coinAmount = message.content.replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
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
			} catch { }
			let channeltosend = client.channels.cache.get(allbetschannelcrashid)
			let embed = new MessageEmbed().setDescription(`**<@${message.author.id}> وضع رهان على مبلغ ${betAmount.toLocaleString()} في لعبة الطائرة :tada:**`);
			await channeltosend.send({
				embeds: [embed]
			});
			await channeltosend.send({
				files: [linelineline]
			});
			const member = message.guild.members.cache.get(message.author.id);
			await message.channel.permissionOverwrites.delete(member);
			message.delete();
		} else if (!isNaN(betAmount) && betAmount > 0 && data.coins < betAmount) {
			try {
				await message.author.send({
					content: `ليس لديك ${betAmount.toLocaleString()}`
				});
			} catch { }
			message.delete();
		} else {
			message.delete();
		}
	} else if (message.content.split(" ")[0] == "بلوكز" || message.content.split(" ")[0] == "Blocks") {
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data || data.blocked.length === 0) {
			let embed = new MessageEmbed().setColor(serverColor).setDescription(`> لا يوجد لديك أي لاعبين محظورين حاليًا!`);
			return message.reply({
				embeds: [embed]
			});
		}
		let blockedUsersList = data.blocked.map(blockedUserId => `<@${blockedUserId}>`).join(', ');
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> قائمة اللاعبين المحظورين: ${blockedUsersList}`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "فك" || message.content.split(" ")[0].toLowerCase() == "unblock") {
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> يرجى تحديد عضو لفك البلوك عنه!`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم أستطع العثور على هذا الشخص!**`
		});
		if (user.id === message.author.id) return message.reply({
			content: "بتبوض شرع ربنا انت؟"
		})
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data || !data.blocked.includes(user.id)) {
			return message.reply({
				content: `> ${user} لم يتم حظره من قبل!`
			});
		}
		data.blocked = data.blocked.filter(blockedUser => blockedUser !== user.id);
		await data.save();
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> تم فك البلوك عن ${user} بنجاح!`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "حذفبري") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> لم تقم بتحديد العضو !`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم استطيع العثور على هذا الشخص**`
		});
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (data.premium == false) return message.reply({
			content: `\`❎\` **هذا الشخص ليس لديه بريميوم للحذف**`
		});
		let embed = new MessageEmbed().setColor(serverColor).setThumbnail(user.avatarURL({
			dynamic: true
		})).setDescription(`تم حذف بريميوم بنجاح`).addFields({
			name: "بواسطة",
			value: `${message.author}`
		}, {
			name: `من`,
			value: `${user}`
		});
		message.reply({
			embeds: [embed]
		});
		data.premium = false;
		data.premiumExpires = new Date();
		await data.save();
	} else if (message.content.toLowerCase() === "بري" || message.content.toLowerCase() === "بريميوم" || message.content.toLowerCase() === "pre" || message.content.toLowerCase() === "premuim") {
		if (isBlacklisted(message.author.id)) return;
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: 'no',
				premiumExpires: null
			});
		}
		if (data.premium == true) {
			let now = moment();
			let expires = moment(data.premiumExpires);
			let duration = moment.duration(expires.diff(now));
			let days = Math.floor(duration.asDays());
			let hours = duration.hours();
			let minutes = duration.minutes();
			return message.reply(`باقي من البريميوم ${days} أيام، ${hours} ساعات، و ${minutes} دقائق.`);
		}
		if (activeOperations.has(message.author.id)) {
			return message.reply('لديك عملية ترقية قيد التنفيذ بالفعل.');
		}
		let embed = new MessageEmbed().setColor(serverColor).setTitle('ترقية إلى بريميوم').setDescription('هل تريد الترقية إلى بريميوم مقابل 50000؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.');
		let buttonConfirm = new MessageButton().setCustomId('confirm_premium').setLabel('تأكيد').setStyle('SUCCESS');
		let buttonCancel = new MessageButton().setCustomId('cancel_premium').setLabel('إلغاء').setStyle('DANGER');
		let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);
		const msg = await message.reply({
			embeds: [embed],
			components: [row]
		});
		activeOperations.add(message.author.id);
		const filter = i => (i.customId === 'confirm_premium' || i.customId === 'cancel_premium') && i.user.id === message.author.id;
		const collector = msg.createMessageComponentCollector({
			filter,
			time: 60000
		});
		collector.on('end', async collected => {
			if (!collected.size) {
				activeOperations.delete(message.author.id);
				try {
					await msg.edit({
						content: 'تم إلغاء عملية الترقية بسبب عدم التفاعل.',
						components: []
					});
				} catch { }
			}
		});
		collector.on('collect', async i => {
			if (i.customId === 'confirm_premium') {
				if (data.coins >= 50000) {
					data.coins -= 50000;
					data.premiumExpires = moment().add(1, 'months').toDate();
					data.premium = true;
					await data.save();
					await i.update({
						content: 'تمت الترقية إلى بريميوم بنجاح!',
						embeds: [],
						components: []
					});
				} else {
					await i.update({
						content: 'ليس لديك رصيد كافي للترقية.',
						embeds: [],
						components: []
					});
				}
			} else if (i.customId === 'cancel_premium') {
				await i.update({
					content: 'تم إلغاء الترقية.',
					embeds: [],
					components: []
				});
			}
			activeOperations.delete(message.author.id);
		});
	} else if (message.content.toLowerCase() === "اوامر" || message.content.toLowerCase() === "help") {
		let embed = new MessageEmbed().setColor(serverColor).setTitle("أوامر البوت").setDescription("قائمة بأوامر البوت المتاحة:").addFields({
			name: "`تحدي`",
			value: "لتحدي شخص معين. المثال: `تحدي @user 5k`",
			inline: true
		}, {
			name: "`فلوس`",
			value: "لعرض رصيدك ورصيد الآخرين.",
			inline: true
		}, {
			name: "`كاش`",
			value: "لعرض رصيدك في الكاش باك وسحبه إن أردت.",
			inline: true
		}, {
			name: "`توب`",
			value: "لعرض أغنى اللاعبين من حيث الرصيد.",
			inline: true
		}, {
			name: "`تحويل`",
			value: "لتحويل رصيد من شخص إلى آخر.",
			inline: true
		}, {
			name: "`فرند`",
			value: "لإضافة صديق إلى قائمة أصدقائك.",
			inline: true
		}, {
			name: "`حذف`",
			value: "لحذف صديق من قائمة أصدقائك.",
			inline: true
		}, {
			name: "`فرندز`",
			value: "لعرض قائمة أصدقائك.",
			inline: true
		}, {
			name: "`تحدي عام`",
			value: "لتتمكن من تحدي كل الناس",
			inline: true
		}, {
			name: "`تحدي فرندز`",
			value: "لتتمكن من تحدي أصدقائك فقط",
			inline: true
		}, {
			name: "`بلوك`",
			value: "لمنع لاعب من التفاعل معك.",
			inline: true
		}, {
			name: "`فك`",
			value: "لإلغاء الحظر عن لاعب.",
			inline: true
		}, {
			name: "`بلوكز`",
			value: "لعرض قائمة اللاعبين المحظورين عندك.",
			inline: true
		}, {
			name: "`شحن`",
			value: "لعرض من اي يقوم بل شحن.",
			inline: true
		}, {
			name: "`بري`",
			value: "لشراء البريميوم",
			inline: true
		}, {
			name: "ربط",
			value: "لربط حساب بنكي بحسابك",
			inline: true
		}, {
			name: "فصل",
			value: "لفصل حسابك من البنك",
			inline: true
		}, {
			name: "سحب",
			value: "لسحب الأموال من البنك",
			inline: true
		}, {
			name: "ايداع",
			value: "لايداع الأموال لحسابك البنكي",
			inline: true
		}, {
			name: "`روليت`",
			value: "للعب الروليت للبريميوم فقط",
			inline: true
		}, {
			name: "`بنك`",
			value: "لترى كم رصيدك في البنك للبريميوم فقط",
			inline: true
		}, {
			name: "`ملف`",
			value: "لترى معلومات حول شخص معين",
			inline: true
		}, {
			name: "`تفاحة`",
			value: "للعب لعبة التفاحة",
			inline: true
		}, {
			name: "`قنابل`",
			value: "للعب لعبة القنابل الجديدة",
			inline: true
		}, {
			name: "`دايلي`",
			value: "لأخذ راتبك اليومي",
			inline: true
		});
		message.channel.send({
			embeds: [embed]
		});
	} else if (message.content.toLowerCase() === "ريواردز" || message.content.toLowerCase() === "rewards") {
		let normalwinnings = ""
		for (const [reward, probability] of Object.entries(rewnnormal)) {
			normalwinnings = normalwinnings + "**" + reward + "** " + emojinormal + " / "
		}
		let legendwinnings = ""
		for (const [reward, probability] of Object.entries(rewnlegendary)) {
			legendwinnings = legendwinnings + "**" + reward + "** " + emojilegend + " / "
		}
		normalwinnings = normalwinnings.slice(0, -3);
		legendwinnings = legendwinnings.slice(0, -3);
		let embed = new MessageEmbed().setColor(serverColor).setTitle("جوائز العجلة").setDescription("قائمة بجوائز العجلة المتاحة:").addFields({
			name: "`العجلة العادية`",
			value: normalwinnings,
			inline: false
		}, {
			name: "`العجلة الاسطورية`",
			value: legendwinnings,
			inline: false
		});
		message.reply({
			embeds: [embed]
		});
	} else if (["توبكلانات", "topclans", "توبكلان"].includes(message.content.trim().toLowerCase().split(" ")[0])) {
		try {
			const clans = await clansdb.find().exec();
			if (!clans.length) return message.reply("🚫 لا يوجد كلانات بعد!");
			const clansWithWealth = await Promise.all(clans.map(async (clan) => {
				let totalWealth = 0;
				for (const memberId of clan.members) {
					const userData = await db.findOne({
						id: memberId
					});
					if (userData?.coins) totalWealth += userData.coins;
				}
				return {
					name: clan.clanname,
					ownerId: clan.ownerid,
					totalWealth
				};
			}));
			const topClans = clansWithWealth.sort((a, b) => b.totalWealth - a.totalWealth).slice(0, 10);
			if (!topClans.length) return message.reply("🚫 لا يوجد كلانات بها أموال حالياً.");
			const LRM = "\u200E";
			const leaderboard = topClans.map((clan, index) => {
				const rank = index + 1;
				const rankLabel = rank === 1 ? `${crownemoji}` : `**${rank}.**`;
				const formattedWealth = formatCoins(clan.totalWealth);
				const ownerMention = `<@${clan.ownerId}>`;
				return `${LRM}${rankLabel} ${ownerMention} [${clan.name}]  \`—\`  **${formattedWealth}**`;
			}).join("\n");
			const embed = new MessageEmbed().setAuthor({
				name: "🏆 توب الكلانات"
			}).setColor(serverColor).setDescription(leaderboard).setFooter({
				text: message.guild?.name || "Unknown Server"
			}).setTimestamp();
			await message.channel.send({
				embeds: [embed],
				allowedMentions: {
					parse: []
				}
			});
		} catch (error) {
			console.error("Error generating clan leaderboard:", error);
			message.reply("❌ حدث خطأ أثناء عرض توب الكلانات.");
		}
	} else if (message.content.startsWith(prefix) && !message.author.bot) {
		if (message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() === 'renew') {
			if (!message.member.roles.cache.has(ownerrole)) {
				return message.reply('❌ تحتاج إلى صلاحية الأدمن لاستخدام هذا الأمر!');
			}
			fs.writeFileSync(ticketsFile, JSON.stringify({}, null, 2));
			fs.writeFileSync(winnersFile, JSON.stringify([], null, 2));
			const embed = new MessageEmbed().setTitle('🔄 تجديد نظام اليانصيب').setDescription('✅ تم مسح جميع التذاكر القديمة والفائزين بنجاح!\n\nيمكنك الآن إنشاء تذاكر جديدة باستخدام `!give`').setColor(serverColor).setTimestamp().setFooter({
				text: `طلب من قبل: ${message.author.tag}`,
				iconURL: message.author.displayAvatarURL()
			});
			await message.reply({
				embeds: [embed]
			});
			const logEmbed = new MessageEmbed().setTitle('📊 تجديد النظام').setDescription(`تم تجديد نظام اليانصيب بالكامل\n**بواسطة:** ${message.author}`).setColor(serverColor).setTimestamp();
			const logChannel = message.guild.channels.cache.get(logs.ticketLogChannel);
			if (logChannel) {
				await logChannel.send({
					embeds: [logEmbed]
				});
			}
		} else if (message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() === 'winnerspin') {
			if (!message.member.roles.cache.has(ownerrole)) {
				return message.reply('❌ تحتاج إلى صلاحية الأدمن لاستخدام هذا الأمر!');
			}
			const tickets = loadTickets();
			const validTickets = Object.entries(tickets).filter(([code, ticket]) => !ticket.used);
			if (validTickets.length === 0) {
				return message.reply('❌ لا توجد تذاكر متاحة للسحب!');
			}
			const spinEmbed = new MessageEmbed().setTitle('🎰 جاري السحب للفائز...').setDescription('**جاري اختيار الفائز من بين التذاكر**\n\n⏳ يرجى الانتظار...').setColor(serverColor).setFooter({
				text: `عدد التذاكر المشاركة: ${validTickets.length}`
			});
			const spinMessage = await message.reply({
				embeds: [spinEmbed]
			});
			await new Promise(resolve => setTimeout(resolve, settings.spinDelay));
			const randomIndex = Math.floor(Math.random() * validTickets.length);
			const [winningCode, winningTicket] = validTickets[randomIndex];
			tickets[winningCode].used = true;
			tickets[winningCode].wonAt = new Date().toISOString();
			saveTickets(tickets);
			const winners = loadWinners();
			const winnerData = {
				code: winningCode,
				userId: winningTicket.userId,
				username: winningTicket.username,
				userTag: winningTicket.userTag,
				wonAt: new Date().toISOString(),
				spinBy: message.author.id
			};
			winners.push(winnerData);
			saveWinners(winners);
			const winnerEmbed = new MessageEmbed().setTitle('🎉 فائز اليانصيب! 🎊').setDescription(`**مبروك للفائز! 🏆**\n\n<@${winningTicket.userId}> فاز باليانصيب!\n\n**🎯 كود التذكرة الفائزة:** \`${winningCode}\`\n**👤 الفائز:** <@${winningTicket.userId}>\n**🏷️ اسم المستخدم:** ${winningTicket.userTag}\n**⏰ وقت السحب:** <t:${Math.floor(Date.now() / 1000)}:F>\n**🎰 عدد التذاكر المشاركة:** ${validTickets.length}`).setColor(serverColor).setThumbnail('https://cdn-icons-png.flaticon.com/512/3486/3486875.png').setTimestamp().setFooter({
				text: `تم السحب بواسطة: ${message.author.tag} | الفائز رقم: ${winners.length}`,
				iconURL: message.author.displayAvatarURL()
			});
			await spinMessage.edit({
				content: `🎊 **مبروك للفائز!** <@${winningTicket.userId}> 🎊`,
				embeds: [winnerEmbed]
			});
			const winnerLogEmbed = new MessageEmbed().setTitle('🏆 سجل الفائزين - فائز جديد').setDescription(`**تم سحب فائز جديد في اليانصيب**\n\n**🎯 كود التذكرة:** \`${winningCode}\`\n**👤 الفائز:** <@${winningTicket.userId}>\n**🏷️ اليوزر:** ${winningTicket.userTag}\n**🆔 الأيدي:** ${winningTicket.userId}\n**⏰ وقت الفوز:** <t:${Math.floor(Date.now() / 1000)}:F>\n**👨‍💼 تم السحب بواسطة:** ${message.author.tag}`).setColor(serverColor).setThumbnail('https://cdn-icons-png.flaticon.com/512/3079/3079152.png').setTimestamp().setFooter({
				text: `إجمالي الفائزين: ${winners.length}`
			});
			const winnerLogChannel = message.guild.channels.cache.get(logs.winnerLogChannel);
			if (winnerLogChannel) {
				await winnerLogChannel.send({
					content: `🎉 فائز جديد! <@${winningTicket.userId}>`,
					embeds: [winnerLogEmbed]
				});
			}
			try {
				const winnerUser = await client.users.fetch(winningTicket.userId);
				const congratsEmbed = new MessageEmbed().setTitle('🎊 مبروك الفوز! 🏆').setDescription(`**تهانينا! لقد فزت في اليانصيب!**\n\n**🎯 كود تذكرتك الفائزة:** \`${winningCode}\`\n**⏰ تاريخ الفوز:** <t:${Math.floor(Date.now() / 1000)}:F>\n**💰 مبروك على فوزك!**`).setColor(0x00FF00).setThumbnail('https://cdn-icons-png.flaticon.com/512/3486/3486875.png').setFooter({
					text: 'تهانينا الحارة من إدارة السيرفر! 🎉'
				});
				await winnerUser.send({
					content: '🎉 **مبروك! لقد فزت في اليانصيب!** 🎊',
					embeds: [congratsEmbed]
				});
			} catch { }
		} else if (message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() === 'stats') {
			const tickets = loadTickets();
			const winners = loadWinners();
			const totalTickets = Object.keys(tickets).length;
			const activeTickets = Object.values(tickets).filter(t => !t.used).length;
			const usedTickets = Object.values(tickets).filter(t => t.used).length;
			const statsEmbed = new MessageEmbed().setTitle('📊 إحصائيات اليانصيب').setColor(serverColor).addFields({
				name: '🎫 إجمالي التذاكر',
				value: totalTickets.toString(),
				inline: true
			}, {
				name: '✅ التذاكر النشطة',
				value: activeTickets.toString(),
				inline: true
			}, {
				name: '🏆 التذاكر المستخدمة',
				value: usedTickets.toString(),
				inline: true
			}, {
				name: '👑 عدد الفائزين',
				value: winners.length.toString(),
				inline: true
			}, {
				name: '📈 نسبة الفوز',
				value: totalTickets > 0 ? `${((winners.length / totalTickets) * 100).toFixed(2)}%` : '0%',
				inline: true
			}, {
				name: '⚙️ البريفيكس',
				value: `\`${prefix}\``,
				inline: true
			}).setTimestamp().setFooter({
				text: `طلب من قبل: ${message.author.tag}`
			});
			await message.reply({
				embeds: [statsEmbed]
			});
		} else if (message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() === 'help') {
			const helpEmbed = new MessageEmbed().setTitle('🎰 أوامر بوت اليانصيب').setDescription(`**البريفيكس الحالي: \`${prefix}\`**`).addFields({
				name: `🔄 \`${prefix}renew\``,
				value: `${"\u200E"}مسح جميع التذاكر القديمة وبدء جديد`,
				inline: true
			}, {
				name: `🎫 \`${prefix}give @user\``,
				value: `${"\u200E"}إعطاء تذكرة يانصيب لعضو`,
				inline: true
			}, {
				name: `🎰 \`${prefix}winnerspin\``,
				value: `${"\u200E"}سحب فائز عشوائي من التذاكر`,
				inline: true
			}, {
				name: `📊 \`${prefix}stats\``,
				value: `${"\u200E"}عرض إحصائيات اليانصيب`,
				inline: true
			}, {
				name: `❓ \`${prefix}help\``,
				value: `${"\u200E"}عرض هذه الرسالة`,
				inline: true
			}).setColor(serverColor).setFooter({
				text: 'جميع الأوامر تتطلب صلاحية الأدمن'
			});
			await message.reply({
				embeds: [helpEmbed]
			});
		} else if (message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() === 'give') {
			if (!message.member.roles.cache.has(ownerrole)) {
				return message.reply('❌ تحتاج إلى صلاحية الأدمن لاستخدام هذا الأمر!');
			}
			const user = message.mentions.users.first();
			if (!user) {
				return message.reply('❌ يرجى منشن المستخدم الذي تريد إعطاءه التذكرة!\n**مثال:** `!give @username`');
			}
			const tickets = loadTickets();
			const userTickets = Object.values(tickets).filter(ticket => ticket.userId === user.id && !ticket.used);
			if (userTickets.length >= settings.maxTicketsPerUser) {
				return message.reply('❌ هذا المستخدم لديه بالفعل تذكرة نشطة!');
			}
			const ticketCode = generateTicketCode();
			tickets[ticketCode] = {
				userId: user.id,
				username: user.username,
				userTag: user.tag,
				createdAt: new Date().toISOString(),
				used: false,
				givenBy: message.author.id
			};
			saveTickets(tickets);
			const ticketEmbed = new MessageEmbed().setTitle('🎫 تذكرة اليانصيب الخاصة بك').setDescription(`مبروك! لقد حصلت على تذكرة يانصيب جديدة!\n\n**🎯 كود التذكرة:** \`${ticketCode}\`\n**📅 تاريخ الإصدار:** <t:${Math.floor(Date.now() / 1000)}:F>\n**👤 تم الإعطاء بواسطة:** ${message.author.tag}`).setColor(serverColor).setThumbnail('https://cdn-icons-png.flaticon.com/512/3486/3486875.png').setFooter({
				text: 'حظاً موفقاً! 🍀'
			}).setTimestamp();
			const button = new MessageActionRow().addComponents(new MessageButton().setCustomId(ticketCode).setLabel('تأكيد امتلاك التذكرة').setStyle("SUCCESS").setEmoji('✅'));
			try {
				await user.send({
					embeds: [ticketEmbed],
					components: [button]
				});
				const confirmEmbed = new MessageEmbed().setTitle('✅ تم إعطاء التذكرة بنجاح').setDescription(`**تم إرسال تذكرة اليانصيب بنجاح**\n\n**👤 المستلم:** ${user}\n**🆔 الأيدي:** ${user.id}\n**🎫 كود التذكرة:** \`${ticketCode}\``).setColor(0x00FF00).setThumbnail(user.displayAvatarURL()).setTimestamp().setFooter({
					text: `تم الإعطاء بواسطة: ${message.author.tag}`,
					iconURL: message.author.displayAvatarURL()
				});
				await message.reply({
					embeds: [confirmEmbed]
				});
				const logEmbed = new MessageEmbed().setTitle('📝 سجل إعطاء التذاكر').setDescription(`**تم إعطاء تذكرة يانصيب جديدة**\n\n**👤 المعطي:** ${message.author}\n**🆔 أيدي المعطي:** ${message.author.id}\n**🎯 المستلم:** ${user}\n**🆔 أيدي المستلم:** ${user.id}\n**🎫 كود التذكرة:** \`${ticketCode}\``).setColor(serverColor).setTimestamp().setFooter({
					text: `إجمالي التذاكر النشطة: ${Object.keys(tickets).length}`
				});
				const logChannel = message.guild.channels.cache.get(logs.ticketLogChannel);
				if (logChannel) {
					await logChannel.send({
						embeds: [logEmbed]
					});
				}
			} catch (error) {
				const errorEmbed = new MessageEmbed().setTitle('❌ خطأ في الإرسال').setDescription(`لا يمكن إرسال رسالة خاصة إلى ${user}.\n**السبب:** قد يكون لديه الرسائل المباشرة مغلقة.`).setColor(0xFF0000).setTimestamp();
				await message.reply({
					embeds: [errorEmbed]
				});
			}
		}
	} else if (message.content.split(" ")[0].toLowerCase() === "روليت" || message.content.split(" ")[0] === "roulette") {
		const args = message.content.trim().split(" ");
		if (args.length < 3) {
			return message.reply({
				content: "**عذراً يا عزيزي و لكن قم باستخدام روليت و تختار اللون (اخضر/احمر/ اسود) و مبلغ الي بتلعب فيه**"
			});
		}
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (data.status_playing == "yes") return;
		if (data.premium == false) return message.reply('هذا الأمر للبريميوم فقط')
		const possibleChoices = ['احمر', 'اسود', 'اخضر'];
		const userChoice = args[1].toLowerCase();
		let betAmount = null;
		if (args[2] == "كامل" || args[2] == "فل") betAmount = data.coins
		else if (args[2] == "نصف" || args[2] == "نص") betAmount = parseInt(data.coins / 2).toString();
		else betAmount = parseCoins(args[2]);
		const userBalance = data.coins;
		if (!betAmount || isNaN(betAmount) || betAmount < 1) {
			return message.reply({
				content: "**يرجى تقديم مبلغ رهان صالح.**"
			});
		}
		if (!possibleChoices.includes(userChoice)) {
			return message.reply({
				content: "**اختيار غير صالح للرهان. الخيارات المتاحة: \`احمر\` ، \`اخضر\` ، \`اسود\`**"
			});
		}
		if (betAmount > userBalance) {
			return message.reply({
				content: "**الرصيد غير كافٍ.**"
			});
		}
		if (betAmount > 500000 || betAmount < 1) {
			return message.reply({
				content: "**الحد الأقصى هو 500000 والحد الأدنى هو 1**"
			})
		}
		const outcome = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
		let winAmount;
		if (userChoice === outcome) {
			winAmount = betAmount;
			data.coins = parseInt(data.coins + betAmount * (1 - TAX_RATE));
			data.challengesnumber += 1
			data.winnumber += 1
			data.totalwinnings += parseInt(betAmount)
		} else {
			data.coins = parseInt(data.coins) - betAmount;
			data.cashback += parseInt(betAmount * 0.02);
			data.challengesnumber += 1
			data.losenumber += 1
			data.totallost += parseInt(betAmount)
		}
		await data.save();
		const outcomeEmoji = outcome === "احمر" ? "🔴" : outcome === "اسود" ? "⚫" : "🟢";
		const resultMessage = userChoice === outcome ? `لقد ربحت $${winAmount.toLocaleString()} !` : `لقد خسرت $${betAmount.toLocaleString()}`;
		const embed = new MessageEmbed().setColor(serverColor).setTitle("نتيجة الروليت").setDescription(`الكرة هبطت على ${outcomeEmoji} ${outcome} ${resultMessage} `);
		return message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "Rs") {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		if (!(message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(rsrole))) return;
		const args = message.content.trim().split(/ +/g);
		if (!args[0]) return message.reply({
			content: `> من فضلك منشن شخص.!`
		});
		let user = message.mentions.users.first() || await client.users.fetch(args[0], {
			force: true
		}).catch(() => undefined);
		if (!user) return message.reply({
			content: `> انا لا أستطيع ايجاد هذا الشخص.!`
		});
		let userData = await db.findOne({
			id: user.id
		});
		if (!userData) await db.create({
			id: user.id
		}).then((data) => userData = data).catch(() => 0);
		clearDatabase(user.id);
		return message.reply({
			content: `Done delete all challenges of ${user}`
		}).catch(() => 0);
	} else if (message.content.startsWith('file') || message.content.startsWith('ملف')) {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		const user = message.mentions.members.first() || message.member || message.author;
		let userData = await db.findOne({
			id: user.id
		});
		if (!userData) {
			userData = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		const canvas = createCanvas(1536, 1024);
		const ctx = canvas.getContext('2d');
		const bg = await loadImage(path.join(__dirname, profilepng));
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		const avatar = await loadImage(user.displayAvatarURL({
			format: 'png',
			size: 512
		}));
		const avatarCircle = {
			x: 198,
			y: 221,
			radius: 100
		};
		const avatarSize = avatarCircle.radius * 2;
		const offsetX = avatarCircle.x - avatarSize / 2;
		const offsetY = avatarCircle.y - avatarSize / 2;
		ctx.save();
		ctx.beginPath();
		ctx.arc(avatarCircle.x, avatarCircle.y, avatarCircle.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();
		ctx.drawImage(avatar, offsetX, offsetY, avatarSize, avatarSize);
		ctx.restore();
		ctx.textAlign = 'left';
		ctx.direction = 'ltr';
		ctx.fillStyle = userData.premium ? '#FFD700' : '#FFFFFF';
		ctx.font = 'bold 50px Arial';
		ctx.fillText(`${user.user?.username || message.author.username}`, 400, 180);
		if (userData.premium) {
			ctx.fillStyle = '#00BFFF';
			ctx.font = 'bold 32px Arial';
			ctx.fillText('(PREMIUM)', 400, 230);
		}
		ctx.fillStyle = '#32CD32';
		ctx.font = 'bold 40px Arial';
		ctx.fillText(`$${formatCoins(userData.coins)}`, 400, userData.premium ? 280 : 240);
		const stats = [
			[`${"\u200F"}عدد التحديات: ${userData.challengesnumber}`, 100, 400],
			[`${"\u200F"}عدد مرات الفوز: ${userData.winnumber}`, 100, 460],
			[`${"\u200F"}عدد مرات الخسارة: ${userData.losenumber}`, 100, 520],
			[`${"\u200F"}عدد مرات التعادل: ${userData.tienumber}`, 100, 580],
			[`${"\u200F"}إجمالي الربح: ${formatCoins(userData.totalwinnings, "arabic")}`, 100, 640],
			[`${"\u200F"}إجمالي الخسارة: ${formatCoins(userData.totallost, "arabic")}`, 100, 700],
			[`${"\u200F"}التحويلات الواردة: ${formatCoins(userData.incomingtransactions, "arabic")}`, 100, 760],
			[`${"\u200F"}التحويلات الصادرة: ${formatCoins(userData.outcomingtransactions, "arabic")}`, 100, 820],
			[`${"\u200F"}إجمالي الشحن: ${formatCoins(userData.totaltopup, "arabic")}`, 100, 880],
			[`${"\u200F"}إجمالي السحب: ${formatCoins(userData.totalwithdraw, "arabic")}`, 100, 940]
		];
		ctx.fillStyle = userData.premium ? '#FFD700' : '#FFFFFF';
		ctx.font = 'bold 34px Arial';
		stats.forEach(([text, x, y]) => ctx.fillText(text, x, y));
		const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png');
		message.reply({
			content: `> ${user}`,
			files: [attachment]
		});
	} else if (message.content.toLowerCase().startsWith("tax") || message.content.startsWith("ضريبة") || message.content.startsWith("ضريبه")) {
		if (!message.guild) return;
		if (message.author.bot) return;
		let args = message.content.split(" ").slice(1).join(" ");
		if (!args) return message.reply("**🙄 Please enter a number**").catch((err) => { });
		let argamount = args.toUpperCase()
		if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
		else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
		else if (args.endsWith("ك")) args = args.replace(/ك/gi, "") * 1000;
		else if (args.endsWith("م")) args = args.replace(/م/gi, "") * 1000000;
		else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
		else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
		let args2 = parseInt(args)
		let tax = Math.floor(args2 * (20) / (19) + (1))
		let embed = new MessageEmbed().setThumbnail(client.user.avatarURL({
			dynamic: true
		})).addFields([{
			name: `Tax ${argamount}`,
			value: `\`\`\`${tax}\`\`\``
		}]).setColor(serverColor).setTimestamp().setFooter({
			text: "7lm Casino",
			avatarURL: client.user.avatarURL
		})
		message.reply({
			embeds: [embed]
		}).catch((err) => { });
	} else if (message.content == "$post" && message.member.roles.cache.has(ownerrole) && message.guild) {
		const channel = client.channels.cache.get(channelidpanel);
		if (!channel) return;
		const embed = new MessageEmbed().setTitle('شراء روم خاصة').setDescription(`**لشراء روم خاصة قم بالضغط على الزر بالأسفل**`).addFields({
			name: `سعر الرومات الخاصة`,
			value: `30000`
		}, {
			name: `عدد الرومات المتوفرة الآن`,
			value: `6`
		}).setColor(serverColor);
		const button = new MessageButton().setCustomId('buyroomprv').setLabel("اضغط لشراء روم خاص بك").setStyle('PRIMARY');
		const actionRow = new MessageActionRow().addComponents(button);
		channel.send({
			embeds: [embed],
			components: [actionRow]
		});
		message.delete();
	} else if (message.content === "totalcoins" && (message.member.roles.cache.has(ownerrole))) {
		const msg = await message.reply("**Calculating..**")
		const money = await db.find({}).exec();
		let total = 0
		for (let i = 0; i < money.length; i++) {
			total += parseInt(money[i].coins) + parseInt(money[i].prembank) + parseInt(money[i].cashback) + parseInt(money[i].withdraw_amount)
		}
		const embed = new MessageEmbed().setAuthor({
			name: `مجموع الرصيد`
		}).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setColor(serverColor).setDescription(total.toLocaleString());
		await msg.edit({
			content: "** **",
			embeds: [embed]
		});
	} else if (message.content === "totalprembank" && (message.member.roles.cache.has(ownerrole))) {
		const msg = await message.reply("**Calculating..**")
		const money = await db.find({}).exec();
		let total = 0
		for (let i = 0; i < money.length; i++) {
			total += parseInt(money[i].prembank)
		}
		const embed = new MessageEmbed().setAuthor({
			name: `مجموع الرصيد`
		}).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setColor(serverColor).setDescription(total.toLocaleString());
		await msg.edit({
			content: "** **",
			embeds: [embed]
		});
	} else if ((message.content.trim().toLowerCase().split(" ")[0] === "توب" || message.content.trim().toLowerCase().split(" ")[0] === "top") && !message.author.bot) {
		try {
			const topUsers = await db.find({}, {
				id: 1,
				coins: 1
			}).sort({
				coins: -1
			}).limit(15);
			if (!topUsers.length) {
				return message.reply("🚫 لا يوجد أي شخص في التوب بعد.");
			}
			const leaderboard = topUsers.map((entry, index) => {
				return `${"\u200E"}${index === 0 ? `${crownemoji}**.**` : `**${index + 1}.**`} <@${entry.id}>  \`—\`  **${formatCoins(entry.coins)}**`;
			}).slice(0, 10).join("\n");
			const embed = new MessageEmbed().setAuthor({
				name: "🏆 توب الرصيد"
			}).setColor(serverColor).setDescription(leaderboard).setFooter({
				text: message.guild?.name || "Unknown Server"
			}).setTimestamp();
			await message.reply({
				embeds: [embed]
			});
		} catch (error) {
			console.error("Error generating leaderboard:", error);
			message.reply("❌ حدث خطأ أثناء عرض التوب.");
		}
	} else if (message.content === "totalwithdrawed" && (message.member.roles.cache.has(ownerrole))) {
		const msg = await message.reply("**Calculating..**")
		const money = await db.find({}).exec();
		let total = 0
		for (let i = 0; i < money.length; i++) {
			total += parseInt(money[i].totalwithdraw)
		}
		const embed = new MessageEmbed().setAuthor({
			name: `مجموع عمليات السحب التامة`
		}).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setColor(serverColor).setDescription(total.toLocaleString());
		await msg.edit({
			content: "** **",
			embeds: [embed]
		});
	} else if (message.content === "totaltowithdraw" && (message.member.roles.cache.has(ownerrole))) {
		const msg = await message.reply("**Calculating..**")
		const money = await db.find({}).exec();
		let total = 0
		for (let i = 0; i < money.length; i++) {
			total += parseInt(money[i].withdraw_amount)
		}
		const embed = new MessageEmbed().setAuthor({
			name: `مجموع عمليات السحب الجارية`
		}).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setColor(serverColor).setDescription(total.toLocaleString());
		await msg.edit({
			content: "** **",
			embeds: [embed]
		});
	} else if (message.content === "totaltopup" && (message.member.roles.cache.has(ownerrole))) {
		const msg = await message.reply("**Calculating..**")
		const money = await db.find({}).exec();
		let total = 0
		for (let i = 0; i < money.length; i++) {
			total += parseInt(money[i].totaltopup)
		}
		const embed = new MessageEmbed().setAuthor({
			name: `مجموع عمليات الشحن`
		}).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setColor(serverColor).setDescription(total.toLocaleString());
		await msg.edit({
			content: "** **",
			embeds: [embed]
		});
	} else if (['كاش', 'كاش باك', 'cash', 'cashback'].includes(message.content.toLowerCase())) {
		if (isBlacklisted(message.author.id)) return;
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no",
				cashback: 0
			});
		}
		let amountWithdrawn = data.cashback;
		if (amountWithdrawn > 0) {
			data.coins += amountWithdrawn;
			data.cashback = 0;
			await data.save();
		}
		const embed = new MessageEmbed().setColor('#01b5fc').setAuthor({
			name: 'تم السحب بنجاح!',
			iconURL: message.guild.iconURL({
				dynamic: true
			})
		}).setDescription(`💰 تم سحب مبلغ **${amountWithdrawn.toLocaleString()}** إلى رصيدك`).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setTimestamp();
		await message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(' ')[0].toLowerCase() === "ad") {
		if (isBlacklisted(message.author.id)) return;
		let data = await privdata.findOne({
			channelid: message.channel.id
		})
		if (!data) return;
		if (data.owner != message.author.id) return;
		let user = message.mentions.users.first() || await client.users.fetch(message.content.split(' ')[1], {
			force: true
		}).catch(() => undefined);
		if (!user) return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد شخص حتى تضيفه إلى الروم.**")
		if (user === message.author) return;
		if (data.addedmembers.includes(user.id)) return message.reply("العضو الي تم ذكره مضاف فعلا بالروم");
		if (data.addedmembers.length >= 5) return message.reply(`> **لقد تعديت الحد الأقصى للأشخاص في الروم استخدم امر rmv لازالة شخص علاقل **`);
		data.addedmembers.push(user.id);
		await data.save();
		await message.channel.permissionOverwrites.create(user, {
			SEND_MESSAGES: true,
			VIEW_CHANNEL: true,
		});
		return message.reply(`> ** تم إضافة هذا الشخص إلى الروم بنجاح **`)
	} else if (message.content.split(' ')[0].toLowerCase() === "rem") {
		if (isBlacklisted(message.author.id)) return;
		let data = await privdata.findOne({
			channelid: message.channel.id
		})
		if (!data) return;
		if (data.owner != message.author.id) return;
		let user = message.mentions.users.first() || await client.users.fetch(message.content.split(' ')[1], {
			force: true
		}).catch(() => undefined);
		if (!user) return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد شخص حتى تضيفه إلى الروم.**");
		if (user === message.author) return;
		if (!data.addedmembers.includes(user.id)) return message.reply("العضو الي تم ذكره ليس مضافا بالروم");
		data.addedmembers = data.addedmembers.filter(item => item !== user.id)
		await data.save();
		await message.channel.permissionOverwrites.delete(user);
		return message.reply(`> ** تم ازالة هذا الشخص من الروم بنجاح **`)
	} else if (message.content === "de1ete" && (message.member.roles.cache.has(ownerrole))) {
		message.channel.delete().catch();
	} else if (message.content.startsWith("toggleinv") && (message.member.roles.cache.has(ownerrole))) {
		let invv = await setinv.findOne();
		if (!invv) await setinv.create({
			systemm: "off"
		});
		if (invv.systemm === "on") {
			invv.systemm = "off";
			await message.reply("**Invite rewards set to OFF**")
		} else {
			invv.systemm = "on";
			await message.reply("**Invite rewards set to ON**")
		}
		await invv.save();
	} else if (message.content === "dall" && (message.member.roles.cache.has(ownerrole))) {
		const categoryID = supportcateg;
		const category = message.guild.channels.cache.find(c => c.type === 'GUILD_CATEGORY' && c.id === categoryID);
		if (!category) {
			return message.reply('Category not found.');
		}
		await category.children.forEach(async channel => {
			if (!['dont-close', 'don\'t-close', 'dontclose'].includes(channel.name.toLowerCase())) {
				await channel.delete();
			}
		});
	} else if (message.content === '!sendticket' && message.member.roles.cache.has(ownerrole)) {
		try {
			const filePath = path.join(__dirname, 'ticket.png');
			const attachment = new MessageAttachment(filePath, 'ticket.png');
			const embed = new MessageEmbed().setDescription('**لـ الشحن أو الدعم الفني أو التقديم للإدارة، اختر أحد الخيارات بالأسفل.**').setImage('attachment://ticket.png');
			const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('select_ticket').setPlaceholder('اختر تذكرة').addOptions([{
				label: 'شحن',
				description: 'قم بفتح تذكرة شحن',
				value: 'shane',
				emoji: '<:115:1338958591024955494>',
			}, {
				label: 'الدعم الفني',
				description: 'قم بفتح تذكرة دعم فني',
				value: 'support',
				emoji: '<:supportblur:1411526470039507036>',
			}, {
				label: 'إعادة التحميل',
				description: 'قم بإعادة تحميل الاختيارات',
				value: 'reload',
				emoji: '<a:Loading:1354840326543769720>',
			}]));
			await message.channel.send({
				embeds: [embed],
				components: [row],
				files: [attachment]
			});
			await message.delete();
		} catch (err) {
			console.error('❌ خطأ أثناء إرسال رسالة التذاكر:', err);
		}
	} else if (message.content === "withdrawon") {
		if (!(message.member.roles.cache.has(setlimitrole))) return;
		let adasd = await kombe.findOne();
		if (!adasd) {
			adasd = await kombe.create({
				kombe: 2000,
				yesorno: "no",
				dailylimit: 2000,
				sahbsett: "on"
			})
		}
		adasd.sahbsett = "on";
		adasd.save();
		return message.reply(`تم فتح السحب بنجاح!`)
	} else if (message.content === "resettime") {
		if (!(message.member.roles.cache.has(setlimitrole))) return;
		let adasd = await kombe.findOne();
		if (!adasd) {
			adasd = await kombe.create({
				kombe: 2000,
				yesorno: "no",
				dailylimit: 2000,
				sahbsett: "taw9it"
			})
		}
		adasd.sahbsett = "taw9it";
		adasd.save();
		return message.reply(`تم إرجاع توقيت السحب بنجاح!`)
	} else if (message.content === "ahelp") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let embed = new MessageEmbed().setColor(serverColor).setTitle("أوامر الأدمن").setDescription("قائمة بأوامر الأدمن المتاحة:").addFields({
			name: "`rstwth`",
			value: "تصفير سحب",
			inline: true
		}, {
			name: "`Rs`",
			value: "تصفير تحدي عضو",
			inline: true
		}, {
			name: "`Rsall`",
			value: "تصفير تحديات كل الأعضاء",
			inline: true
		}, {
			name: "`toggleinv`",
			value: "فتح وإغلاق نظام الريوارد",
			inline: true
		}, {
			name: "`setlimit`",
			value: "تحديد الحد الاقصى للسحب لليوم",
			inline: true
		}, {
			name: "`setdaily`",
			value: "تحديد الحد الاقصى اليومي للسحب",
			inline: true
		}, {
			name: "`add`",
			value: "اعطاء شخص رصيد",
			inline: true
		}, {
			name: "`rmv`",
			value: "حذف رصيد من شخص",
			inline: true
		}, {
			name: "`blacklist`",
			value: "اعطاء شخص بلاك ليست",
			inline: true
		}, {
			name: "`resettime`",
			value: "لارجاع السحب لنظامه التلقائي",
			inline: true
		}, {
			name: "`withdrawon`",
			value: "لفتح السحب بدون توقيت",
			inline: true
		}, {
			name: "`withdrawoff`",
			value: "لإغلاق السحب مؤقتا",
			inline: true
		});
		message.reply({
			embeds: [embed]
		});
	} else if (message.content === "withdrawoff") {
		if (!(message.member.roles.cache.has(setlimitrole))) return;
		let adasd = await kombe.findOne();
		if (!adasd) {
			adasd = await kombe.create({
				kombe: 2000,
				yesorno: "no",
				dailylimit: 2000,
				sahbsett: "off"
			})
		}
		adasd.sahbsett = "off";
		adasd.save();
		return message.reply(`تم إغلاق السحب بنجاح!`)
	} else if (message.content.startsWith('rename')) {
		if (!(message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(supportRoleId)) || !(message.channel.parent.id === supportcateg)) return;
		const newName = message.content.split(' ').slice(1).join(' ');
		if (!newName) return message.reply('Please provide a new name for the channel.').catch(() => { message.channel?.send('Please provide a new name for the channel.') });
		try {
			await message.channel.setName(newName);
			message.reply(`Channel name changed to **${newName}**`).catch(() => { message.channel?.send(`Channel name changed to **${newName}**`) });
		} catch {
			message.reply('I couldn’t change the channel name. Make sure I have the necessary permissions.').catch(() => { message.channel?.send('I couldn’t change the channel name. Make sure I have the necessary permissions.') });
		}
	} else if (message.content === '!sendapply' && message.member.roles.cache.has(ownerrole)) {
		const embed = new MessageEmbed().setDescription('**لـ التقديم للإدارة، اختر بالأسفل.**');
		const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('select_ticket').setPlaceholder('اختر').addOptions([{
			label: 'التقديم للإدارة',
			description: 'قم بفتح تذكرة تقديم للإدارة',
			value: 'support_apply',
			emoji: '<:yessir:1354622495243763833>',
		}, {
			label: 'إعادة التحميل',
			description: 'قم بإعادة تحميل الاختيارات',
			value: 'reload',
			emoji: '<a:Loading:1354840326543769720>',
		}]));
		message.channel.send({
			embeds: [embed],
			components: [row]
		});
		message.delete()
	} else if (message.content === 'untime') {
		if (!message.member.roles.cache.has(ownerrole)) {
			return message.reply('❌ You do not have permission to use this command.');
		}
		const guild = message.guild;
		if (!guild) {
			return message.reply('❌ This command can only be used in a server.');
		}
		const members = await guild.members.fetch();
		let count = 0;
		message.reply('⏳ Un-timing out all members. This may take some time...');
		for (const member of members.values()) {
			if (member.communicationDisabledUntilTimestamp) {
				try {
					await member.timeout(null);
					count++;
				} catch { }
			}
		}
		message.channel.send(`✅ Finished removing timeouts from ${count} members.`);
	} else if (message.content === "dallinv" && (message.member.roles.cache.has(ownerrole))) {
		const guild = client.guilds.cache.get(bettingserverid);
		if (!guild) return;
		try {
			const invites = await guild.invites.fetch();
			const content = `(${invites.size}) invites\n`
			const msg = await message.reply(content);
			let i = 0
			for (const invite of invites.values()) {
				try {
					await invite.delete();
				} catch { }
				i += 1;
				await msg.edit(content + `\nDeleted invite ${invite.code} number ${i}`);
				await new Promise(resolve => setTimeout(resolve, 500));
			}
		} catch { }
	} else if (message.content === '+help') {
		if (message.author.bot) return;
		const embed = new MessageEmbed().setColor('#007bff').setDescription(`
> ✦ **General Commands :**
> ✨ \`+points\` - لمشاهدة نقاطك.
> 🎡 \`+spin\` - لتدوير عجلة الحظ.
> 🔴 تحتاج **1 دعوة** للعجلة العادية.
> 🔥 تحتاج **2 دعوات** للعجلة الأسطورية.
			`).setTimestamp();
		return message.reply({
			embeds: [embed]
		});
	} else if (message.content === '+off') {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return message.reply('❌ ليس لديك صلاحية استخدام هذا الأمر.');
		let invv = await setinv.findOne();
		if (!invv) await setinv.create({
			spinsystem: "off"
		});
		invv.spinsystem = "off";
		await invv.save();
		return message.reply('🚫 تم تعطيل جميع أوامر بوت عجلة الحظ.');
	} else if (message.content === '+on') {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return message.reply('❌ ليس لديك صلاحية استخدام هذا الأمر.');
		let invv = await setinv.findOne();
		if (!invv) await setinv.create({
			spinsystem: "on"
		});
		invv.spinsystem = "on";
		await invv.save();
		return message.reply('✅ تم تفعيل جميع أوامر البوت.');
	} else if (message.content === '+reset') {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return message.reply('❌ ليس لديك صلاحية استخدام هذا الأمر.');
		const money = await db.find({}).exec();
		await db.updateMany({}, {
			$set: {
				points: 0
			}
		});
		return message.reply('✅ تم تصفير جميع نقاط الدعوات.');
	} else if (message.content.startsWith('+add-points')) {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return message.reply('❌ ليس لديك صلاحية استخدام هذا الأمر.');
		const args = message.content.split(' ');
		const targetMember = message.mentions.members.first();
		const pointsToAdd = parseInt(args[2], 10);
		if (!targetMember || isNaN(pointsToAdd)) return message.reply('❌ صيغة الأمر غير صحيحة. استخدم: `+add-points @mentionUser عدد_النقاط`');
		let data = await db.findOne({
			id: targetMember.id
		});
		if (!data) {
			data = await db.create({
				id: targetMember.id,
				coins: 0,
				status_playing: "no",
				cashback: 0,
				points: 0
			});
		}
		const currentPoints = data.points;
		data.points += pointsToAdd;
		await data.save()
		return message.reply(`✅ تم إضافة ${pointsToAdd} نقطة لـ <@${targetMember.id}>. النقاط الحالية: **${currentPoints + pointsToAdd}**`);
	} else if (message.content.startsWith('+rmv-points')) {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return message.reply('❌ ليس لديك صلاحية استخدام هذا الأمر.');
		const args = message.content.split(' ');
		const targetMember = message.mentions.members.first();
		const pointsToAdd = parseInt(args[2], 10);
		if (!targetMember || isNaN(pointsToAdd)) return message.reply('❌ صيغة الأمر غير صحيحة. استخدم: `+rmv-points @mentionUser عدد_النقاط`');
		let data = await db.findOne({
			id: targetMember.id
		});
		if (!data) {
			data = await db.create({
				id: targetMember.id,
				coins: 0,
				status_playing: "no",
				cashback: 0,
				points: 0
			});
		}
		const currentPoints = data.points;
		data.points += pointsToAdd;
		await data.save()
		return message.reply(`✅ تم حذف ${pointsToAdd} نقطة لـ <@${targetMember.id}>. النقاط الحالية: **${currentPoints - pointsToAdd}**`);
	} else if (message.content.startsWith('+points')) {
		if (message.author.bot) return;
		const targetMember = message.mentions.members.first() || message.member;
		let data = await db.findOne({
			id: targetMember.id
		});
		if (!data) {
			data = await db.create({
				id: targetMember.id,
				coins: 0,
				status_playing: "no",
				cashback: 0,
				points: 0
			});
		}
		const currentPoints = data.points;
		return message.reply(`✨ نقاط <@${targetMember.id}>: **${currentPoints}**`);
	} else if (message.content === '+spin') {
		if (message.author.bot) return;
		let invv = await setinv.findOne();
		if (!invv) await setinv.create({
			spinsystem: "off"
		});
		if (invv.spinsystem == "off") return message.reply('🚫 عجلة الحظ معطلة حاليًا.');
		const embed = new MessageEmbed().setTitle('🎉 لعبة عجلة الحظ 🎉').setDescription('اختر نوع العجلة:').addFields({
			name: '🎡 عجلة عادية',
			value: 'يتطلب 1 نقطة'
		}, {
			name: '🔥 عجلة أسطورية',
			value: 'يتطلب 2 نقاط'
		}).setColor('#007bff').setTimestamp();
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('normal_spin').setLabel('لف العجلة العادية').setStyle("PRIMARY"), new MessageButton().setCustomId('legendary_spin').setLabel('لف العجلة الأسطورية').setStyle("DANGER"));
		return message.reply({
			embeds: [embed],
			components: [row]
		});
	} else if (message.content == "zeroal") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const money = await db.find({}).exec();
		let counter = 0
		let countermembers = 0
		const guild = await client.guilds.fetch(bettingserverid);
		let msg = await message.reply("** **")
		for (let i = 0; i < money.length; i++) {
			try {
				member = await guild.members.fetch(money[i].id);
			} catch (error) {
				if (error.code === 10007) {
					let ii = money[i].coins + money[i].cashback + money[i].prembank + money[i].withdraw_amount
					db.findOneAndUpdate({
						id: money[i].id
					}, {
						coins: 0
					})
					counter += ii
					countermembers += 1
				}
			}
		}
		await msg.edit(`Zeroed ${counter} coins from ${countermembers} left members.`);
	} else if (message.content == "showal") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const money = await db.find({
			coins: {
				$gt: 99999
			}
		}).sort({
			coins: -1
		}).exec();
		let contentt = "";
		const maxChars = 2000;
		let counter = 0
		let countermembers = 0
		const guild = await client.guilds.fetch(bettingserverid);
		for (let i = 0; i < money.length; i++) {
			try {
				const member = await guild.members.fetch(money[i].id);
			} catch (error) {
				if (error.code === 10007) {
					let ii = money[i].coins + money[i].prembank + money[i].cashback + money[i].withdraw_amount;
					if (ii >= 1000) {
						counter += ii
						countermembers += 1
						let line = `User with ID ${money[i].id} is not in the server.\n`;
						if (contentt.length + line.length > maxChars) {
							await message.channel.send(contentt);
							contentt = "";
						}
						contentt += line;
					}
				}
			}
		}
		if (contentt.length > 0) {
			await message.channel.send(contentt);
		}
		await message.channel.send(`There are ${counter} coins from ${countermembers} members`);
	} else if (message.content.startsWith("createcode")) {
		if (message.author.bot) return;
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let args = message.content.split(' ')
		if (!args[1]) return message.reply("حدد كود من فضلك")
		if (!args[2]) {
			codeamount = 0
		} else {
			codeamount = args[2]
		}
		if (!args[3]) {
			codeusecount = -1
		} else {
			codeusecount = parseInt(args[3])
		}
		if (!args[4]) {
			typee = "c"
		} else {
			typee = args[4]
		}
		if (((isNaN(codeamount) || codeamount <= 0) && typee == "c") || (!calculateDuration(codeamount) && typee == "p") || isNaN(codeusecount) || (typee !== "c" && typee !== "p")) return message.reply({
			content: `createcode code amount useamount c/p`
		})
		let code = await dbcodes.findOne({
			codestring: args[1]
		})
		if (!code) {
			code = await dbcodes.create({
				codestring: args[1],
				usecount: codeusecount,
				amount: codeamount,
				gifttype: typee || undefined
			})
		} else {
			code.codestring = args[1]
			code.usecount = codeusecount
			code.amount = codeamount
			code.gifttype = typee || undefined
			await code.save()
		}
		return message.reply("تم إنشاء الكود بنجاح")
	} else if (message.content === "!sendredeem") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const embed = new MessageEmbed().setTitle("**7lm Redeem Codes**").setDescription(`**كيفية استخدام الأكواد واسترداد الجوائز 🎉
•    السرعة مطلوبة: قم بكتابة الكود بسرعة للحصول على الجائزة قبل انتهاء الفرص ✨.
•    اضغط على زر “Redeem Code”: لإضافة الكود واسترداد جائزتك بسهولة.
•    استخدام في الوقت المحدد: الأكواد صالحة لفترة محدودة، تأكد من استخدامها في الوقت المناسب 🕙.
•    الاستخدام الأقصى: عند بلوغ الحد الأقصى لاستخدام الكود، سيتوقف عن العمل 🚫.

لا تفوّت الفرصة! كن مستعدًا واضغط على الزر الآن!**`).setImage(bannerlink);
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`redeem`).setLabel('Redeem Code').setStyle('SUCCESS'));
		message.channel.send({
			embeds: [embed],
			components: [row]
		});
		message.delete()
	} else if (message.content == "zeroredeemed") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const money = await db.find({}).exec();
		let msg = await message.reply("** **")
		for (let i = 0; i < money.length; i++) {
			try {
				money[i].redeemedcodes = [];
				money[i].save()
			} catch (error) {
				if (error.code === 10007) {
					money[i].redeemedcodes = [];
					money[i].save()
				} else {
					msg.edit('Error while checking user:', error);
				}
			}
		}
		await msg.edit(`Zeroed all redeemed codes set to [] .`);
	} else if (message.content == "zerocashback") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const money = await db.find({}).exec();
		let msg = await message.reply("** **")
		let counter = 0
		let countermembers = 0
		for (let i = 0; i < money.length; i++) {
			try {
				counter += money[i].cashback
				money[i].cashback = 0;
				money[i].save()
			} catch (error) {
				if (error.code === 10007) {
					let ii = money[i].coins + money[i].cashback + money[i].prembank + money[i].withdraw_amount
					db.findOneAndDelete({
						id: money[i].id
					})
					counter += ii
					countermembers += 1
				} else {
					msg.edit('Error while checking user:', error);
				}
			}
		}
		await msg.edit(`Zeroed ${counter} cashback.`);
	} else if (message.content == "zeroprembank") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const money = await db.find({}).exec();
		let msg = await message.reply("** **")
		for (let i = 0; i < money.length; i++) {
			try {
				money[i].coins += money[i].prembank;
				money[i].prembank = 0;
				money[i].save()
			} catch { }
		}
		await msg.edit(`Transfered bank coins.`);
	} else if (message.content === "!sendwithdraw") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const embed = new MessageEmbed().setTitle("**💳 سحب رصيد**").setDescription(`**لسحب رصيدك وتحويله إلى كريدت قم باتباع الخطوات التالية:
1️⃣ اضغط على الزر بالأسفل (طلب سحب)
2️⃣ اكتب القيمة التي تريد سحبها
3️⃣ ستصلك رسالة تأكيد السحب عند اكتمال العملية

تنويه:
- أقل مبلغ للسحب هو: 1000
- أعلى مبلغ للسحب هو: 999,999,999
- لديك دقيقتين لكتابة المبلغ
- قد تستغرق العملية 24 ساعة كحد أقصى**`).setColor(serverColor);
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('withdrawcredit').setLabel('طلب سحب').setStyle('PRIMARY'), new MessageButton().setCustomId("cancelwithdrawcredit").setLabel("الغاء سحب").setStyle("DANGER"), new MessageButton().setCustomId("infowithdrawcredit").setLabel("تواقيت السحب").setStyle("SECONDARY").setEmoji("🤔"));
		message.channel.send({
			embeds: [embed],
			components: [row]
		});
		message.delete()
	} else if (message.content === "!sendclans") {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		const embed = new MessageEmbed().setTitle("**🎗️ قائمة الكلانات**").setDescription(`**لإنشاء كلان أو حذف كلان قم باتباع الخطوات التالية:
1️⃣ اضغط على الزر بالأسفل (إنشاء كلان)
2️⃣ اكتب اسم الكلان التي تريد إنشائه
3️⃣ ستصلك رسالة تأكيد الإنشاء عند اكتمال النموذج

لأخذ نك نيم الكلان اللي انت داخل فيه اضغط الزر تحت (أخذ الاسم)

تنويه:
- سعر انشاء الكلان هو: 50,000
- أعلى عدد أعضاء بكلان واحد هو: 50 عضو**`).setColor(serverColor);
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('takenickname').setLabel('أخذ الاسم').setStyle('SECONDARY'), new MessageButton().setCustomId('createclan').setLabel('إنشاء كلان').setStyle('PRIMARY'), new MessageButton().setCustomId("removeclan").setLabel("حذف كلانك").setStyle("DANGER"), new MessageButton().setCustomId("infoclans").setLabel("معلومات عن الكلانات").setStyle("SECONDARY").setEmoji("🤔"));
		message.channel.send({
			embeds: [embed],
			components: [row]
		});
		message.delete()
	} else if (message.content.startsWith("box")) {
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let args = message.content.split(' ')
		if (!args[1]) return message.reply("حدد جائزة من فضلك")
		const codeamount = parseInt(args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`))
		const embed = new MessageEmbed().setColor(serverColor).setTitle('بوكس جديد!').setThumbnail(message.guild.iconURL({
			dynamic: true
		})).addFields({
			name: 'الجائزة:',
			value: `${formatCoins(args[1])}`,
			inline: true
		}, {
			name: '\u200B',
			value: '\u200B',
			inline: true
		}, {
			name: 'تم إنشاؤه من قبل:',
			value: `<@${message.author.id}>`,
			inline: false
		}).setFooter({
			text: '7lm Casino',
			iconURL: message.guild.iconURL({
				dynamic: true
			})
		}).setTimestamp();
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`claimbox_${message.id}`).setLabel('أخذ').setStyle('SECONDARY'));
		message.delete()
		message.channel.send("5")
		await new Promise(resolve => setTimeout(resolve, 1000));
		message.channel.send("4")
		await new Promise(resolve => setTimeout(resolve, 1000));
		message.channel.send("3")
		await new Promise(resolve => setTimeout(resolve, 1000));
		message.channel.send("2")
		await new Promise(resolve => setTimeout(resolve, 1000));
		message.channel.send("1")
		await new Promise(resolve => setTimeout(resolve, 1000));
		const msg = await message.channel.send({
			embeds: [embed],
			components: [row]
		});
		const filter = i => (i.customId === `claimbox_${message.id}`);
		const collector = msg.createMessageComponentCollector({
			filter,
			time: 60000
		});
		collector.on('end', async collected => {
			if (!collected.size) {
				await msg.edit({
					content: 'تم إلغاء البوكس بسبب عدم التفاعل.',
					components: [],
					embeds: []
				});
			}
		});
		collector.on('collect', async i => {
			collector.stop();
			await msg.edit({
				embeds: [
					new MessageEmbed().setColor(serverColor).setTitle('بوكس جديد!').setThumbnail(i.guild.iconURL({
						dynamic: true
					})).addFields({
						name: 'الجائزة:',
						value: `${formatCoins(args[1])}`,
						inline: true
					}, {
						name: 'الفائز:',
						value: `<@${i.user.id}>`,
						inline: true
					}, {
						name: 'تم إنشاؤه من قبل:',
						value: `<@${message.author.id}>`,
						inline: false
					}).setFooter({
						text: '7lm Casino',
						iconURL: i.guild.iconURL({
							dynamic: true
						})
					}).setTimestamp()
				],
				components: [
					new MessageActionRow().addComponents(new MessageButton().setCustomId(`claimbox_${message.id}`).setLabel('أخذ').setStyle('SECONDARY').setDisabled(true))
				]
			});
			await i.reply({
				content: `تم استلام الجائزة من قبل ${i.user}`
			})
			let data = await db.findOne({
				id: i.user.id
			})
			if (!data) data = await db.create({
				id: i.user.id,
				coins: 0
			})
			data.coins += codeamount
			await data.save();
		});
		return;
	} else if (message.content === 'unbanall') {
		if (!message.member.permissions.has("BAN_MEMBERS")) {
			message.reply(`❌ You don't have permission.`);
			return;
		}
		const guild = message.guild;
		if (!guild) {
			message.reply('An error occurred while finding the guild.');
			return;
		}
		try {
			const bannedUsers = await guild.bans.fetch();
			const numBanned = bannedUsers.size;
			for (const bannedUser of bannedUsers.values()) {
				await guild.members.unban(bannedUser.user.id, 'Unban all users');
			}
			message.reply(`✅ ${numBanned} members have been unbanned.`);
		} catch {
			message.reply('An error occurred while unbanning users.');
		}
	} else if (/^شحن$/i.test(message.content.trim())) {
		if (message.author.bot) return;
		const embed = new MessageEmbed().setTitle('عملية شحن رصيد').setDescription(`
**الرجاء اتباع خطوات عملية الشحن الاتية :**

**يجب أن يكون لديك رصيد بروبوت 
(كريديت)**

**يجب ان تحول كريديت حسب كمية الشحن**
**لحساب البنك الخاص بنا **

**تأكد من أن حساب البنك خاص بنا وليس  أحد الفانزات** 

**معلومات البنك الخاص بالكازينو:**  

**${bankusername} / ${ownertr}**

**طريقة التحويل:**

c ${ownertr} المبلغ

**ملاحظة:**

**لا نتحمل مسؤولية تحويل لشخص آخر!**  
`).setColor(serverColor).setFooter({
			text: ' '
		});
		const button = new MessageButton().setCustomId('copyTransfer').setLabel('نسخ التحويل').setStyle('PRIMARY');
		await message.channel.send({
			embeds: [embed],
			components: [new MessageActionRow().addComponents(button)]
		});
	} else if (message.content === '!sendselect' && message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
		const serverIcon = message.guild.iconURL({
			dynamic: true,
			size: 256
		}) || 'https://via.placeholder.com/256';
		const embed = new MessageEmbed().setTitle('**اختر الرولات المناسبة لك**').setDescription('**اختر الرتبة اللي تناسبك وانضم للتحديات مع ناس عندهم نفس شعارك، عشان تكون المواجهات عادلة والمنافسة تصير أقوى، وتلعب مع ناس بنفس مستواك بدون فرق كبير يخرب الحماس! ومعها رولات المنشن بالسيرفر**').setColor(serverColor).setThumbnail(serverIcon);
		const selectMenu = new MessageSelectMenu().setCustomId('challenge_select').setPlaceholder('اختر الرول...').addOptions([...roleOptions.map(option => ({
			label: option.label,
			value: option.value,
			emoji: option.emoji
		})), {
			label: 'اختيار الكل',
			value: 'select_all',
			emoji: "<:true:1363464700821766295>"
		}, {
			label: 'إزالة الكل',
			value: 'remove_all',
			emoji: "<:r_x:1352841247944999022>"
		}, {
			label: 'إعادة التحميل',
			value: 'refresh_select',
			emoji: "<a:Loading:1354840326543769720>"
		}]);
		const row = new MessageActionRow().addComponents(selectMenu);
		message.channel.send({
			embeds: [embed],
			components: [row]
		}).catch();
		message.delete()
	} else if (message.content === '!sendrules' && message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
		const serverIcon = message.guild.iconURL({
			dynamic: true,
			size: 256
		}) || 'https://via.placeholder.com/256';
		const embed = new MessageEmbed().setTitle('**قوانين حلم كازينو**').setDescription(`**1 - الاحترام والآداب: لازم كل الأعضاء يلتزمون بالاحترام المتبادل وما يتعرضون للتنمر أو التحريض على العنف أو أي تصرف غير لائق.

2 - اللعب بشكل وهمي فقط: كل الأنشطة والمكاسب والخسائر في حلم وهمية وغير حقيقية، وما يُسمح باستخدام أي مال حقيقي في اللعب.

3 - عدم الترويج للمقامرة الحقيقية: ممنوع تبادل روابط أو الترويج لمواقع المقامرة الحقيقية أو أي أنشطة غير قانونية.

4 - منع الاحتيال والغش: لا يُسمح باستخدام أي أدوات أو برامج أو تقنيات للتلاعب في اللعب أو تغيير نتائج الألعاب الوهمية.

5 - التبليغ عن المخالفات: لازم الأعضاء يبلغون عن أي تصرفات مخالفة أو أي نشاط مشبوه يؤثر على بيئة السيرفر.

6 - الكذب في الربط : في حال إن في واحد قاللك سوي ربط و اخذ كل فلوسك في نفس الثانية تقدر تفتح تكت و ترجع فلوسك
__يعني مثلا لو حد قاللك تعال 100 مليون و بعوضك 50 لو صدقتة السيرفر ما راح يحط أي عقوبة ل اللاعب الي قاللك بعوضك و ما عوضك__

7 - الهروب من روم التصفير: لو جالسين تلعبوا بروم تصفير تكملوا للاخر (واحد فيكم يصير رصيدو صفر بغظ النظر عن الكاش باك والبنك حق البريميوم)

**https://discord.gg/7lm-c
**اي فعل بالسيرفر سواء سب / غدر / ترويج / الخ /نشر سيرفرات / مخالفة للقواعد اللي فوق
تصفير رصيدك بالكامل ومانتساهل مع اي عمليه نصب بالسيرفر او غدر .**`).setColor(serverColor).setThumbnail(serverIcon);
		message.channel.send({
			embeds: [embed]
		}).catch();
		message.delete();
	} else if (message.content.split(' ')[0].toLowerCase() === "addtoclan") {
		if (isBlacklisted(message.author.id)) return;
		let data = await clansdb.findOne({
			ownerid: message.author.id
		})
		if (!data) return;
		let user = message.mentions.users.first() || await client.users.fetch(message.content.split(' ')[1], {
			force: true
		}).catch(() => undefined);
		if (!user) return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد شخص حتى تضيفه إلى الكلان حقك.**")
		if (user === message.author) return;
		let already = await alreadyinaclan(user.id)
		if (already == true) return message.reply("العضو الي تم ذكره موجود بكلان آخر ولا يمكنك إضافته إلى كلانك حتى يخرج من كلانه.")
		if (data.members.includes(user.id)) return message.reply("العضو الي تم ذكره موجود فعلا بالكلان");
		if (data.members.length >= 50) return message.reply(`> **لقد تعديت الحد الأقصى للأشخاص في الكلان استخدم امر removefromclan لازالة شخص علاقل **`);
		if (activeOperationsClansAddMember.has(user.id)) {
			return message.reply('العضو الذي تم تحديده لديه عملية دعوة  لكلان قيد التنفيذ بالفعل.');
		}
		let embed = new MessageEmbed().setColor(serverColor).setTitle('قبول الدعوة').setDescription(`هل تريد الدخول إلى كلان \`${data.clanname}\`؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.`);
		let buttonConfirm = new MessageButton().setCustomId('confirm_joinclan').setLabel('تأكيد').setStyle('SUCCESS');
		let buttonCancel = new MessageButton().setCustomId('cancel_joinclan').setLabel('إلغاء').setStyle('DANGER');
		let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);
		const msg = await message.reply({
			embeds: [embed],
			components: [row]
		});
		activeOperationsClansAddMember.add(user.id);
		const filter = i => (i.customId === 'confirm_joinclan' || i.customId === 'cancel_joinclann') && i.user.id === user.id;
		const collector = await msg.createMessageComponentCollector({
			filter,
			time: 60000
		});
		collector.on('end', async collected => {
			if (!collected.size) {
				activeOperationsClansAddMember.delete(user.id);
				try {
					await msg.edit({
						content: 'تم إلغاء الدعوة بسبب عدم التفاعل.',
						components: []
					});
				} catch { }
			}
		});
		collector.on('collect', async i => {
			if (i.customId === 'confirm_joinclan') {
				already = await alreadyinaclan(user.id)
				if (already) return i.reply("العضو الي تم ذكره موجود بكلان آخر ولا يمكنك إضافته إلى كلانك حتى يخرج من كلانه.")
				data.members.push(user.id);
				await data.save();
				await i.reply(`> ** تم إضافة هذا الشخص إلى الكلان بنجاح **`)
				i.message.delete()
			} else if (i.customId === 'cancel_joinclan') {
				await i.reply(`> ** تم رفض الدعوة إلى الكلان بنجاح **`)
				i.message.delete()
			}
			activeOperationsClansAddMember.delete(user.id);
		});
	} else if (message.content.split(' ')[0].toLowerCase() === "myclan" || message.content.split(' ')[0].toLowerCase() === "كلاني") {
		myclanname = await myclann(message.author.id)
		if (myclanname == "") return message.reply('أنت لست بكلان حاليا.');
		let data = await clansdb.findOne({
			clanname: myclanname
		})
		let finalLb = ""
		for (let i = 0; i < data.members.length; i++) {
			let money = await db.findOne({
				id: data.members[i]
			})
			if (!money) {
				data.members = data.members.filter(item => item !== data.members[i])
				await data.save();
				continue;
			}
			if (data.members[i] != data.ownerid) finalLb += `**<@${money.id}>** **\`-\`** **\`${formatCoins(money.coins)}\`**\n`;
		}
		let coinsss = 0;
		let moneyowner = await db.findOne({
			id: data.ownerid
		})
		if (moneyowner) coinsss = moneyowner.coins;
		let embed = new MessageEmbed().setColor(serverColor).setTitle(`معلومات الكلان: ${myclanname}`).setDescription(`**👑 المالك: \n<@${data.ownerid}>** **\`-\`** **\`${formatCoins(coinsss)}\`**\n\nالأعضاء:\n${finalLb}`);
		await message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(' ')[0].toLowerCase() === "leaveclan" || message.content.split(' ')[0].toLowerCase() === "خروج") {
		myclanname = await myclann(message.author.id)
		if (myclanname == "") return message.reply('أنت لست بكلان حاليا.');
		let data = await clansdb.findOne({
			clanname: myclanname
		})
		if (data.ownerid == message.author.id) return message.reply("عليك بحذف الكلان وليس الخروج منه لأنك صاحب الكلان.")
		data.members = data.members.filter(item => item !== message.author.id)
		await data.save();
		await message.member.setNickname(null).catch(() => { });
		return message.reply(`> ** تم إزالتك من كلانك بنجاح **`)
	} else if (message.content.split(' ')[0].toLowerCase() === "removefromclan") {
		let data = await clansdb.findOne({
			ownerid: message.author.id
		})
		if (!data) return;
		let user = message.mentions.users.first() || await client.users.fetch(message.content.split(' ')[1], {
			force: true
		}).catch(() => undefined);
		if (!user) return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد شخص حتى تستبعده من الكلان.**");
		if (user === message.author) return;
		if (!data.members.includes(user.id)) return message.reply("العضو الي تم ذكره ليس مضافا بالكلان");
		data.members = data.members.filter(item => item !== user.id)
		await data.save();
		let member = await guild.members.fetch(user.id);
		await member.setNickname(null).catch(() => { });
		return message.reply(`> ** تم إزالته من كلانك بنجاح **`)
	} else if (message.content.split(' ')[0].toLowerCase() === "clanrename") {
		let data = await clansdb.findOne({
			ownerid: message.author.id
		})
		if (!data) return;
		let user = message.content.split(' ')[1];
		if (!user) return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد إسم جديد للكلان.**");
		if (user === data.clanname) return message.reply("هذا هو اسم الكلان فعلا.");
		if (activeOperationsClansRename.has(message.author.id)) {
			return message.reply('لديك عملية حذف كلان قيد التنفيذ بالفعل.');
		}
		let embed = new MessageEmbed().setColor(serverColor).setTitle('تغيير اسم الكلان').setDescription(`هل تريد تغيير إسم كلانك إلى \`${user}\`؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.`);
		let buttonConfirm = new MessageButton().setCustomId('confirm_renameclan').setLabel('تأكيد').setStyle('SUCCESS');
		let buttonCancel = new MessageButton().setCustomId('cancel_renameclan').setLabel('إلغاء').setStyle('DANGER');
		let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);
		await message.reply({
			embeds: [embed],
			components: [row],
			ephemeral: true
		});
		activeOperationsClansRename.add(message.author.id);
		const filter = i => (i.customId === 'confirm_renameclan' || i.customId === 'cancel_renameclan') && i.user.id === message.author.id;
		const collector = message.channel.createMessageComponentCollector({
			filter,
			time: 60000
		});
		collector.on('end', async collected => {
			if (!collected.size) {
				activeOperationsClansRename.delete(message.author.id);
				await message.reply({
					content: 'تم إلغاء عملية تغيير إسم الكلان بسبب عدم التفاعل.',
					components: []
				});
			}
		});
		collector.on('collect', async i => {
			collector.stop()
			if (i.customId === 'confirm_renameclan') {
				data.clanname = user;
				await data.save();
				await i.reply({
					content: `تم تغيير إسم كلانك إلى \`${data.clanname}\` بنجاح!`,
					embeds: [],
					components: []
				});
			} else if (i.customId === 'cancel_renameclan') {
				await i.reply({
					content: 'تم إلغاء تغيير اسم الكلان.',
					embeds: [],
					components: []
				});
			}
			activeOperationsClansRename.delete(message.author.id);
		});
	} else if (message.content.startsWith('ربط')) {
		if (isBlacklisted(message.author.id)) return;
		if (status !== 1) {
			return message.reply("> ⚠️ **الأمر غير متاح حاليًا**");
		}
		const userId = message.author.id;
		const now = Date.now();
		const cooldownAmount = 30 * 1000;
		if (pendingRequests.has(userId)) {
			return message.reply("> **⏳ `-` لديك طلب ربط معلق! يرجى الانتظار حتى يتم قبوله أو رفضه.**");
		}
		if (cooldowns12.has(userId)) {
			const expirationTime = cooldowns12.get(userId) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = Math.ceil((expirationTime - now) / 1000);
				return message.reply(`> **⏳ | يرجى الانتظار ${timeLeft} ثانية قبل استخدام هذا الأمر مرة أخرى.**`);
			}
		}
		const target = message.mentions.users.first();
		if (!target) return message.reply("> **⚠️ `-` يرجى تحديد عضو صحيح.**");
		if (target.id === message.author.id) {
			return message.reply("> **⚠️ `-` لا يمكنك الربط مع نفسك حاول تحديد عضو آخر.**");
		}
		if (links[userId]) {
			return message.reply("> **⚠️ `-` لا يمكنك الربط لأنك مرتبط مسبقًا بشخص آخر!**");
		}
		if (Object.values(links).includes(target.id)) {
			return message.reply("> **⚠️ `-` لا يمكنك الربط مع هذا الشخص لأنه مربوط مسبقًا بشخص آخر!**");
		}
		if (pendingRequests.has(target.id)) {
			return message.reply("> **⚠️ `-` هذا الشخص لديه طلب ربط معلق! يرجى الانتظار حتى يتم قبوله أو رفضه.**");
		}
		if (isBlacklisted(target.id)) return;
		cooldowns12.set(userId, now);
		pendingRequests.add(userId);
		const embed = new MessageEmbed().setTitle("> 🔗 **طلب ربط الحساب**").setDescription(`📌 \`-\` عزيزي **${target.username}**،\n**${message.author.username}** يريد ربط حسابه معك. إذا وافقت، سيتمكن من السحب من حسابك البنكي مباشرةً.\n\nيرجى **قبول** أو **رفض** الطلب باستخدام الأزرار أدناه.`).setColor(serverColor).setThumbnail(target.displayAvatarURL({
			dynamic: true
		})).setFooter({
			text: "اضغط على زر قبول أو رفض",
			iconURL: client.user.displayAvatarURL()
		}).setTimestamp();
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('accept').setLabel('✅ قبول').setStyle('SUCCESS'), new MessageButton().setCustomId('reject').setLabel('❌ رفض').setStyle('DANGER'), new MessageButton().setCustomId('cancel').setLabel('🚫 إلغاء').setStyle('SECONDARY'));
		const msg = await message.channel.send({
			content: `||<@${message.author.id}> <@${target.id}>||`,
			embeds: [embed],
			components: [row]
		});
		const filter = (interaction) => ['accept', 'reject', 'cancel'].includes(interaction.customId);
		const collector = msg.createMessageComponentCollector({
			filter,
			time: 120000
		});
		collector.on('collect', async (interaction) => {
			if (interaction.customId === 'cancel') {
				if (interaction.user.id !== userId) {
					return interaction.reply({
						content: "> ❌ **لا يمكنك استخدام هذا الزر!**",
						ephemeral: true
					});
				}
				await msg.edit({
					content: `> **🚫 تم إلغاء عملية الربط بواسطة <@${userId}>.**`,
					embeds: [],
					components: []
				});
				pendingRequests.delete(userId);
				return collector.stop();
			}
			if (interaction.user.id !== target.id) {
				return interaction.reply({
					content: "> ❌ **هذا الزر ليس لك!**",
					ephemeral: true
				});
			}
			if (interaction.customId === 'accept') {
				links[userId] = target.id;
				links[target.id] = userId;
				saveLinks();
				const successEmbed = new MessageEmbed().setTitle("> ✅ **تم الربط بنجاح!**").setDescription(`🎉 \`-\` تم ربط حسابك مع **${target.username}** بنجاح!\n\n📤 | يمكنك الآن السحب باستخدام الأمر:\n\`سحب [المبلغ]\``).setColor("GREEN").setThumbnail(message.author.displayAvatarURL({
					dynamic: true
				})).setFooter({
					text: "شكراً لاستخدامك النظام",
					iconURL: client.user.displayAvatarURL()
				}).setTimestamp();
				await msg.edit({
					embeds: [successEmbed],
					components: []
				});
			} else {
				const rejectEmbed = new MessageEmbed().setTitle("> ❌ **تم رفض الطلب**").setDescription(`❌ \`-\` رفض ${target.username} طلب الربط.`).setColor("#FF0000").setTimestamp();
				await msg.edit({
					embeds: [rejectEmbed],
					components: []
				});
			}
			pendingRequests.delete(userId);
			collector.stop();
		});
		collector.on('end', async (collected, reason) => {
			if (reason === 'time') {
				const timeoutEmbed = new MessageEmbed().setTitle("> ⏳ **انتهت مدة الطلب**").setDescription("**⚠️ `-` لم يتم قبول أو رفض الطلب في الوقت المحدد. تم إلغاء العملية.**").setColor("BLACK").setTimestamp();
				await msg.edit({
					embeds: [timeoutEmbed],
					components: []
				});
				pendingRequests.delete(userId);
			}
		});
		setTimeout(() => cooldowns12.delete(userId), cooldownAmount);
	} else if (message.content.startsWith("فصل")) {
		const args = message.content.split(" ").slice(1);
		const mentionedUser = message.mentions.users.first();
		if (!mentionedUser) {
			if (args.length > 0) {
				return message.reply("> **⚠️ `-` يرجى تحديد شخص عبر المنشن.**");
			}
			return message.reply("> **⚠️ `-` يجب منشن الشخص اللي تبي تفصله.**");
		}
		if (!links[message.author.id] || links[message.author.id] !== mentionedUser.id || links[mentionedUser.id] !== message.author.id) {
			return message.reply("> **⚠️ `-` لا يمكنك فصل هذا الشخص لأنه غير مرتبط معك.**");
		}
		delete links[message.author.id];
		delete links[mentionedUser.id];
		saveLinks();
		const embed = new MessageEmbed().setTitle("> 🔓 **تم فصل الحساب**").setDescription(`**📤 \`-\` تم فصل حسابك بنجاح من حساب <@${mentionedUser.id}>.**`).setColor(serverColor).setTimestamp();
		message.channel.send({
			embeds: [embed]
		});
	} else if (message.content === "fsall") {
		const ownerRole = ownerrole;
		if (!message.member.roles.cache.has(ownerRole)) {
			return message.reply("> **❌ `-` هذا الأمر متاح فقط للأونرات.**");
		}
		if (Object.keys(links).length === 0) {
			return message.reply("> **⚠️ `-` لا يوجد أي حسابات مربوطة حاليًا.**");
		}
		links = {};
		saveLinks();
		const embed = new MessageEmbed().setTitle("> 🔓 **تم فصل جميع الحسابات**").setDescription("**📤 `-` تم فصل جميع الحسابات المربوطه بنجاح.**").setColor(serverColor).setTimestamp();
		message.channel.send({
			embeds: [embed]
		});
	} else if (message.content === "معلومات") {
		if (isBlacklisted(message.author.id)) return;
		let user = message.author;
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no",
				blocked: []
			});
		}
		if (data.premium == false) return message.reply('**هذي الميزة للبريميوم فقط. لو عايز تشتري اشتراك بريميوم اكتب `بري` وسوي تأكيد**');
		let embed = new MessageEmbed().setColor(serverColor).setTitle(`💼 **معلومات الحساب الشخصي**`).setDescription(`🔍 **تفاصيل الحساب الخاص بـ ${user.tag}**`).setThumbnail(user.displayAvatarURL({
			dynamic: true
		})).addFields({
			name: "💰 **الحساب البنكي**",
			value: links[user.id] ? `<@${links[user.id]}>` : "لا يوجد"
		}, {
			name: "🔒 **اللاعبون المحظورون**",
			value: (data.blocked && data.blocked.length > 0) ? data.blocked.map(blockedUserId => `<@${blockedUserId}>`).join(", ") : "لا يوجد"
		}).setFooter({
			text: `تم الطلب بواسطة ${user.username}`,
			iconURL: user.displayAvatarURL({
				dynamic: true
			})
		}).setTimestamp();
		return message.reply({
			embeds: [embed]
		});
	} else if (message.content.startsWith("سحب ") || message.content.startsWith("ايداع ")) {
		if (isBlacklisted(message.author.id)) return;
		if (message.member.roles.cache.has(borrowedrole)) return;
		const args = message.content.split(" ");
		let action = args[0];
		let amount = args[1];
		if (!amount || args.length > 2) return message.reply(`> **⚠️ \`-\` يرجى تحديد مبلغ لـ ${action}.**`);
		if (!links[message.author.id]) return message.reply("> **⚠️ `-` يجب عليك الربط مع شخص قبل استخدام هذا الأمر.**");
		const linkedUserId = links[message.author.id];
		if (isBlacklisted(linkedUserId)) return;
		const guild = client.guilds.cache.get(bettingserverid);
		const linkeduser = await guild.members.cache.get(linkedUserId);
		if (!linkeduser) return message.reply('الشخص اللي انت رابط معو مش موجود بالسيرفر.')
		if (linkeduser.roles.cache.has(borrowedrole)) return;
		let userData = await db.findOne({
			id: message.author.id
		});
		let linkedUserData = await db.findOne({
			id: linkedUserId
		});
		if (!linkedUserData || !userData) return message.reply("> **⚠️ `-` لا يوجد حساب بنكي مسجل لأحد الطرفين.**");
		if (inProgress.has(message.author.id) || inProgress.has(linkedUserId)) return message.reply("> **⚠️ `-` هناك عملية جارية بالفعل لأحد الطرفين، يرجى الانتظار حتى تكتمل العملية السابقة.**");
		let processMessage = await message.reply({
			embeds: [
				new MessageEmbed().setTitle(`>  جاري ${action} مبلغ ${amount} ...`).setDescription(` عملية ${action} جارية. يرجى الانتظار...`).setColor("#ffcc00").setFooter({
					text: "انتظر حتى يتم تنفيذ العملية"
				}).setTimestamp()
			]
		});
		inProgress.set(message.author.id, true);
		inProgress.set(linkedUserId, true);
		userData = await db.findOne({
			id: message.author.id
		});
		linkedUserData = await db.findOne({
			id: linkedUserId
		});
		if (userData.status_playing === "yes" || linkedUserData.status_playing === "yes") {
			inProgress.delete(message.author.id);
			inProgress.delete(linkedUserId);
			return processMessage.edit({
				embeds: [
					new MessageEmbed().setTitle(`> ⚠️ لا يمكنك ${action} لأنك أو الشخص المرتبط معك في حالة لعب!`).setDescription("يرجى الانتظار حتى تنتهي حالة اللعب.").setColor("#ff0000").setFooter({
						text: "تم رفض العملية"
					}).setTimestamp()
				]
			});
		}
		userData = await db.findOne({
			id: message.author.id
		});
		linkedUserData = await db.findOne({
			id: linkedUserId
		});
		let parsedAmount = 0;
		if (amount.toLowerCase() === "نص" || amount.toLowerCase() === "نصف") {
			parsedAmount = Math.floor((action === "سحب" ? linkedUserData.coins : userData.coins) / 2);
		} else if (amount.toLowerCase() === "كامل" || amount.toLowerCase() === "فل") {
			parsedAmount = action === "سحب" ? linkedUserData.coins : userData.coins;
		} else if (amount.toLowerCase().includes("m") || amount.toLowerCase().includes("م") || amount.toLowerCase().includes("مليون")) {
			parsedAmount = parseInt(amount.toLowerCase().replace("m", "000000").replace("م", "000000").replace("مليون", "000000"));
		} else if (amount.toLowerCase().includes("b")) {
			parsedAmount = parseInt(amount.toLowerCase().replace("b", "000000000"));
		} else if (amount.toLowerCase().includes("k") || amount.toLowerCase().includes("الف") || amount.toLowerCase().includes("ك")) {
			parsedAmount = parseInt(amount.toLowerCase().replace("k", "000").replace("الف", "000").replace("ك", "000"));
		} else {
			parsedAmount = parseInt(amount);
		}
		if (isNaN(parsedAmount) || parsedAmount <= 0) {
			inProgress.delete(message.author.id);
			inProgress.delete(linkedUserId);
			return processMessage.edit({
				embeds: [
					new MessageEmbed().setTitle(`> ⚠️ المبلغ غير صحيح.`).setDescription("يرجى التأكد من المبلغ المدخل.").setColor("#ff0000").setFooter({
						text: "تم رفض العملية"
					}).setTimestamp()
				]
			});
		}
		let towithdraw = -parseInt(parsedAmount)
		let toadd = parseInt(parsedAmount)
		if (action === "سحب") {
			if (linkedUserData.coins < parsedAmount) {
				inProgress.delete(message.author.id);
				inProgress.delete(linkedUserId);
				return processMessage.edit({
					embeds: [
						new MessageEmbed().setTitle(`> ⚠️ لا يمتلك الشخص المرتبط هذا المبلغ لسحبه.`).setDescription("يرجى التأكد من رصيد الطرف الآخر.").setColor("#ff0000").setFooter({
							text: "تم رفض العملية"
						}).setTimestamp()
					]
				});
			}
			await db.findOneAndUpdate({
				id: linkedUserId
			}, {
				$inc: {
					coins: towithdraw
				}
			});
			await db.findOneAndUpdate({
				id: message.author.id
			}, {
				$inc: {
					coins: toadd
				}
			});
		} else {
			if (userData.coins < parsedAmount) {
				inProgress.delete(message.author.id);
				inProgress.delete(linkedUserId);
				return processMessage.edit({
					embeds: [
						new MessageEmbed().setTitle(`> ⚠️ لا تمتلك هذا المبلغ للإيداع.`).setDescription("يرجى التأكد من رصيدك.").setColor("#ff0000").setFooter({
							text: "تم رفض العملية"
						}).setTimestamp()
					]
				});
			}
			await db.findOneAndUpdate({
				id: linkedUserId
			}, {
				$inc: {
					coins: toadd
				}
			});
			await db.findOneAndUpdate({
				id: message.author.id
			}, {
				$inc: {
					coins: towithdraw
				}
			});
		}
		inProgress.delete(message.author.id);
		inProgress.delete(linkedUserId);
		return processMessage.edit({
			embeds: [
				new MessageEmbed().setTitle(`> ✅ تم تنفيذ عملية ${action} بنجاح.`).setDescription(`💸 ${message.author.username} قام بـ **${action}** مبلغ **${parsedAmount} $** ${action === "سحب" ? `من الحساب البنكي لـ <@${linkedUserId}>.` : `إلى الحساب البنكي لـ <@${linkedUserId}>.`}`).setColor(action === "سحب" ? "#01b5fc" : "#00d166").setFooter({
					text: "تم إتمام العملية بنجاح"
				}).setTimestamp()
			]
		});
	} else if (message.content.toLowerCase() === "دايلي") {
		if (message.author.bot) return;
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				dailytime: new Date(0)
			});
		}
		const now = Date.now();
		const lastClaim = data.dailytime.getTime();
		const dailyCooldown = 24 * 60 * 60 * 1000;
		if (now - lastClaim < dailyCooldown) {
			const remainingTime = dailyCooldown - (now - lastClaim);
			const hours = Math.floor(remainingTime / (60 * 60 * 1000));
			const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
			return message.reply(`**لا يمكنك استلام الراتب. حاول بعد ${hours} ساعة.**`);
		}
		const accountAge = now - message.author.createdTimestamp;
		const oneMonth = 30 * 24 * 60 * 60 * 1000;
		if (accountAge < oneMonth) {
			return message.reply("**لا يمكنك استلام الراتب اليومي لأن حسابك لم يُكمل شهرًا بعد.**");
		}
		const reward = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
		data.coins += reward;
		data.dailytime = new Date();
		await data.save();
		const embed = new MessageEmbed().setColor(serverColor).setTitle("الراتب اليومي").setDescription(`تم استلام راتبك اليومي المقدر بـ **${reward.toLocaleString()}$**.`).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setFooter({
			text: message.author.username,
			iconURL: message.author.displayAvatarURL({
				dynamic: true
			})
		}).setTimestamp();
		return message.reply({
			embeds: [embed],
			allowedMentions: {
				repliedUser: false
			}
		});
	} else if (message.content === "deletecode") {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) return;
		const codes = await dbcodes.find({});
		if (!codes.length) return message.reply("لا توجد أكواد حالياً.");
		const options = codes.map(code => {
			return {
				label: code.codestring,
				value: code._id.toString(),
				description: `نوع: ${code.gifttype || "غير محدد"} | الاستخدامات: ${code.usecount}`
			};
		});
		const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId("deletecode_select").setPlaceholder("اختر كوداً لحذفه").addOptions(options));
		return message.reply({
			content: "اختر الكود الذي تريد حذفه:",
			components: [row]
		});
	} else if (message.content == prefix + "sendlottery" && message.member.roles.cache.has(ownerrole)) {
		const embed = new MessageEmbed().setTitle("**7lm Lottery Tickets**").setDescription(`**لرؤية السعر الحالي للتذكرة الواحدة والجائزة الحالية ولشراء تذكرة يرجى الضغط على الزر بالأسفل**`).setImage(bannerlink);
		const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`lotteryButton`).setLabel('Info').setStyle('SUCCESS'));
		message.channel.send({
			embeds: [embed],
			components: [row]
		});
		message.delete()
	} else if (message.content === 'قائمه') {
		if (message.author.bot) return;
		const tickets = loadTickets();
		const winners = loadWinners();
		const totalTickets = Object.keys(tickets).length;
		const activeTickets = Object.values(tickets).filter(t => !t.used).length;
		const usedTickets = Object.values(tickets).filter(t => t.used).length;
		const statsEmbed = new MessageEmbed().setTitle('📊 إحصائيات اليانصيب').setColor(serverColor).addFields({
			name: '🎫 إجمالي التذاكر',
			value: totalTickets.toString(),
			inline: true
		}, {
			name: '✅ التذاكر النشطة',
			value: activeTickets.toString(),
			inline: true
		}, {
			name: '🏆 التذاكر المستخدمة',
			value: usedTickets.toString(),
			inline: true
		}, {
			name: '👑 عدد الفائزين',
			value: winners.length.toString(),
			inline: true
		}, {
			name: '📈 نسبة الفوز',
			value: totalTickets > 0 ? `${((winners.length / totalTickets) * 100).toFixed(2)}%` : '0%',
			inline: true
		}, {
			name: '⚙️ البريفيكس',
			value: `\`${prefix}\``,
			inline: true
		}).setTimestamp().setFooter({
			text: `طلب من قبل: ${message.author.tag}`
		});
		await message.reply({
			embeds: [statsEmbed]
		});
	} else if (message.content.startsWith('قنابل') || message.content.startsWith('الغام') || message.content.startsWith('mines')) {
		const playerId = message.author.id;
		const player = await db.findOne({
			id: playerId
		});
		const args = message.content.split(' ');
		if (!args[1]) return message.reply('يرجى تحديد مبلغ رهان.');
		if (!args[2]) return message.reply('يرجى تحديد عدد القنابل من 2 ل 15')
		let coinAmount = args[1]
		if (args[1] == "كامل" || args[1] == "فل") coinAmount = player.coins.toString();
		else if (args[1] == "نصف" || args[1] == "نص") coinAmount = parseInt(player.coins / 2).toString();
		else coinAmount = args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`);
		const betAmount = parseInt(coinAmount, 10);
		let N = parseInt(args[2]);
		if (!N) return message.reply('يرجى تحديد عدد القنابل من 2 ل 15')
		if (N > 15 || N < 2) return message.reply('يرجى تحديد عدد القنابل من 2 ل 15')
		if (isNaN(betAmount) || betAmount <= 0) {
			await message.reply('يرجى تحديد مبلغ رهان صحيح.');
			return;
		}
		if (betAmount > 500000 || betAmount < 1) {
			return message.reply({
				content: "**الحد الأقصى هو 500000 والحد الأدنى هو 1**"
			})
		}
		if (!player || player.coins < betAmount) {
			await message.reply('ليس لديك عملات كافية للرهان.');
			return;
		}
		if (player.status_playing == "yes") return message.reply('لا يمكنك اللعب طالما لديك تحدي جار')
		player.status_playing = "yes";
		await player.save();
		const startMultiplier = f(N);
		const incrementValue = g(N);
		const totalCells = 16;
		const totalMines = N;
		const totalGems = totalCells - totalMines;
		let currentMultiplier = startMultiplier;
		let revealed = [];
		let gameEnded = false;
		let buttons_pressed = 0;
		const grid = Array(totalCells).fill("💎");
		let minePositions = [];
		while (minePositions.length < totalMines) {
			const pos = Math.floor(Math.random() * totalCells);
			if (!minePositions.includes(pos)) minePositions.push(pos);
		}
		for (const pos of minePositions) grid[pos] = "💣";
		const buttons = [];
		for (let i = 0; i < totalCells; i++) {
			buttons.push(new MessageButton().setCustomId(`mine_${playerId}_${i}`).setLabel("❓").setStyle("SECONDARY"));
		}
		const rows = [];
		for (let i = 0; i < totalCells; i += 4) {
			rows.push(new MessageActionRow().addComponents(buttons.slice(i, i + 4)));
		}
		const embed = new MessageEmbed().setColor(serverColor).setTitle("💣 لعبة القنابل 💣").setDescription(`المبلغ: **${betAmount}**\nعدد القنابل: **${N}**\nالمضاعف الحالي: **x${currentMultiplier.toFixed(3)}**\nاضغط على الأزرار لاكتشاف الأحجار الكريمة 💎!`).setFooter({
			text: "اضغط على زر الكاش باك لإنهاء اللعبة وسحب أرباحك."
		});
		const cashoutButton = new MessageButton().setCustomId(`cashout_${playerId}`).setLabel('انهاء').setStyle("SUCCESS");
		const controlRow = new MessageActionRow().addComponents(cashoutButton);
		const msg = await message.reply({
			embeds: [embed],
			components: [...rows, controlRow]
		});
		const filter = (interaction) => interaction.customId.startsWith(`mine_${playerId}_`) || interaction.customId === `cashout_${playerId}`;
		const collector = msg.createMessageComponentCollector({
			filter,
			time: 180000
		});
		collector.on("collect", async (interaction) => {
			if (interaction.user.id !== playerId) return;
			if (gameEnded) return;
			if (interaction.customId === `cashout_${playerId}`) {
				gameEnded = true;
				const winnings = Math.floor(betAmount * (currentMultiplier - 1));
				player.coins += winnings;
				player.status_playing = "no";
				await player.save();
				await interaction.update({
					embeds: [
						new MessageEmbed().setColor("#00ff99").setTitle("💰 تم السحب!").setDescription(`ربحت **${winnings.toLocaleString()}** عملة!\nالمضاعف النهائي: **x${currentMultiplier.toFixed(3)}**`)
					],
					components: []
				});
				collector.stop();
				return;
			}
			const index = parseInt(interaction.customId.split("_")[2]);
			if (revealed.includes(index)) return interaction.reply({
				content: "❌ تم الضغط على هذا الزر مسبقاً!",
				ephemeral: true
			});
			revealed.push(index);
			if (grid[index] === "💣") {
				gameEnded = true;
				player.status_playing = "no";
				player.coins -= betAmount;
				player.cashback += parseInt(betAmount * 0.02)
				await player.save();
				for (let i = 0; i < totalCells; i++) {
					buttons[i].setLabel(grid[i]).setStyle(grid[i] === "💣" ? "DANGER" : "SUCCESS").setDisabled(true);
				}
				await interaction.update({
					embeds: [
						new MessageEmbed().setColor("#ff0000").setTitle("💥 انفجار!").setDescription(`لقد خسرت **${betAmount.toLocaleString()}** عملة 💀`)
					],
					components: [...rows]
				});
				collector.stop();
				return;
			}
			buttons_pressed += 1;
			currentMultiplier *= (1 + incrementValue);
			buttons[index].setLabel("💎").setStyle("SUCCESS").setDisabled(true);
			if (buttons_pressed == 16 - N) {
				gameEnded = true;
				const winnings = Math.floor(betAmount * (currentMultiplier - 1));
				player.coins += winnings;
				player.status_playing = "no";
				await player.save();
				await interaction.update({
					embeds: [
						new MessageEmbed().setColor("#00ff99").setTitle("💰 لقد وجدت كل الجواهر!").setDescription(`ربحت **${winnings.toLocaleString()}** عملة!\nالمضاعف النهائي: **x${currentMultiplier.toFixed(3)}**`)
					],
					components: []
				});
				collector.stop();
				return;
			}
			const newEmbed = new MessageEmbed().setColor("#00ffff").setTitle("💣 لعبة القنابل 💣").setDescription(`المبلغ: **${betAmount}**\nعدد القنابل: **${N}**\nالمضاعف الحالي: **x${currentMultiplier.toFixed(3)}**\n💎 اكتشفت حجر كريم!`).setFooter({
				text: "اضغط على زر الكاش باك لإنهاء اللعبة وسحب أرباحك."
			});
			await interaction.update({
				embeds: [newEmbed],
				components: [...rows, controlRow]
			});
		});
		collector.on("end", async () => {
			if (!gameEnded) {
				player.status_playing = "no";
				player.coins -= betAmount;
				player.cashback += parseInt(betAmount * 0.02);
				await player.save();
				await msg.edit({
					content: `⏰ انتهى وقت اللعبة وقد خسرت ${betAmount} بسبب الخمول.`,
					components: []
				});
			}
		});
	} else if (message.content === "خط") {
		if (isBlacklisted(message.author.id)) return;
		try {
			if (!(message.member.roles.cache.has(ownerrole) || message.member.id == client.user.id)) return;
			await message.channel.send({
				files: [linelineline]
			});
			await message.delete();
		} catch { }
	} else if (message.content === '!مسح_بلاكجاك') {
		if (!message.member.roles.cache.has(ownerrole)) {
			return message.reply('هذا الأمر مخصص للإدارة فقط.');
		}
		const removedGames = await game.deleteMany({
			game: 'blackjack'
		});
		const updatedUsers = await db.updateMany({
			status_playing: 'yes'
		}, {
			$set: {
				status_playing: 'no'
			}
		});
		message.reply(`تم حذف جميع تحديات بلاك جاك الجارية (${removedGames.deletedCount}) وتحديث حالة اللاعبين.`);
	} else if (message.content === '3102008') {
		if (message.author.bot) return;
		if (!message.member.roles.cache.has(ownerrole)) {
			return message.reply('❌ هذا الأمر مخصص للمسؤولين فقط.');
		}
		const reply = await message.reply(' جاري التحقق من المستخدمين...');
		const users = await db.find();
		let clearedCount = 0;
		for (const user of users) {
			const {
				challengesnumber = 0,
				winnumber = 0,
				losenumber = 0,
				tienumber = 0,
				totalwinnings = 0,
				totallost = 0,
				incomingtransactions = 0,
				outcomingtransactions = 0,
				totaltopup = 0,
				totalwithdraw = 0,
				coins = 0
			} = user;
			const allStatsAreZero = challengesnumber === 0 && winnumber === 0 && losenumber === 0 && tienumber === 0 && totalwinnings === 0 && totallost === 0 && incomingtransactions === 0 && outcomingtransactions === 0 && totaltopup === 0 && totalwithdraw === 0;
			if (allStatsAreZero && coins > 0) {
				user.coins = 0;
				await user.save();
				clearedCount++;
				await reply.edit(` تم تصفير: ${clearedCount} مستخدم${clearedCount === 1 ? '' : 'ين'}...`);
			}
		}
		await reply.edit(` تم تصفير الرصيد لـ ${clearedCount} من المستخدمين.`);
	} else if (message.channel.id == feedbackchannel && message.author.id !== client.user.id) {
		try {
			await message.channel.send({
				files: [linelineline]
			});
			message.react("💙")
		} catch { }
	} else if (message.content.startsWith('say')) {
		if (message.author.bot || message.channel.id == GAME_CHANNEL_ID) return;
		if (!message.channel.guild) return;
		if (!message.member.roles.cache.has(ownerrole)) {
			return message.reply("** 😕 You don't have permissions **");
		}
		if (!message.guild.members.me.permissions.has('ADMINISTRATOR')) {
			return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
		}
		let args = message.content.split(' ').slice(2).join(' ')
		let channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content.split(' ')[1])
		let attach = message.attachments.first()
		if (!channel) return message.channel.send('** 😕 Please mention channel or id **');
		if (!args) return message.channel.send('** ❌ Please select a message **');
		try {
			message.delete()
		} catch { }
		if (!attach) {
			channel.send({
				content: `${args}`
			});
		} else {
			channel.send({
				content: `${args}`,
				files: [attach]
			});
		}
	} else if (message.content.split(' ')[0] == 'بنك' || message.content.split(' ')[0] == 'Bank' || message.content.split(' ')[0] == 'bank') {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		let user = message.author;
		if (disableprembank === 1) return message.reply('**هذي الميزة غير متاحة حاليا.**');
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (data.premium == false) return message.reply('**هذي الميزة للبريميوم فقط. لو عايز تشتري اشتراك بريميوم اكتب `بري` وسوي تأكيد**');
		let embed = new MessageEmbed().setColor(serverColor).setThumbnail(message.guild.iconURL({
			dynamic: true
		})).setAuthor({
			name: message.author.tag,
			iconURL: message.author.avatarURL({
				dynamic: true
			})
		}).setTitle('** البنك الحالي لديك **').addFields({
			name: ` \`: رصيدك في البنك `,
			value: ` $\`${parseInt(data.prembank).toLocaleString()}\` `
		});
		let button_withdraw = new MessageButton().setCustomId(`withdraw_${message.author.id}`).setLabel('سحب ').setStyle('SUCCESS');
		let button_deposit = new MessageButton().setCustomId(`deposit_${message.author.id}`).setLabel('ايداع ').setStyle('SECONDARY');
		let row = new MessageActionRow().addComponents(button_withdraw, button_deposit);
		const replyMessage = await message.reply({
			embeds: [embed],
			components: [row],
			allowedMentions: {
				repliedUser: true
			}
		});
		setTimeout(async () => {
			button_withdraw.setDisabled(true);
			button_deposit.setDisabled(true);
			const disabledRow = new MessageActionRow().addComponents(button_withdraw, button_deposit);
			try {
				await replyMessage.edit({
					components: [disabledRow]
				});
			} catch { }
		}, 10000);
	} else if (message.content.split(" ")[0] == "فلوس" || message.content.split(" ")[0] == "Money" || message.content.split(" ")[0] == "money" || message.content.split(" ")[0] == "فلوسي") {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		if (isBlacklisted(message.author.id)) return;
		let user = message.mentions.users.first() || message.author;
		let data = await db.findOne({
			id: user.id
		})
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			})
		}
		let embed = new MessageEmbed().setColor(serverColor).setThumbnail(user.avatarURL({
			dynamic: true
		})).setTitle(`الرصيد الحالي لـ ${user.tag}`).setDescription(`> $${parseInt(data.coins).toLocaleString()}`)
		if (links[user.id]) {
			const linkedUserId = links[user.id];
			const linkedUserData = await db.findOne({
				id: linkedUserId
			});
			embed.addFields({
				name: "رصيد حسابه البنكي ",
				value: `> $${parseInt(linkedUserData ? linkedUserData.coins : 0).toLocaleString()}`
			});
		}
		embed.setFooter({
			text: message.guild.name
		}).setTimestamp()
		return message.reply({
			embeds: [embed],
			content: `> ${message.author}`
		})
	} else if (message.content == "Rsall" && (message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(rsrole))) {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		clearAllDatabase();
		return message.reply({
			content: `**Done delete all challenges of all**`
		}).catch(() => 0);
	} else if (message.content.split(" ")[0] == "blacklist") {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> لم تقم بتحديد العضو !`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم استطيع العثور على هذا الشخص**`
		});
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (isBlacklisted(user.id)) {
			return message.reply("اللاعب الذي تم تحديده موجود بالقائمة السوداء بالفعل .");
		}
		let embed = new MessageEmbed().setColor(serverColor).setThumbnail(user.avatarURL({
			dynamic: true
		})).setDescription(`تم البلاك لست بنجاح`).addFields({
			name: "بواسطة",
			value: `${message.author}`
		});
		message.reply({
			embeds: [embed]
		});
		addToBlacklist(user.id);
	} else if (message.content.split(" ")[0] == "unblacklist") {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		if (!(message.member.roles.cache.has(ownerrole))) return;
		let args = message.content.split(" ");
		if (args[1] && args[1].toLowerCase() === "all") {
			blacklistedUsers = []
			fs.writeFileSync(path.resolve(__dirname, 'blacklist.json'), JSON.stringify(blacklistedUsers, null, 2));
			return message.reply("**تم إزالة البلاك ليست من جميع اللاعبين بنجاح**✅")
		}
		if (!args[1]) return message.reply({
			content: `> لم تقم بتحديد العضو !`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم استطيع العثور على هذا الشخص**`
		});
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (!isBlacklisted(user.id)) {
			return message.reply("اللاعب المحدد غير موجود في القائمة السوداء.");
		}
		let embed = new MessageEmbed().setColor(serverColor).setThumbnail(user.avatarURL({
			dynamic: true
		})).setDescription(`تم حذف البلاك لست بنجاح`).addFields({
			name: "بواسطة",
			value: `${message.author}`
		});
		message.reply({
			embeds: [embed]
		});
		removeFromBlacklist(user.id);
	} else if (message.content.split(" ")[0] == "تحدي" || message.content.split(" ")[0] == "challenge") {
		if (message.channel.id == GAME_CHANNEL_ID) return;
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no"
			});
		}
		if (isBlacklisted(message.author.id)) return;
		if (!message.guild) return;
		if (message.content.split(" ")[1] == "عام") {
			data.challenge = "general";
			await data.save();
			return message.reply("تم تغيير حالة التحديات لك إلى العام");
		} else if (message.content.split(" ")[1] == "فرندز") {
			data.challenge = "friends";
			await data.save();
			return message.reply("تم تغيير حالة التحديات لك إلى الأصدقاء فقط");
		} else {
			if (!betcateg.includes(message.channel.parentId)) return;
			let data = await db.findOne({
				id: message.author.id
			});
			if (!data) data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: 0
			})
			if (inProgress.has(message.author.id)) return message.reply({
				content: ` **لا يمكنك اللعب ، لأنك مشغول حاليا**`
			});
			if (data.status_playing == "yes") return message.reply({
				content: ` **لا يمكنك اللعب ، لأنك تمتلك تحدي جاري**`
			})
			let args = message.content.split(" ")
			if (!args[1]) return message.reply({
				content: `> **عذراً ولكن يبدو أنك لم تقم بتحديد لاعب حتي تلعب .**`
			})
			let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
			if (!user && args[1] !== "بوت" && args[1].toLowerCase() !== "bot") return message.reply({
				content: `> **عذراً ولكن يبدو أن صديقك ليس بالخادم .!**`
			})
			if (args[1] === "بوت" || args[1].toLowerCase() === "bot") user = client.user
			if (isBlacklisted(user.id)) return;
			let first = args[2]
			if (!first) return message.reply('يرجى تحديد مبلغ رهان.');
			let coinAmount = "";
			if (first == "كامل" || first == "فل") coinAmount = data.coins.toString()
			else if (first == "نصف" || first == "نص") coinAmount = parseInt(data.coins / 2).toString()
			else coinAmount = first.replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
			if (!coinAmount) return message.reply({
				content: `عذراً و لاكن يبدو انك لم تقم بتحديد المبلغ`
			});
			let alpha = first.slice(first.length - 1)
			if (coinAmount < 0) {
				return message.reply("عذراً و لاكن لا يمكنك التحدي بالسالب");
			}
			if (isNaN(coinAmount) || coinAmount < 1) {
				return message.reply("> **أقل مبلغ للتحدي هو 1**");
			}
			if (user.id === client.user.id) {
				if (!betcateg.includes(message.channel.parentId)) return;
				if (message.member.roles.cache.has(borrowedrole)) return message.reply("أنت مستلف, وممنوع عليك اللعب ضد البوت.")
				if (disablebotbet === 1) return message.reply('اللعب ضد البوت غير متاح حاليا')
				if (data.premium == false) return message.reply('البوت لا يتحدى سوى من لديه بريميوم')
				const betAmount = coinAmount;
				let user = message.author;
				if (isNaN(betAmount) || parseInt(betAmount) < 1 || parseInt(betAmount) > 500000) {
					return message.reply(`أقل مبلغ للتحدي ضد البوت هو 1 وأقصى مبلغ هو 500000`);
				}
				if (data.coins < betAmount) {
					return message.reply('ليس لديك رصيد كافي للتحدي.');
				}
				if (inProgress.has(message.author.id)) return message.reply('لا يمكنك بدء تحدي جديد بينما أنت مشغول.');
				if (data.status_playing !== "no") {
					return message.reply('لا يمكنك بدء تحدي جديد بينما لديك تحدي جاري.');
				}
				let embed = new MessageEmbed().setColor(serverColor).setAuthor({
					name: user.tag,
					iconURL: user.displayAvatarURL({
						dynamic: true
					})
				}).setTitle('**> قوم بـ اختيار نوع اللعبة .**').setDescription(`**> المبلغ الذي قمت بتحديده : ${betAmount}**
- لـعبة الـ نرد 🎲 : __*لديك ثلاث محاولات للحصول على أعلى رقم والفوز، التعادل ليس فوزاً.*_
- لـعبة الـ بحث عن الزر 🔍 : __*قم باختيار الزر الصحيح لتفوز.*_
- لـعبة الـ ألـغام 💣 : __*قم باختيار الأزرار الصحيحة ولا تختر الألغام حتى لا تخسر.*_
- لـعبة الـ بلاك جاك <:kb:1368641902034948126> : __*الهدف هو الوصول إلى 21 أو أقل دون تجاوزها*_
- لـعبة الـ روليت الروسية 🔫 : __* يجب عليك أنت والبوت إطلاق الطلقات على أنفسكم وتفادي الطلقة الحقيقية*_`);
				const gameSelectMenu = new MessageSelectMenu().setCustomId(`game_select_${user.id}`).setPlaceholder('اختر لعبة').addOptions([{
					label: 'رمي النرد (الوضع العادي)',
					description: 'لعبة النرد: لديك ثلاث محاولات للحصول على أعلى رقم للفوز',
					value: `dicebuttonnormal_${user.id}`,
					emoji: '🎲'
				}, {
					label: 'رمي النرد (الوضع العكسي)',
					description: 'لعبة النرد: لديك ثلاث محاولات للحصول على أعلى رقم للفوز',
					value: `dicebuttoninverse_${user.id}`,
					emoji: '🎲'
				}, {
					label: 'البحث عن الزر',
					description: 'لعبة البحث عن الزر: اختر الزر الصحيح للفوز',
					value: `searchbutton_${user.id}`,
					emoji: '🔍'
				}, {
					label: 'حجرة ورقة مقص',
					description: 'لعبة حجرة ورقة مقص',
					value: `confirmrps_${user.id}`,
					emoji: '✂️'
				}, {
					label: 'لعبة الألغام',
					description: 'لعبة الألغام: اختر الأزرار الصحيحة دون اختيار الألغام',
					value: `minesweeperbutton_${user.id}`,
					emoji: '💣'
				}, {
					label: 'لعبة بلاك جاك',
					description: 'لعبة بلاك جاك: الهدف هو الوصول إلى 21 أو أقل دون تجاوزها',
					value: `blackjackkbutton_${user.id}`,
					emoji: '<:kb:1368641902034948126>'
				}, {
					label: 'لعبة الروليت الروسية',
					description: 'لعبة الروليت الروسية: يجب عليك أنت والبوت إطلاق الطلقات على أنفسكم وتفادي الطلقة الحقيقية',
					value: `russianroulettebutton_${user.id}`,
					emoji: '🔫'
				}, {
					label: 'إلغاء',
					description: 'إلغاء التحدي',
					value: `cancelbutton_${user.id}`,
					emoji: '❌'
				}]);
				const row = new MessageActionRow().addComponents(gameSelectMenu);
				data.status_playing = "yes";
				data.save();
				let msg = await message.reply({
					embeds: [embed],
					components: [row],
					allowedMentions: {
						repliedUser: true
					},
					content: "** **"
				});
				const filter = i => i.customId === `game_select_${user.id}` && i.user.id === user.id;
				const collector = msg.createMessageComponentCollector({
					filter,
					time: 20000
				});
				collector.on('end', async collected => {
					if (!collected.size) {
						data.status_playing = 'no';
						await data.save();
						await msg.edit({
							content: 'تم إلغاء التحدي بسبب الخمول.',
							components: [],
							embeds: []
						});
					}
				});
				collector.on('collect', async ii => {
					const selectedValue = ii.values[0];
					if (selectedValue.startsWith('dicebuttonnormal')) {
						await ii.deferUpdate();
						embed.setTitle('لعبة النرد ضد البوت').setDescription(`المبلغ: ${betAmount}`).addFields({
							name: 'نتائج اللعبة',
							value: 'انتظر النتائج...'
						});
						let buttonPlay = new MessageButton().setCustomId(`playdice_${user.id}`).setLabel('رمي النرد').setEmoji('🎲').setStyle('SECONDARY');
						let newRow = new MessageActionRow().addComponents(buttonPlay);
						await msg.edit({
							embeds: [embed],
							components: [newRow]
						});
						await game.create({
							id: user.id,
							msgID: msg.id,
							coins: betAmount,
							with: client.user.id,
							game: 'nrd',
							channelID: message.channel.id,
							time: Date.now() + 60000
						});
						data.status_playing = 'yes';
						await data.save();
						let userScore = [];
						let botScore = [];
						let turns = 0;
						const gameFilter = iez => iez.customId === `playdice_${user.id}` && iez.user.id === user.id;
						const gameCollector = msg.createMessageComponentCollector({
							filter: gameFilter,
							time: 60000
						});
						const resetGameTimer = async () => {
							gameCollector.resetTimer();
						};
						const botRoll = () => {
							const rand = Math.random();
							if (rand < 0.25) return Math.floor(Math.random() * 3) + 4;
							return Math.floor(Math.random() * 5) + 2;
						};
						let playable = true
						gameCollector.on('collect', async iii => {
							if (iii.customId === `playdice_${user.id}`) {
								if (playable !== true) return;
								playable = false
								buttonPlay.setDisabled(true);
								await iii.deferUpdate();
								await msg.edit({
									components: [new MessageActionRow().addComponents(buttonPlay)]
								});
								let roll = Math.floor(Math.random() * 6) + 1;
								userScore.push(roll);
								await iii.followUp({
									content: `لقد رميت النرد وحصلت على ${roll}. مجموعك الحالي هو ${userScore.reduce((a, b) => a + b, 0)}.`,
									ephemeral: true
								});
								let botRollValue = botRoll();
								botScore.push(botRollValue);
								turns += 2;
								embed.fields[0].value = `${user.tag}: ${userScore.join(' + ')} = ${userScore.reduce((a, b) => a + b, 0)}\n7lm Casino: ${botScore.join(' + ')} = ${botScore.reduce((a, b) => a + b, 0)}`;
								await msg.edit({
									embeds: [embed]
								});
								if ((userScore.length >= 3 && botScore.length >= 3) || turns >= 6) {
									gameCollector.stop();
								} else {
									await msg.edit({
										components: [new MessageActionRow().addComponents(buttonPlay)]
									});
									setTimeout(() => {
										buttonPlay.setDisabled(false);
										playable = true
										msg.edit({
											components: [new MessageActionRow().addComponents(buttonPlay)]
										});
									}, 2000);
									await resetGameTimer();
								}
							}
						});
						gameCollector.on('end', async collected => {
							let userTotal = userScore.reduce((a, b) => a + b, 0);
							let botTotal = botScore.reduce((a, b) => a + b, 0);
							let resultMessage = '';
							let data = await db.findOne({
								id: message.author.id
							});
							if (collected.size === 0 || userScore.length < 3) {
								resultMessage = `لقد خسرت التحدي بسبب عدم التفاعل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins -= betAmount;
								data.cashback += parseInt(betAmount * 0.02)
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else if (userTotal > botTotal) {
								const winnings = parseInt(betAmount * (1 - BOT_RATE));
								resultMessage = `لقد فزت على البوت! مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins += winnings;
								data.challengesnumber += 1
								data.winnumber += 1
								data.totalwinnings += parseInt(winnings)
							} else if (userTotal < botTotal) {
								resultMessage = `لقد خسرت أمام البوت. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins -= betAmount;
								data.cashback += parseInt(betAmount * 0.02)
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else {
								resultMessage = `انتهى التحدي بالتعادل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.tienumber += 1
								data.challengesnumber += 1
							}
							data.status_playing = 'no';
							await data.save();
							let finalMessage = `${user}\n${userScore.join(' + ')} = ${userTotal}\n${client.user}\n${botScore.join(' + ')} = ${botTotal}\n\n${resultMessage}`;
							await msg.edit({
								content: finalMessage,
								embeds: [],
								components: []
							});
							await game.findOneAndDelete({
								id: user.id
							})
						});
					} else if (selectedValue.startsWith('dicebuttoninverse')) {
						await ii.deferUpdate();
						embed.setTitle('لعبة النرد العكسي ضد البوت').setDescription(`المبلغ: ${betAmount}`).addFields({
							name: 'نتائج اللعبة',
							value: 'انتظر النتائج...'
						});
						let buttonPlay = new MessageButton().setCustomId(`playdice_${user.id}`).setLabel('رمي النرد').setEmoji('🎲').setStyle('SECONDARY');
						let newRow = new MessageActionRow().addComponents(buttonPlay);
						await msg.edit({
							embeds: [embed],
							components: [newRow]
						});
						await game.create({
							id: user.id,
							msgID: msg.id,
							coins: betAmount,
							with: client.user.id,
							game: 'nrd',
							channelID: message.channel.id,
							time: Date.now() + 60000
						});
						data.status_playing = 'yes';
						await data.save();
						let userScore = [];
						let botScore = [];
						let turns = 0;
						const gameFilter = iez => iez.customId === `playdice_${user.id}` && iez.user.id === user.id;
						const gameCollector = msg.createMessageComponentCollector({
							filter: gameFilter,
							time: 60000
						});
						const resetGameTimer = async () => {
							gameCollector.resetTimer();
						};
						const botRoll = () => {
							const rand = Math.random();
							if (rand < 0.45) return Math.floor(Math.random() * 2) + 5;
							return Math.floor(Math.random() * 4) + 1;
						};
						let playable = true
						gameCollector.on('collect', async iii => {
							if (iii.customId === `playdice_${user.id}`) {
								if (playable !== true) return;
								playable = false
								buttonPlay.setDisabled(true);
								await iii.deferUpdate();
								await msg.edit({
									components: [new MessageActionRow().addComponents(buttonPlay)]
								});
								let roll = botRoll();
								userScore.push(roll);
								await iii.followUp({
									content: `لقد رميت النرد وحصلت على ${roll}. مجموعك الحالي هو ${userScore.reduce((a, b) => a + b, 0)}.`,
									ephemeral: true
								});
								let botRollValue = Math.floor(Math.random() * 6) + 1;
								botScore.push(botRollValue);
								turns += 2;
								embed.fields[0].value = `${user.tag}: ${userScore.join(' + ')} = ${userScore.reduce((a, b) => a + b, 0)}\n7lm Casino: ${botScore.join(' + ')} = ${botScore.reduce((a, b) => a + b, 0)}`;
								await msg.edit({
									embeds: [embed]
								});
								if ((userScore.length >= 3 && botScore.length >= 3) || turns >= 6) {
									gameCollector.stop();
								} else {
									await msg.edit({
										components: [new MessageActionRow().addComponents(buttonPlay)]
									});
									setTimeout(() => {
										buttonPlay.setDisabled(false);
										playable = true
										msg.edit({
											components: [new MessageActionRow().addComponents(buttonPlay)]
										});
									}, 2000);
									await resetGameTimer();
								}
							}
						});
						gameCollector.on('end', async collected => {
							let userTotal = userScore.reduce((a, b) => a + b, 0);
							let botTotal = botScore.reduce((a, b) => a + b, 0);
							let resultMessage = '';
							let data = await db.findOne({
								id: message.author.id
							});
							if (collected.size === 0 || userScore.length < 3) {
								resultMessage = `لقد خسرت التحدي بسبب عدم التفاعل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins -= betAmount;
								data.cashback += parseInt(betAmount * 0.02)
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else if (userTotal < botTotal) {
								const winnings = parseInt(betAmount * (1 - BOT_RATE));
								resultMessage = `لقد فزت على البوت! مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins += winnings;
								data.challengesnumber += 1
								data.winnumber += 1
								data.totalwinnings += parseInt(winnings)
							} else if (userTotal > botTotal) {
								resultMessage = `لقد خسرت أمام البوت. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.coins -= betAmount;
								data.cashback += parseInt(betAmount * 0.02)
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else {
								resultMessage = `انتهى التحدي بالتعادل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
								data.tienumber += 1
								data.challengesnumber += 1
							}
							data.status_playing = 'no';
							await data.save();
							let finalMessage = `${user}\n${userScore.join(' + ')} = ${userTotal}\n${client.user}\n${botScore.join(' + ')} = ${botTotal}\n\n${resultMessage}`;
							await msg.edit({
								content: finalMessage,
								embeds: [],
								components: []
							});
							await game.findOneAndDelete({
								id: user.id
							})
						});
					} else if (selectedValue.startsWith('confirmrps')) {
						await ii.deferUpdate();
						let opponent = client.user
						const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('حجرة').setLabel('🪨 حجرة').setStyle('PRIMARY'), new MessageButton().setCustomId('ورقة').setLabel('📄 ورقة').setStyle('PRIMARY'), new MessageButton().setCustomId('مقص').setLabel('✂️ مقص').setStyle('PRIMARY'),);
						const embed = new MessageEmbed().setTitle('حجرة ورقة مقص').setDescription(`${message.author.username} vs ${opponent.username}\n\nالعب!`).setColor(serverColor);
						let msg = ii.message;
						await msg.edit({
							embeds: [embed],
							components: [row]
						});
						const filter = (interactionn) => {
							return interactionn.user.id === message.author.id;
						};
						const collector = msg.createMessageComponentCollector({
							filter,
							time: 15000
						});
						collector.on('collect', async (interactionv) => {
							collector.stop();
							const userChoice = interactionv.customId;
							let botChoice;
							const choices = ['حجرة', 'ورقة', 'مقص'];
							botChoice = choices[Math.floor(Math.random() * choices.length)];
							const result = determineWinner(userChoice, botChoice);
							await interactionv.message.edit({
								content: interactionv.message.content + `\nلقد اخترت ${userChoice}\nالبوت اختار ${botChoice}`,
								components: []
							})
							if (result === 'draw') {
								data3 = await db.findOne({
									id: message.author.id
								})
								data3.challengesnumber += 1
								data3.tienumber += 1
								data3.status_playing = "no";
								await data3.save();
								return interactionv.message.edit({
									content: interactionv.message.content + `\nتعادل! لا أحد ربح أو خسر أي قرش.`,
									components: []
								});
							} else {
								const winner = result === 'author' ? message.author : opponent;
								const loser = result === 'author' ? opponent : message.author;
								if (result === 'author') {
									data3 = await db.findOne({
										id: message.author.id
									})
									data3.coins += parseInt(betAmount * (1 - BOT_RATE));
									data3.challengesnumber += 1
									data3.winnumber += 1
									data3.totalwinnings += parseInt(betAmount)
									data3.status_playing = "no";
									await data3.save();
								} else {
									data3 = await db.findOne({
										id: message.author.id
									})
									data3.coins -= parseInt(betAmount);
									data3.cashback += parseInt(betAmount * 0.02);
									data3.challengesnumber += 1
									data3.losenumber += 1
									data3.totallost += parseInt(betAmount)
									data3.status_playing = "no"
									await data3.save();
								}
								return interactionv.message.edit({
									content: interactionv.message.content + `\n${winner.username} ربح اللعبة وفاز ب ${betAmount}!`,
									components: []
								});
							}
						});
						collector.on('end', async (collected, reason) => {
							if (reason === 'time') {
								msg.edit({
									content: 'Game cancelled due to inactivity.',
									components: []
								});
							}
							data32 = await db.findOne({
								id: message.author.id
							})
							data32.status_playing = "no"
							await data32.save();
						});
					} else if (selectedValue.startsWith('cancelbutton')) {
						collector.stop();
						data.status_playing = 'no';
						await data.save();
						await ii.reply({
							content: 'تم إلغاء التحدي.',
							ephemeral: true
						})
						try {
							ii.message.delete();
						} catch { }
					} else if (selectedValue.startsWith('minesweeperbutton')) {
						await ii.deferUpdate();
						let buttons = [];
						let correctButtons = new Set();
						while (correctButtons.size < 8) {
							correctButtons.add(Math.floor(Math.random() * 16));
						}
						for (let j = 0; j < 16; j++) {
							let button = new MessageButton().setCustomId(`minesweeperbutton_${user.id}_${j}`).setEmoji(hiddenemoji).setStyle('PRIMARY').setDisabled(false);
							buttons.push(button);
						}
						let rows = [];
						for (let k = 0; k < 4; k++) {
							let row = new MessageActionRow();
							row.addComponents(buttons.slice(k * 4, (k + 1) * 4));
							rows.push(row);
						}
						embed.setTitle('لعبة الألغام').setDescription(`المبلغ: ${betAmount}`).addFields({
							name: 'نتائج اللعبة',
							value: 'انتظر النتائج...'
						});
						await msg.edit({
							embeds: [embed],
							components: rows
						});
						let userScore = 0;
						let botScore = 0;
						let userTurn = true;
						const gameFilter = (iz) => iz.customId.startsWith(`minesweeperbutton_${user.id}`) && iz.user.id === user.id;
						const gameCollector = msg.createMessageComponentCollector({
							filter: gameFilter,
							time: 60000
						});
						const resetTimer = () => {
							clearTimeout(gameCollector.idleTimeout);
							gameCollector.resetTimer({
								time: 60000
							});
						};
						gameCollector.on('collect', async (iee) => {
							if (userTurn) {
								resetTimer();
								await iee.deferUpdate();
								let buttonIndex = parseInt(iee.customId.split('_')[2]);
								if (correctButtons.has(buttonIndex)) {
									buttons[buttonIndex].setStyle('SUCCESS').setEmoji(crownemoji).setDisabled(true);
									userScore++;
								} else {
									buttons[buttonIndex].setStyle('DANGER').setEmoji(psychemoji).setDisabled(true);
									userScore--;
								}
								for (let k = 0; k < 4; k++) {
									rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
								}
								await msg.edit({
									components: rows
								});
								embed.fields[0].value = `${user.tag}: ${userScore}
			7lm Bot: ${botScore}`;
								await msg.edit({
									embeds: [embed]
								});
								if (buttons.every(button => button.disabled)) {
									await gameCollector.stop('end');
									return;
								} else if (userTurn) {
									userTurn = false;
									setTimeout(async () => {
										let botMove;
										const enabledCorrectButtons = Array.from(correctButtons).filter(index => !buttons[index].disabled);
										if (Math.random() < 0.2 && enabledCorrectButtons.length > 0) {
											botMove = Array.from(correctButtons).find(index => !buttons[index].disabled);
										} else {
											do {
												botMove = Math.floor(Math.random() * 16);
											} while (buttons[botMove].disabled);
										}
										if (correctButtons.has(botMove)) {
											buttons[botMove].setStyle('SUCCESS').setEmoji(crownemoji).setDisabled(true);
											botScore++;
										} else {
											buttons[botMove].setStyle('DANGER').setEmoji(psychemoji).setDisabled(true);
											botScore--;
										}
										for (let k = 0; k < 4; k++) {
											rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
										}
										await msg.edit({
											components: rows
										});
										userTurn = true;
										gameCollector.resetTimer();
										embed.fields[0].value = `${user.tag}: ${userScore}
			7lm Bot: ${botScore}`;
										await msg.edit({
											embeds: [embed]
										});
										if (buttons.every(button => button.disabled)) {
											await gameCollector.stop('end');
											return;
										}
									}, 2000);
								}
							} else iee.reply({
								content: `**إنه ليس دورك**`,
								ephemeral: true
							})
						});
						gameCollector.on('end', async (collected, reason) => {
							let resultMessage = 'انتهى التحدي بالتعادل. لم يتم خصم أي مبلغ.';
							if (reason === 'time') {
								resultMessage = 'لقد خسرت التحدي بسبب الخمول.';
								data.coins = parseInt(data.coins) - betAmount;
								data.cashback += parseInt(betAmount * 0.02);
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else if (userScore > botScore) {
								resultMessage = 'لقد فزت بالتحدي!';
								const winnings = betAmount * (1 - BOT_RATE);
								data.coins += parseInt(winnings);
								data.challengesnumber += 1
								data.winnumber += 1
								data.totalwinnings += parseInt(betAmount)
							} else if (userScore < botScore) {
								resultMessage = 'لقد خسرت التحدي.';
								data.coins = parseInt(data.coins) - betAmount;
								data.cashback += parseInt(betAmount * 0.02);
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else {
								data.challengesnumber += 1
								data.tienumber += 1
							}
							buttons.forEach(button => button.setDisabled(true));
							for (let k = 0; k < 4; k++) {
								rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
							}
							embed.fields[0].value = resultMessage;
							await msg.edit({
								embeds: [embed],
								components: rows
							});
							data.status_playing = 'no';
							await data.save();
						});
					} else if (selectedValue.startsWith('searchbutton')) {
						await ii.deferUpdate();
						let buttons = [];
						let winningButton = Math.floor(Math.random() * 16);
						for (let j = 0; j < 16; j++) {
							let button = new MessageButton().setCustomId(`gamebutton_${user.id}_${j}`).setEmoji(hiddenemoji).setStyle('PRIMARY').setDisabled(false);
							buttons.push(button);
						}
						let rows = [];
						for (let k = 0; k < 4; k++) {
							let row = new MessageActionRow();
							row.addComponents(buttons.slice(k * 4, (k + 1) * 4));
							rows.push(row);
						}
						embed.setTitle('لعبة البحث عن الزر').setDescription(`المبلغ: ${betAmount}`).addFields({
							name: 'نتائج اللعبة',
							value: 'انتظر النتائج...'
						});
						await msg.edit({
							embeds: [embed],
							components: rows
						});
						let userTurn = true;
						const gameFilter = (ei) => ei.customId.startsWith(`gamebutton_${user.id}`) && ei.user.id === user.id;
						const gameCollector = msg.createMessageComponentCollector({
							filter: gameFilter,
							time: 60000
						});
						const resetTimer = () => {
							clearTimeout(gameCollector.idleTimeout);
							gameCollector.resetTimer({
								time: 60000
							});
						};
						gameCollector.on('collect', async (iiii) => {
							if (userTurn) {
								resetTimer();
								await iiii.deferUpdate();
								let buttonIndex = parseInt(iiii.customId.split('_')[2]);

								// Disable all buttons temporarily (prevent spam clicks)
								buttons.forEach(b => b.setDisabled(true));
								for (let k = 0; k < 4; k++) {
									rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
								}
								if (buttonIndex === winningButton) {
									buttons[buttonIndex].setStyle('SUCCESS').setEmoji(crownemoji).setDisabled(true);
									await gameCollector.stop('user_won');
									return;
								} else {
									buttons[buttonIndex].setStyle('DANGER').setEmoji(psychemoji).setDisabled(true);
								}
								await msg.edit({ components: rows });
								// ✅ Wait 1 second before re-enabling all *non-clicked and non-winning* buttons
								setTimeout(async () => {
									buttons.forEach((b, idx) => {
										// Only re-enable buttons that are NOT the clicked or already revealed ones
										if (idx !== buttonIndex && b.style === 'PRIMARY') {
											b.setDisabled(false);
										}
									});
									for (let k = 0; k < 4; k++) {
										rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
									}

									// Proceed with bot turn
									userTurn = false;
									let botMove;
									if (Math.random() < 0.15) {
										botMove = winningButton;
									} else {
										do {
											botMove = Math.floor(Math.random() * 16);
										} while (buttons[botMove].disabled);
									}

									if (botMove === winningButton) {
										buttons[botMove].setStyle('SUCCESS').setEmoji(crownemoji).setDisabled(true);
										await gameCollector.stop('bot_won');
										return;
									} else {
										buttons[botMove].setStyle('DANGER').setEmoji(psychemoji).setDisabled(true);
									}

									for (let k = 0; k < 4; k++) {
										rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
									}
									await msg.edit({ components: rows });
									userTurn = true;

								}, 1000);
							} else {
								iiii.reply({
									content: `**إنه ليس دورك**`,
									ephemeral: true
								});
							}
						});

						gameCollector.on('end', async (collected, reason) => {
							let resultMessage = '';
							if (reason === 'user_won') {
								resultMessage = 'لقد فزت بالتحدي!';
								const winnings = betAmount * (1 - BOT_RATE);
								data.coins += parseInt(winnings);
								data.challengesnumber += 1
								data.winnumber += 1
								data.totalwinnings += parseInt(betAmount)
							} else if (reason === 'bot_won') {
								resultMessage = 'لقد خسرت التحدي.';
								data.coins = parseInt(data.coins - betAmount);
								data.cashback += parseInt(betAmount * 0.02);
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else if (reason === 'idle') {
								resultMessage = 'لقد خسرت التحدي بسبب عدم التفاعل.';
								data.coins = parseInt(data.coins - betAmount);
								data.cashback += parseInt(betAmount * 0.02);
								data.challengesnumber += 1
								data.losenumber += 1
								data.totallost += parseInt(betAmount)
							} else {
								resultMessage = 'انتهى التحدي بالتعادل. لم يتم خصم أي مبلغ.';
								data.challengesnumber += 1
								data.tienumber += 1
							}
							await data.save();
							buttons.forEach(button => button.setDisabled(true));
							for (let k = 0; k < 4; k++) {
								rows[k] = new MessageActionRow().addComponents(buttons.slice(k * 4, (k + 1) * 4));
							}
							embed.fields[0].value = resultMessage;
							await msg.edit({
								embeds: [embed],
								components: rows
							});
							data.status_playing = 'no';
							await data.save();
						});
					} else if (selectedValue.startsWith('blackjackkbutton')) {
						await ii.deferUpdate();
						const userId = message.author.id;
						let player = await db.findOne({
							id: userId
						});
						if (!player) player = await db.create({
							id: userId
						});
						player.status_playing = "yes";
						await player.save();
						let playerHand = getInitialHand();
						let botHand = getInitialHand();
						if (calcTotal(playerHand) === 21 && calcTotal(playerHand) !== calcTotal(botHand)) {
							const playerTotal = calcTotal(playerHand);
							let botTotal = calcTotal(botHand);
							let resultMessage = "";
							let color = "#FF0000";
							let winner = "player";
							resultMessage = `${message.author.username} لقد فزت على البوت بمبلغ ${betAmount.toLocaleString()}!`;
							color = "#00FF00";
							player.totalwinnings += parseInt(betAmount * (1 - BOT_RATE));
							player.challengesnumber += 1;
							player.winnumber += 1
							player.coins += parseInt(betAmount * (1 - BOT_RATE));
							player.status_playing = "no";
							await player.save();
							const finalEmbed = new MessageEmbed().setTitle("نتيجة اللعبة").setColor(color).setDescription(resultMessage).addFields({
								name: `${message.author.username} (المجموع: ${playerTotal})`,
								value: `${displayHand(playerHand)}`,
								inline: false
							}, {
								name: `البوت (المجموع: ${botTotal})`,
								value: `${displayHand(botHand)}`,
								inline: false
							});
							await new Promise(resolve => setTimeout(resolve, 500));
							await ii.message.edit({
								embeds: [finalEmbed],
								components: []
							});
							const logEmbed = new MessageEmbed().setTitle("تقرير بلاك جاك").setColor(color).setDescription(`**<@${message.author.id}> , ${winner === 'player' ? 'فاز' : winner === 'bot' ? 'خسر' : 'تعادل'} في لعبة بلاك جاك بمبلغ ${betAmount.toLocaleString()} 🃏**`).addFields({
								name: "لاعب",
								value: `${message.author.username} (${playerTotal})`,
								inline: false
							}, {
								name: "البوت",
								value: `${botTotal}`,
								inline: false
							});
							const logChannel = client.channels.cache.get(logsall);
							if (logChannel) logChannel.send({
								embeds: [logEmbed]
							});
							return;
						};
						if (calcTotal(playerHand) === 21) {
							const playerTotal = calcTotal(playerHand);
							let botTotal = calcTotal(botHand);
							let winner = null
							let resultMessage = "";
							let color = "#FF0000";
							resultMessage = `التعادل! لم يربح أحد.`;
							color = "#F2C744";
							player.status_playing = "no";
							await player.save();
							const finalEmbed = new MessageEmbed().setTitle("نتيجة اللعبة").setColor(color).setDescription(resultMessage).addFields({
								name: `${message.author.username} (المجموع: ${playerTotal})`,
								value: `${displayHand(playerHand)}`,
								inline: false
							}, {
								name: `البوت (المجموع: ${botTotal})`,
								value: `${displayHand(botHand)}`,
								inline: false
							});
							await new Promise(resolve => setTimeout(resolve, 500));
							await ii.message.edit({
								embeds: [finalEmbed],
								components: []
							});
							const logEmbed = new MessageEmbed().setTitle("تقرير بلاك جاك").setColor(color).setDescription(`**<@${message.author.id}> , ${winner === 'player' ? 'فاز' : winner === 'bot' ? 'خسر' : 'تعادل'} في لعبة بلاك جاك بمبلغ ${betAmount.toLocaleString()} 🃏**`).addFields({
								name: "لاعب",
								value: `${message.author.username} (${playerTotal})`,
								inline: false
							}, {
								name: "البوت",
								value: `${botTotal}`,
								inline: false
							});
							const logChannel = client.channels.cache.get(logsall);
							if (logChannel) logChannel.send({
								embeds: [logEmbed]
							});
							return;
						}
						let row = new MessageActionRow().addComponents(new MessageButton().setCustomId('hit').setLabel('سحب ورقة').setStyle('SUCCESS'), new MessageButton().setCustomId('stand').setLabel('إنهاء').setStyle('PRIMARY'))
						const embed = new MessageEmbed().setTitle("بلاك جاك - Blackjack").setColor(serverColor).setDescription(`المبلغ: **${betAmount.toLocaleString()}**\nدورك الآن.`).addFields({
							name: `${message.author.username} (المجموع: ${calcTotal(playerHand)})`,
							value: `${displayHand(playerHand)}`,
							inline: false
						}, {
							name: `البوت (المجموع: ??)`,
							value: `??`,
							inline: false
						});
						let gameMessage = await ii.message.edit({
							embeds: [embed],
							components: [row]
						});
						const collector = gameMessage.createMessageComponentCollector({
							componentType: 'BUTTON',
							time: 90000
						});
						collector.on('collect', async interaction => {
							if (interaction.user.id !== userId) return interaction.reply({
								content: 'هذا الزر ليس لك.',
								ephemeral: true
							});
							await interaction.deferUpdate();
							if (interaction.customId === 'hit') {
								playerHand.push(getRandomCard());
								const updatedEmbed = new MessageEmbed().setTitle("بلاك جاك - Blackjack").setColor(serverColor).setDescription(`المبلغ: **${betAmount.toLocaleString()}**\nدورك الآن.`).addFields({
									name: `${message.author.username} (المجموع: ${calcTotal(playerHand)})`,
									value: `${displayHand(playerHand)}`,
									inline: false
								}, {
									name: `البوت (المجموع: ??)`,
									value: `??`,
									inline: false
								});
								await gameMessage.edit({
									embeds: [updatedEmbed],
									components: [row]
								});
								const total = calcTotal(playerHand);
								if (total > 21) collector.stop('lose');
								else if (total === 21) collector.stop('win');
							}
							if (interaction.customId === 'stand') {
								collector.stop('stand');
							}
						});
						collector.on('end', async (_, reason) => {
							const playerTotal = calcTotal(playerHand);
							let botTotal = calcTotal(botHand);
							let winner = null;
							if (reason === 'time') {
								const msg = `بسبب الخمول، لقد فاز البوت على ${message.author.username} بمبلغ ${betAmount.toLocaleString()}!`;
								player.coins -= betAmount;
								player.status_playing = "no";
								player.cashback += parseInt(betAmount * 0.02);
								await player.save();
								await gameMessage.edit({
									content: msg,
									embeds: [],
									components: []
								});
								return;
							} else if (reason === 'win') {
								winner = "player";
							} else if (playerTotal > 21) {
								winner = "bot";
							} else if (reason === "lose") {
								winner = "bot"
							} else {
								if (Math.random() * 100 < BOT_TRICK_PERCENTAGE) {
									const botCanWin = await tryMakeBotWin(playerTotal, botHand);
									if (botCanWin) botTotal = calcTotal(botHand);
								} else if (playerTotal > botTotal)
									do {
										botHand.push(getRandomCard());
										botTotal = calcTotal(botHand);
									} while (playerTotal > botTotal);
								if (botTotal == playerTotal) {
									winner = "draw";
								} else if (botTotal > 21) {
									winner = "player";
								} else if (botTotal == 21) {
									winner = "bot";
								} else if (botTotal < 21 && botTotal > playerTotal) {
									winner = "bot";
								} else if (playerTotal < 21 && playerTotal > botTotal) {
									winner = "player";
								}
							}
							let resultMessage = "";
							let color = "#FF0000";
							if (winner === "player") {
								resultMessage = `${message.author.username} لقد فزت على البوت بمبلغ ${betAmount.toLocaleString()}!`;
								color = "#00FF00";
								player.totalwinnings += parseInt(betAmount * (1 - BOT_RATE));
								player.challengesnumber += 1;
								player.winnumber += 1
								player.coins += parseInt(betAmount * (1 - BOT_RATE));
							} else if (winner === "bot") {
								resultMessage = `${message.author.username} لقد خسرت ضد البوت بمبلغ ${betAmount.toLocaleString()}!`;
								color = "#FF0000";
								player.coins -= betAmount;
								player.totallost = parseInt(parseInt(player.totallost) + parseInt(betAmount));
								player.challengesnumber += 1;
								player.losenumber += 1
								player.cashback += parseInt(betAmount * 0.02);
							} else {
								resultMessage = `التعادل! لم يربح أحد.`;
								color = "#F2C744";
							}
							player.status_playing = "no";
							await player.save();
							const finalEmbed = new MessageEmbed().setTitle("نتيجة اللعبة").setColor(color).setDescription(resultMessage).addFields({
								name: `${message.author.username} (المجموع: ${playerTotal})`,
								value: `${displayHand(playerHand)}`,
								inline: false
							}, {
								name: `البوت (المجموع: ${botTotal})`,
								value: `${displayHand(botHand)}`,
								inline: false
							});
							await gameMessage.edit({
								embeds: [finalEmbed],
								components: []
							});
							const logEmbed = new MessageEmbed().setTitle("تقرير بلاك جاك").setColor(color).setDescription(`**<@${message.author.id}> , ${winner === 'player' ? 'فاز' : winner === 'bot' ? 'خسر' : 'تعادل'} في لعبة بلاك جاك بمبلغ ${betAmount.toLocaleString()} 🃏**`).addFields({
								name: "لاعب",
								value: `${message.author.username} (${playerTotal})`,
								inline: false
							}, {
								name: "البوت",
								value: `${botTotal}`,
								inline: false
							});
							const logChannel = client.channels.cache.get(logsall);
							if (logChannel) logChannel.send({
								embeds: [logEmbed]
							});
						});
					} else if (selectedValue.startsWith('russianroulettebutton')) {
						await ii.deferUpdate();
						const betAmount = parseInt(coinAmount);
						const userId = message.author.id;
						let player = await db.findOne({
							id: userId
						});
						if (!player) player = await db.create({
							id: userId,
							coins: 0,
							status_playing: "no"
						});
						let turn = 0;
						let isPlayerTurn = true;
						let bulletPosition = Math.floor(Math.random() * TOTAL_BULLETS);
						const tricked = Math.random() * 100 < BOT_TRICK_ROULETTE;
						if (tricked == true && bulletPosition % 2 == 1) {
							bulletPosition -= 1
						}
						const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('shoot').setLabel('إطلاق النار').setStyle('DANGER'));
						const embed = new MessageEmbed().setTitle("روليت الروسي - Russian Roulette").setColor(serverColor).setDescription(`المبلغ: **${betAmount.toLocaleString()}**\n` + `الطلقات المتبقية: **${TOTAL_BULLETS - turn}/${TOTAL_BULLETS}**\n` + `الدور: <@${userId}>`).setFooter({
							text: "7lm Casino"
						});
						const gameMessage = await ii.message.edit({
							embeds: [embed],
							components: [row]
						});
						const filter = i => i.customId === 'shoot' && i.user.id === userId;
						const collector = gameMessage.createMessageComponentCollector({
							filter,
							time: 90000
						});
						const endGame = async (result) => {
							player.status_playing = "no";
							await player.save();
							const resultEmbed = new MessageEmbed().setTitle(`**${result === 'win' ? 'فوز' : 'خسارة'}**`).setDescription(`> **اللاعب**: ${message.author}\n` + `> **المبلغ**: ${betAmount.toLocaleString()}`).setColor(result === 'win' ? "#2ECC71" : "#FF0000").setFooter({
								text: "7lm Casino"
							});
							await gameMessage.edit({
								embeds: [resultEmbed],
								components: []
							});
							collector.stop();
						};
						const botTurn = async () => {
							const hit = turn === bulletPosition;
							if (hit) {
								const winAmount = betAmount;
								const tax = Math.floor(winAmount * 0.10);
								player.coins += winAmount - tax;
								player.totalwinnings += winAmount - tax;
								player.challengesnumber += 1;
								player.winnumber += 1
								await endGame('win');
							} else {
								turn++;
								isPlayerTurn = true;
								embed.setDescription(`المبلغ: **${betAmount.toLocaleString()}**\n` + `الطلقات المتبقية: **${TOTAL_BULLETS - turn}/${TOTAL_BULLETS}**\n` + `الدور: <@${userId}>`);
								await gameMessage.edit({
									embeds: [embed],
									components: [row]
								});
							}
						};
						collector.on('collect', async interaction => {
							if (!isPlayerTurn) return interaction.deferUpdate();
							const hit = turn === bulletPosition;
							if (hit) {
								player.coins -= betAmount;
								player.totallost += parseInt(betAmount);
								player.challengesnumber += 1;
								player.losenumber += 1;
								player.cashback += parseInt(betAmount * 0.02);
								await endGame('lose');
							} else {
								turn++;
								isPlayerTurn = false;
								embed.setDescription(`المبلغ: **${betAmount.toLocaleString()}**\n` + `الطلقات المتبقية: **${TOTAL_BULLETS - turn}/${TOTAL_BULLETS}**\n` + `الدور: البوت...`);
								await interaction.update({
									embeds: [embed],
									components: []
								});
								setTimeout(botTurn, 1000);
							}
						});
						collector.on('end', async (_, reason) => {
							if (reason === 'time' && player.status_playing === "yes") {
								player.coins -= betAmount;
								player.totallost += parseInt(betAmount);
								player.challengesnumber += 1;
								player.losenumber += 1;
								player.cashback += parseInt(betAmount * 0.02);
								player.status_playing = "no";
								await player.save();
								embed.setDescription(`${message.author.username} خسرت بسبب الخمول\n` + `تم خصم: **${betAmount.toLocaleString()}**`);
								await gameMessage.edit({
									embeds: [embed],
									components: []
								});
							}
						});
					}
				});
				return;
			}
			if (user.id == message.author.id) return message.reply({
				content: ` **لا يمكنك اللعب ضد نفسك**`
			})
			if (!args[2]) return message.reply({
				content: `> **عذراً ولكن يبدو أنك لم تقم بتحديد مبلغ للعب .**`
			})
			let data2 = await db.findOne({
				id: user.id
			})
			if (!data2) {
				data2 = await db.create({
					id: user.id,
					coins: 0,
					status_playing: "no"
				})
			}
			if (data.blocked.includes(user.id) || data2.blocked.includes(message.author.id)) return message.reply("**لا يمكنك اللعب ضد هذا اللاعب: أحدكما مسوي بلوك للثاني**")
			if (data.challenge == "friends" || data2.challenge == "friends") {
				if (!data.friends.includes(user.id) || !data2.friends.includes(message.author.id)) return message.reply("**لا يمكنك اللعب ضد هذا اللاعب لأن أحدكما مفعل خاصية فرند وأنتما لستما أصدقاء**")
			}
			if (inProgress.has(user.id)) return message.reply({
				content: `> العضو مشغول حاليا !`
			});
			if (data2.status_playing == "yes") return message.reply({
				content: `> العضو يمتلك تحدي جاري حاليا !`
			})
			if ((parseInt(data.coins) < coinAmount) && ((parseInt(data2.coins) < coinAmount))) return message.reply({
				content: `\`❎\` **ليس لديك ما يكفي انت وصديقك للتحدي على ${coinAmount}**`
			})
			if (parseInt(data.coins) < coinAmount) return message.reply({
				content: `\`❎\` **ليس لديك ما يكفي للتحدي على ${coinAmount}**`
			})
			if (parseInt(data2.coins) < coinAmount) return message.reply({
				content: `\`❎\` **ليس لدى صديقك ما يكفي للتحدي على ${coinAmount}**`
			})
			let embed = new MessageEmbed().setColor(serverColor).setAuthor({
				name: message.author.tag,
				iconURL: message.author.displayAvatarURL({
					dynamic: true
				})
			}).setTitle("اختار نوع اللعبة").setDescription(`> العضو: ${user}\n\nالمبلغ: \`${coinAmount}\``).addFields({
				name: `- لـعبة الـ زهر  🎲 `,
				value: `*لديك ثلاث محاولات للحصول عـلي أعلي رقم و الفوز ، التعآدل ليس فوزاً .!*`
			}, {
				name: `- لـعبة الـ تقريبي 📊 `,
				value: `> *سيظهر لك ارقام عشوائيه و يجب عليك اختيار بين اقل نتيجه او اكبر نتيجه , للحصول علي الحد الاقصي او اقرب رقم له , قد يكون الحظ حليفك او لا . التعادل ليس فوزا .!*`
			}, {
				name: `- لـعبة الـ بحث عن الزر 🔘 `,
				value: `*قم باختيار الزر الصحيح للفوز.!*`
			}, {
				name: `- لـعبة الـ أكس أو ❌`,
				value: `> *يفوز الذي يحصل على خط مستقيم طوله 3 مربعات, التعادل ليس فوزا.!*`
			}, {
				name: `- لـعبة الـ ألغام 💣`,
				value: `> *قم باختيار الأزرار الصحيحة ولا تختر الألغام حتى لا تخسر.!*`
			}, {
				name: `- لـعبة الـ حجرة ورقة مقص ✂️`,
				value: `> *هنهزر يسطا ؟ مش عارف حجره ورقه مقص ؟*`
			});
			let gameSelect = new MessageSelectMenu().setCustomId(`game_select_${message.author.id}`).setPlaceholder("اختر لعبة").addOptions([{
				label: "النرد",
				description: "لعبة الـ زهر 🎲",
				value: `nrd_${message.author.id}`,
				emoji: "🎲"
			}, {
				label: "الرقم التقريبي (بدون شروط)",
				description: "لعبة الرقم التقريبي 📊",
				value: `takribi_${message.author.id}`,
				emoji: "📊"
			}, {
				label: "الرقم التقريبي (بشروط)",
				description: "لعبة الرقم التقريبي 📊 بس بالشروط",
				value: `takribicondss_${message.author.id}`,
				emoji: "📊"
			}, {
				label: "البحث عن الزر",
				description: "لعبة البحث عن الزر 🔘",
				value: `tartib_${message.author.id}`,
				emoji: "🔘"
			}, {
				label: "X O",
				description: "لعبة X O ❌",
				value: `xo_${message.author.id}`,
				emoji: "❌"
			}, {
				label: "الألغام",
				description: "لعبة الألغام 💣",
				value: `mines_${message.author.id}`,
				emoji: "💣"
			}, {
				label: "حجرة ورقة مقص",
				description: "لعبة حجرة ورقة مقص ✂️",
				value: `rps_${message.author.id}`,
				emoji: "✂️"
			}, {
				label: "إلغاء",
				description: "إلغاء التحدي",
				value: `cancel_${message.author.id}`,
				emoji: "❌"
			}]);
			let row = new MessageActionRow().addComponents(gameSelect);
			data2.status_playing = "yes";
			data2.save();
			data.status_playing = "yes";
			data.save();
			let gameee = await game.findOne({
				id: message.author.id
			});
			let msg = await message.reply({
				embeds: [embed],
				components: [row],
				allowedMentions: {
					repliedUser: false
				},
				content: "** **"
			})
			if (!gameee) {
				await game.create({
					id: message.author.id,
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now())
				});
			} else {
				await game.findOneAndUpdate({
					id: message.author.id
				}, {
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now())
				});
			}

		}
	} else if (message.content.toLowerCase() === 'العاب') {
		let embed = new MessageEmbed().setColor(serverColor).setTitle('ألعاب البوت').setDescription('**هذه قائمة بألعاب البوت المتاحة:**').addFields({
			name: `لعبة النرد 🎲`,
			value: `> **__يفوز الذي يحصل على أعلى مجموع من ثلاث مرات, التعادل ليس فوزا !__**`
		}, {
			name: `الرقم التقريبي 📊`,
			value: `> **__في كل جولة سوف تحصل على رقم عشوائي, و انت عليك ان تحصل على نفس الرقم او اقل منه, الذي يحصل عليه يفوز, في حال الحصول على اعلى تعتبر خاسر, جولة واحدة لكل تحدي ! انهاء الجولة يعني انهاء التحدي, التعادل ليس فوزا !__**`
		}, {
			name: `لعبة البحث عن الزر 🔘`,
			value: `> **__قم باختيار الزر الصحيح للفوز.!__**`
		}, {
			name: `لعبة ال أكس أو ❌`,
			value: `> **__لعبة إكس-أو (Tic-Tac-Toe) هي لعبة تعتمد على التنافس بين لاعبين، وكل لاعب يحاول الفوز بوضع رموزه في ثلاثة مربعات متتالية. الهدف هو أن يكون لديك خط مستقيم مكون من ثلاث مربعات متتالية، سواء كان هذا الخط أفقيًا أو عموديًا أو قطريًا__**`
		}, {
			name: `لعبة الالغام 💣`,
			value: `> **__اختر الأزرار بحذر! حاول اكتشاف الأزرار الصحيحة وتجنب الألغام. إذا اخترت لغماً، ستخسر اللعبة! احرص على اختيار الأزرار بعناية، فكل قرار قد يكون حاسمًا__**`
		}, {
			name: `بلاك جاك 🃏`,
			value: `> **__طريقة لعب بلاك جاك:__**\n\n> __في هذه اللعبة، عليك أن تحصل على ورقتين وتجمع قيمتهما. يمكنك سحب ورقة إضافية أو التوقف. الهدف هو الوصول إلى 21 أو أقل دون تجاوزها. إذا حصلت على مجموع 21 من أول ورقتين، تعتبر "بلاك جاك" وتفوز مباشرة. إذا تجاوزت 21 تعتبر خاسرًا، والفائز هو من يملك مجموع نقاط أعلى من الآخر بدون أن يتجاوز 21.  __`
		}, {
			name: `روليت الروسية 🔫`,
			value: `> **__طريقة لعب الروليت الروسية:__**\n\n> __ يجب عليك أنت والبوت إطلاق الطلقات على أنفسكم وتفادي الطلقة الحقيقية.  __`
		}, {
			name: `لعبة التفاحة 🍎`,
			value: `> **__لعبة التفاحة هي خانات ويجب عليك تحديد خانة صحيحة في كل مستوى ويمكنك الخروج من اللعبة في مستوى أنت تحدده قبل الفوز في آخر مستوى. الخروج من اللعبة قبل آخر مستوى لا يسبب الخسارة واختيار زر غلط يسبب الخسارة__**`
		}, {
			name: `لعبة القنابل 💣`,
			value: `> **__لعبة القنابل هي خانات ويجب عليك تحديد جوهرة في كل مستوى ويمكنك الخروج من اللعبة في مستوى أنت تحدده قبل الفوز في آخر مستوى. الخروج من اللعبة قبل آخر مستوى لا يسبب الخسارة واختيار قنبلة يسبب الخسارة. يمكنك اختيار عدد القنابل الموجودة بالخانات.__**`
		}, {
			name: `لعبة حجرة ورقة مقص ✂️`,
			value: `> ** حجره ورقه مقص ؟ ماتعرفها ؟ تمزح؟**`
		}).setTimestamp();
		message.channel.send({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "فرند" || message.content.split(" ")[0] == "Friend") {
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> يرجى تحديد عضو لإضافته كصديق!`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم أستطع العثور على هذا الشخص!**`
		});
		if (user.id === message.author.id) return message.reply({
			content: "بتبوض شرع ربنا انت؟"
		});
		let data = await db.findOne({
			id: message.author.id
		});
		if (data.blocked && data.blocked.includes(user.id)) {
			let unblockPrompt = new MessageEmbed().setColor(serverColor).setDescription(`**> هذا الشخص بعطائه بلوك! لكي تتمكن من إضافته كصديق، يجب عليك فك الحظر عنه أولاً.**`);
			return message.reply({
				embeds: [unblockPrompt]
			});
		}
		if (data.friends.includes(user.id)) {
			return message.reply({
				content: `> ${user} موجود بالفعل في قائمة أصدقائك!`
			});
		}
		data.friends.push(user.id);
		await data.save();
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> تمت إضافة ${user} كصديق بنجاح!`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "حذف" || message.content.split(" ")[0] == "Remove") {
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> يرجى تحديد عضو لحذفه من قائمة الأصدقاء!`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم أستطع العثور على هذا الشخص!**`
		});
		if (user.id === message.author.id) return message.reply({
			content: "بتبوض شرع ربنا انت؟"
		});
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data || !data.friends.includes(user.id)) {
			return message.reply({
				content: `> ${user} غير موجود في قائمة أصدقائك!`
			});
		}
		data.friends = data.friends.filter(friend => friend !== user.id);
		await data.save();
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> تم حذف ${user} من قائمة الأصدقاء بنجاح!`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "بلوك" || message.content.split(" ")[0] == "Block") {
		let args = message.content.split(" ");
		if (!args[1]) return message.reply({
			content: `> يرجى تحديد عضو لإعطائه بلوك!`
		});
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1]);
		if (!user) return message.reply({
			content: `\`❎\` **لم أستطع العثور على هذا الشخص!**`
		});
		if (user.id === message.author.id) return message.reply({
			content: "بتبوض شرع ربنا انت؟"
		});
		let data = await db.findOne({
			id: message.author.id
		});
		if (data && data.blocked.includes(user.id)) {
			let unblockPrompt = new MessageEmbed().setColor(serverColor).setDescription(`**${message.author.username}**, هذا الشخص قد حظرته بالفعل!`);
			return message.reply({
				embeds: [unblockPrompt]
			});
		}
		if (!data) {
			data = await db.create({
				id: message.author.id,
				blocked: []
			});
		}
		data.blocked.push(user.id);
		await data.save();
		if (data && data.friends.includes(user.id)) {
			data.friends = data.friends.filter(friend => friend !== user.id);
			await data.save();
		}
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> تم إعطاء بلوك لـ ${user} بنجاح!`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.split(" ")[0] == "فرندز" || message.content.split(" ")[0] == "Friends") {
		let data = await db.findOne({
			id: message.author.id
		});
		if (!data || !data.friends || data.friends.length === 0) {
			let embed = new MessageEmbed().setColor(serverColor).setDescription(`> ليس لديك أصدقاء مسجلين حاليًا!`);
			return message.reply({
				embeds: [embed]
			});
		}
		let friendsList = data.friends.map(friendId => `<@${friendId}>`).join(', ');
		let embed = new MessageEmbed().setColor(serverColor).setDescription(`> قائمة أصدقائك: ${friendsList}`);
		message.reply({
			embeds: [embed]
		});
	} else if (message.content.startsWith('تفاحة') || message.content.startsWith('تفاحه') || message.content.startsWith('apple')) {
		const playerId = message.author.id;
		const player = await db.findOne({
			id: playerId
		});
		const args = message.content.split(' ');
		if (!args[1]) return message.reply('يرجى تحديد مبلغ رهان.');
		let coinAmount = args[1];
		if (args[1] == "كامل" || args[1] == "فل") coinAmount = player.coins.toString();
		else if (args[1] == "نصف" || args[1] == "نص") coinAmount = parseInt(player.coins / 2).toString();
		else coinAmount = args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`);
		const betAmount = parseInt(coinAmount, 10);
		if (isNaN(betAmount) || betAmount <= 0) {
			await message.reply('يرجى تحديد مبلغ رهان صحيح.');
			return;
		}
		if (betAmount > 500000 || betAmount < 1) {
			return message.reply({
				content: "**الحد الأقصى هو 500000 والحد الأدنى هو 1**"
			})
		}
		if (!player || player.coins < betAmount) {
			await message.reply('ليس لديك عملات كافية للرهان.');
			return;
		}
		if (player.status_playing == "yes") return message.reply('لا يمكنك اللعب طالما لديك تحدي جار')
		player.status_playing = "yes";
		await player.save();
		const buttonOrder = LEVELS.map((_, level) => {
			const buttons = [];
			for (let i = 0; i < 5; i++) {
				buttons.push({
					id: `hidden`,
					index: i,
					correct: false
				});
			}
			const correctIndices = [];
			while (correctIndices.length < LEVELS[level].correct) {
				const randomIndex = Math.floor(Math.random() * buttons.length);
				if (!correctIndices.includes(randomIndex)) {
					correctIndices.push(randomIndex);
				}
			}
			correctIndices.forEach(index => {
				buttons[index].correct = true;
			});
			return shuffleArray(buttons);
		});
		const rows = LEVELS.map((_, idx) => createGrid(idx, [], buttonOrder, 0, false));
		const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription(`${getLevelDescription(0)}\nاضغط على الزر الصحيح للفوز!`);
		const tofehaGameMessage = await message.reply({
			embeds: [embed],
			components: [...rows]
		});
		const tofehaGame = new TofehaGame({
			guildId: message.guild.id,
			channelId: message.channel.id,
			messageId: tofehaGameMessage.id,
			playerId: playerId,
			betAmount: betAmount,
			currentLevel: 0,
			winnings: 0,
			gameActive: true,
			playedRows: [],
			pressedButtons: [],
			buttonOrder: buttonOrder,
			time: timestamp(moment(ms("90s")) + Date.now())
		});
		await tofehaGame.save();
	} else if (message.content.trim().split(/\s+/).shift().toLowerCase() === 'addm') {
		if (message.author.bot) return;
		let hasPermission = false;
		if (Array.isArray(supportRoleId)) {
			hasPermission = supportRoleId.some(roleId => message.member.roles.cache.has(roleId));
		} else {
			hasPermission = message.member.roles.cache.has(supportRoleId);
		}
		if (!hasPermission) {
			return message.reply('**You do not have permission !**');
		}
		const target = message.mentions.members.first() || message.guild.members.cache.get(message.content.trim().split(/\s+/)[1]) || message.mentions.roles.first() || message.guild.roles.cache.get(message.content.trim().split(/\s+/)[1]);
		if (!target) {
			return message.reply('**Please mention a user/role or provide their ID.**');
		}
		try {
			await message.channel.permissionOverwrites.create(target, {
				SEND_MESSAGES: true,
				VIEW_CHANNEL: true,
				READ_MESSAGE_HISTORY: true,
				ATTACH_FILES: true
			});
			const embed = new MessageEmbed().setColor(serverColor).setDescription(`<:7lmcasino:1343537240139370497>| **Done adding ${target} in ${message.channel}**`);
			await message.reply({
				embeds: [embed]
			});
			message.delete().catch(() => { });
		} catch { }
	} else if (message.content.trim().split(/\s+/).shift().toLowerCase() === 'remm') {
		if (message.author.bot) return;
		let hasPermission = false;
		if (Array.isArray(supportRoleId)) {
			hasPermission = supportRoleId.some(roleId => message.member.roles.cache.has(roleId));
		} else {
			hasPermission = message.member.roles.cache.has(supportRoleId);
		}
		if (!hasPermission) {
			return message.reply('**You do not have permission !**');
		}
		const target = message.mentions.members.first() || message.guild.members.cache.get(message.content.trim().split(/\s+/)[1]) || message.mentions.roles.first() || message.guild.roles.cache.get(message.content.trim().split(/\s+/)[1]);
		if (!target) {
			return message.reply('**Please mention a user/role or provide their ID.**');
		}
		try {
			await message.channel.permissionOverwrites.delete(target);
			const embed = new MessageEmbed().setColor(serverColor).setDescription(`<:7lmcasino:1343537240139370497>| **Done removing ${target} from ${message.channel}**`);
			await message.reply({
				embeds: [embed]
			});
			message.delete().catch(() => { });
		} catch { }
	} else if (message.content.split(' ')[0].toLowerCase() === 'hide') {
		if (message.author.bot) return;
		if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
			return message.reply('🚫 You don\'t have permission to use this command.');
		}
		if (message.content.split(' ')[1] && message.content.split(' ')[1].toLowerCase() === 'all') {
			let count = 0;
			for (const [id, channel] of message.guild.channels.cache) {
				try {
					await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
						VIEW_CHANNEL: false
					});
					count++;
				} catch { }
			}
			return message.reply(`**🔒 Hidden ${count} channels.**`);
		} else {
			const room = message.channel;
			await room.permissionOverwrites.edit(message.guild.roles.everyone, {
				VIEW_CHANNEL: false
			});
			try {
				msg = await message.reply(`**🔒 ${room} has been hidden.**`);
				message.delete()
				await new Promise(resolve => setTimeout(resolve, 2000));
				msg.delete()
			} catch { }
		}
	} else if (message.content.split(' ')[0].toLowerCase() === 'show') {
		if (message.author.bot) return;
		if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
			return message.reply('🚫 You don\'t have permission to use this command.');
		}
		if (message.content.split(' ')[1] && message.content.split(' ')[1].toLowerCase() === 'all') {
			let count = 0;
			for (const [id, channel] of message.guild.channels.cache) {
				try {
					await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
						VIEW_CHANNEL: true
					});
					count++;
				} catch { }
			}
			return message.reply(`**🔓 Shown ${count} channels.**`);
		} else {
			const room = message.channel;
			await room.permissionOverwrites.edit(message.guild.roles.everyone, {
				VIEW_CHANNEL: true
			});
			try {
				msg = await message.reply(`**🔓 ${room} has been shown.**`);
				message.delete()
				await new Promise(resolve => setTimeout(resolve, 2000));
				msg.delete()
			} catch { }
		}
	} else if (!message.author.bot && message.content.split(" ")[0].toLowerCase() == "+topspin") {
		const money = await db.find({}).sort({
			points: -1
		}).limit(14).exec();
		let num = 0;
		let finalLb = "";
		for (let i = 0; i < money.length; i++) {
			const user = client.users.cache.get(money[i].id);
			if (!user) continue;
			num++;
			if (num === 1) {
				finalLb += `**${crownemoji} <@${user.id}>** **\`-\`** **${parseInt(money[i].points).toLocaleString()}**\n`;
			} else {
				finalLb += `**${num} <@${user.id}>** **\`-\`** **${parseInt(money[i].points).toLocaleString()}**\n`;
			}
			if (num === 10) break;
		}
		const embed = new MessageEmbed().setAuthor({
			name: `توب نقاط`
		}).setColor(serverColor).setDescription(finalLb).setFooter({
			text: `${message.guild.name}`
		}).setTimestamp();
		message.reply({
			embeds: [embed]
		});
	} else if (!message.author.bot || message.author.id === client.user.id) {
		const args = message.content.trim().split(/ +/g);
		const cmd = args.shift().toLowerCase();
		let user = message.mentions.users.first() || await client.users.fetch(args[0], {
			force: true
		}).catch(() => undefined);
		let userData = await db.findOne({
			id: message.author.id
		});
		if (!userData) await db.create({
			id: message.author.id
		}).then((data) => userData = data).catch(() => 0);
		if (cmd == "اضافة" || cmd == "add" || cmd == "Add") {
			if (!(message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(setlimitrole) || message.member.id === client.user.id)) return;
			user = message.mentions.users.first() || await client.users.fetch(args[0], {
				force: true
			}).catch(() => undefined);
			if (!args[1]) return message.react("❌");
			let coinAmount = args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
			let amount = coinAmount;
			if (!args[0]) return message.react("❌");
			if (!user) return message.react("❌");
			if (user.bot && user.id !== client.user.id) return message.react("❌");
			if (!amount) return message.react("❌");
			if (isNaN(amount)) return message.react("❌");
			if (amount <= 0 || args[1].includes('.') || args[1].includes('-')) return message.react("❌");
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data).catch(() => 0);
			anotherUserData.coins += parseInt(amount);
			await anotherUserData.save().catch(() => 0);
			message.react("✅");
			const logch = await client.channels.fetch(logaddrmv);
			const embed = new MessageEmbed().setColor("#0d1541").setTitle("تم إضافة المبلغ بنجاح").setDescription(`
:moneybag: تم إضافة المبلغ \`$${amount}\` 
:bust_in_silhouette: إلى <@${user.id}> 
:crown: من قبل ${message.member.id === client.user.id ? `نظام الرواتب الإدارية` : `<@${message.author.id}>`} 
`).setTimestamp().setFooter({
				text: "معلومات إضافية",
				iconURL: message.author.displayAvatarURL()
			});
			logch.send({
				embeds: [embed]
			});
		} else if (cmd == "addpre") {
			if (!(message.member.roles.cache.has(ownerrole))) return;
			user = message.mentions.users.first() || await client.users.fetch(args[0], {
				force: true
			}).catch(() => undefined);
			if (!args[1]) return message.react("❌");
			let duration = calculateDuration(args[1])
			let amount = duration;
			if (!args[0]) return message.react("❌");
			if (!user) return message.react("❌");
			if (user.bot && user.id !== client.user.id) return message.react("❌");
			if (!amount) return message.react("❌");
			if (isNaN(amount)) return message.react("❌");
			if (amount <= 0 || args[1].includes('.') || args[1].includes('-')) return message.react("❌");
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data).catch(() => 0);
			const logch = await client.channels.fetch(logaddrmv);
			message.react("✅");
			logch.send({
				content: `تم إضافة بريميوم لـ <@${user.id}> من قبل <@${message.author.id}>`
			});
			anotherUserData.premiumExpires = calculateDuration(args[1]);
			anotherUserData.premium = true;
			await anotherUserData.save().catch(() => 0);
		} else if (cmd == "ازالة" || cmd == "rmv" || cmd == "Rmv") {
			if (!(message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(setlimitrole) || message.member.roles.cache.has(managerrole))) return;
			user = message.mentions.users.first() || await client.users.fetch(args[0], {
				force: true
			}).catch(() => undefined);
			if (!args[1]) return message.reply('يرجى تحديد مبلغ.');
			let coinAmount = args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
			let amount = coinAmount;
			if (!args[0]) return message.react("❌");
			if (!user) return message.react("❌");
			if (user.bot && user.id !== client.user.id) return message.react("❌");
			if (!amount) return message.react("❌");
			if (isNaN(amount)) return message.react("❌");
			if (amount <= 0 || args[1].includes('.') || args[1].includes('-')) return message.react("❌");
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data).catch(() => 0);
			if (anotherUserData.coins >= amount) anotherUserData.coins -= parseInt(amount);
			else return message.react("❌");
			await anotherUserData.save().catch(() => 0)
			message.react("✅");
			const logch = await client.channels.fetch(logaddrmv);
			const embed = new MessageEmbed().setColor("#FF0000").setTitle("تم إزالة المبلغ بنجاح").setDescription(`
:moneybag: تمت إزالة المبلغ \`$${amount}\` 
:bust_in_silhouette: من <@${user.id}> 
:crown: من قبل <@${message.author.id}> 
`).setTimestamp().setFooter({
				text: "معلومات إضافية",
				iconURL: message.author.displayAvatarURL()
			});
			logch.send({
				embeds: [embed]
			});
		} else if (cmd == "تحويل") {
			const userId = message.author.id;
			if (isBlacklisted(userId)) return;
			if (message.member.roles.cache.has(borrowedrole)) return message.reply("أنت مستلف, وممنوع عليك تحويل الأموال.")
			if (message.channel.id !== COMMAND_CHANNEL_ID) return message.reply({
				content: ` يجب عليك استخدام امر التحويل في روم <#${COMMAND_CHANNEL_ID}>`
			});
			if (userData.status_playing == "yes") return message.reply({
				content: "انت بتلعب مينفعش تحول !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			if (!args[1]) return message.reply('يرجى تحديد مبلغ.');
			let coinAmount = args[1].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
			let amount = coinAmount;
			if (!args[0]) return message.reply({
				content: "من فضلك منشن شخص !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			if (!user) return message.reply({
				content: "لا أستطيع العثور على الشخص اللي منشنته !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			if (user.bot && user.id !== client.user.id) return message.reply({
				content: "البوتات ملهاش فلوس !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			if (user.id == message.author.id) return message.reply({
				content: "عاوز تبوظ شرع ربنا انت !؟",
				allowedMentions: {
					repliedUser: false
				}
			});
			if (!amount) return message.reply({
				content: `دخل رقم طيب !!`,
				allowedMentions: {
					repliedUser: false
				}
			});
			if (isNaN(amount)) return message.reply({
				content: `دخل رقم مظبوط لاجي أظبطك !!`,
				allowedMentions: {
					repliedUser: false
				}
			});
			if (amount <= 0 || args[1].includes('.') || args[1].includes('-')) return message.reply({
				content: `دخل رقم مظبوط لاجي أظبطك !!`,
				allowedMentions: {
					repliedUser: false
				}
			});
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data).catch(() => 0);
			if (!userData || userData.coins < amount) return message.reply({
				content: "معكش الفلوس اللي عاوز تحولها !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			let first = Math.floor(Math.random() * 10);
			let second = Math.floor(Math.random() * 10);
			let third = Math.floor(Math.random() * 10);
			let fourth = Math.floor(Math.random() * 10);
			let num = `${first}${second}${third}${fourth}`;
			let resulting = Math.floor(amount - (amount * (3 / 100)));
			let embed = new MessageEmbed().setDescription(`انت هتحول: ${resulting} ل ${user}\nعلشان تأكد التحويل اكتب: ${num}`)
			let msg = await message.reply({
				embeds: [embed],
				allowedMentions: {
					repliedUser: false
				}
			});
			const filter = response => response.author.id === message.author.id;
			message.channel.awaitMessages({
				filter,
				max: 1,
				time: 300000,
				errors: ["time"]
			}).then(async collected => {
				if (collected.first().content === num) {
					try {
						collected.first().delete();
					} catch { }
					userData = await db.findOne({
						id: message.author.id
					});
					anotherUserData = await db.findOne({
						id: user.id
					});
					if (!userData || userData.coins < amount) return message.reply({
						content: "معكش الفلوس اللي عاوز تحولها !!",
						allowedMentions: {
							repliedUser: false
						}
					});
					if (userData.status_playing == "yes" || anotherUserData.status_playing == "yes") return message.reply({
						content: "واحد فيكم بيلعب مينفعش تحولو لبعض !!",
						allowedMentions: {
							repliedUser: false
						}
					});
					anotherUserData.coins += parseInt(resulting);
					userData.coins -= parseInt(amount);
					userData.outcomingtransactions += parseInt(amount)
					anotherUserData.incomingtransactions += parseInt(resulting)
					await userData.save().catch(() => 0);
					await anotherUserData.save().catch(() => 0);
					await msg.edit({
						content: `تم تحويل: ${resulting}$ ل ${user} !!`,
						embeds: [],
						files: [],
						allowedMentions: {
							repliedUser: false
						}
					});
					const channell = await client.channels.fetch(Transfer);
					let embedd = new MessageEmbed().setColor("#00FF00").setTitle("💰 تحويل مبلغ بنجاح 💰").setDescription(`
  :moneybag: تم تحويل مبلغ \`${amount.toLocaleString()}\`
  :bust_in_silhouette: من قبل <@${message.author.id}>
  :arrow_forward: للمستخدم <@${user.id}>
  `).setTimestamp().setFooter({
						text: "معلومات إضافية",
						iconURL: message.author.displayAvatarURL()
					});
					await channell.send({
						embeds: [embedd]
					});
					const embed = new MessageEmbed().setThumbnail(message.guild.iconURL({
						dynamic: true
					})).setTitle("سجل التحويل").setDescription(`تم التحويل ل: ${user.username}\nتم التحويل من: ${message.author.username}\nالمبلغ: ${resulting}`)
					await user.send({
						embeds: [embed]
					}).catch(() => { });
					await message.author.send({
						embeds: [embed]
					}).catch(() => { });
				} else {
					try {
						msg.delete().catch(() => 0);
					} catch { }
					try {
						collected.first().delete();
					} catch { }
				}
			});
		} else if (cmd == "setlimit") {
			if (!(message.member.roles.cache.has(setlimitrole))) return;
			let adasd = await kombe.findOne();
			if (!adasd) {
				adasd = await kombe.create({
					kombe: 2000,
					yesorno: "no",
					dailylimit: 2000
				})
			}
			if (!args[0]) return message.reply("أدخل حدا صالحا")
			const limit = parseInt(args[0].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`))
			adasd.kombe = limit;
			adasd.save();
			return message.reply(`تم تحديد حد السحب لليوم إلى ${limit.toLocaleString()} بنجاح!`)
		} else if (cmd == "setinvprice") {
			if (!(message.member.roles.cache.has(ownerrole))) return;
			let invv = await setinv.findOne();
			if (!invv) await setinv.create({
				systemm: "off"
			});
			if (!args[0]) return message.reply("أدخل سعرا صالحا")
			const limit = parseInt(args[0].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`))
			invv.price = limit;
			await invv.save();
			return message.reply(`تم تحديد سعر الانفايت إلى ${limit.toLocaleString()} بنجاح!`)
		} else if (cmd == "rstwth") {
			if (!(message.member.roles.cache.has(ownerrole) || message.member.roles.cache.has(rsrole))) return;
			let adasd = await kombe.findOne();
			if (!adasd) {
				adasd = await kombe.create({
					kombe: 2000,
					yesorno: "no",
					dailylimit: 2000
				})
			}
			adasd.yesorno = "no";
			adasd.save();
			return message.reply(`تم حل المشكل`)
		} else if (cmd == "setdaily") {
			if (!(message.member.roles.cache.has(ownerrole))) return;
			let adasd = await kombe.findOne();
			if (!adasd) {
				adasd = await kombe.create({
					kombe: 2000,
					yesorno: "no",
					dailylimit: 2000
				})
			}
			if (!args[0]) return message.reply("أدخل حدا يوميا صالحا")
			const limit = parseInt(args[0].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`));
			adasd.dailylimit = limit;
			adasd.save();
			return message.reply(`تم تحديد الحد اليومي للسحب إلى ${limit.toLocaleString()} بنجاح!`)
		}
	}
});
client.on('interactionCreate', async interaction => {
	if (interaction.isButton()) {
		if (interaction.customId.startsWith(`withdraw_${interaction.user.id}`)) {
			const modal = new Modal().setCustomId('withdrawmodal').setTitle('السحب من بنك البريميوم').addComponents(new MessageActionRow().addComponents(new TextInputComponent().setCustomId('withdraw_amount').setLabel('المبلغ').setStyle('PARAGRAPH').setMaxLength(4000).setPlaceholder('اكتب المبلغ هنا')));
			await interaction.showModal(modal);
			let button_withdraw = new MessageButton().setCustomId(`withdraw_${interaction.user.id}`).setLabel('سحب ').setStyle('SUCCESS').setDisabled(true);
			let button_deposit = new MessageButton().setCustomId(`deposit_${interaction.user.id}`).setLabel('ايداع ').setStyle('SECONDARY').setDisabled(true);
			let row = new MessageActionRow().addComponents(button_withdraw, button_deposit);
			await interaction.message.edit({
				components: [row],
				allowedMentions: {
					repliedUser: true
				}
			});
		} else if (interaction.customId.startsWith(`deposit_${interaction.user.id}`)) {
			const modal = new Modal().setCustomId('depositmodal').setTitle('الإيداع إلى بنك البريميوم').addComponents(new MessageActionRow().addComponents(new TextInputComponent().setCustomId('deposit_amount').setLabel('المبلغ').setStyle('PARAGRAPH').setMaxLength(4000).setPlaceholder('اكتب المبلغ هنا')));
			await interaction.showModal(modal);
			let button_withdraw = new MessageButton().setCustomId(`withdraw_${interaction.user.id}`).setLabel('سحب ').setStyle('SUCCESS').setDisabled(true);
			let button_deposit = new MessageButton().setCustomId(`deposit_${interaction.user.id}`).setLabel('ايداع ').setStyle('SECONDARY').setDisabled(true);
			let row = new MessageActionRow().addComponents(button_withdraw, button_deposit);
			await interaction.message.edit({
				components: [row],
				allowedMentions: {
					repliedUser: true
				}
			});
		} else if (interaction.customId.startsWith("transfer_")) {
			if (!(interaction.member.roles.cache.has(ownerrole))) return;
			user = await client.users.fetch(interaction.customId.split('_')[1], {
				force: true
			}).catch(() => undefined);
			if (!user) return interaction.reply({
				content: "لا أستطيع العثور على الشخص !!",
				ephemeral: true
			});
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data);
			if (anotherUserData.withdraw_amount == 0) return interaction.reply({
				content: "هو معندوش طلب سحب علشان تقبله !!",
				ephemeral: true
			});
			const withdrawamount = anotherUserData.withdraw_amount
			for (const messagee of anotherUserData.withdrawmessages) {
				if (messagee[1] === "withdrawEmbed") {
					const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
					const messageToEdit = await channel.messages.fetch(messagee[0]);
					const embed = new MessageEmbed().setColor('#00ff00').setTitle('طلب سحب رصيد').setThumbnail(user.displayAvatarURL({
						dynamic: true,
						size: 1024
					})).addFields({
						name: 'العضو',
						value: `<@${user.id}>`,
						inline: true
					}, {
						name: '\u200B',
						value: '\u200B',
						inline: true
					}, {
						name: 'المبلغ',
						value: `${withdrawamount}`,
						inline: false
					}, {
						name: 'الرصيد الحالي',
						value: `${anotherUserData.coins}`,
						inline: false
					}, {
						name: 'الحالة',
						value: 'تم قبول الطلب ✅',
						inline: false
					}).setFooter({
						text: '7lm Casino',
						iconURL: interaction.guild.iconURL({
							dynamic: true
						})
					}).setTimestamp();
					const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`donetransfer_${user.id}`).setLabel('تم التحويل ✅').setStyle('SUCCESS'),);
					messageToEdit.edit({
						embeds: [embed],
						components: [row]
					})
				}
			}
			interaction.reply({
				content: `تم قبول سحب ${user}`,
				ephemeral: true
			});
			anotherUserData.withdraw_accepted = true
			await anotherUserData.save();
			bankuser = await client.users.fetch(ownertr, {
				force: true
			}).catch(() => undefined);
			try {
				const msg1 = await bankuser.send({
					content: `تم قبول سحب ${user}`
				}).catch(() => 0);
				const msg2 = await bankuser.send({
					content: `c ${user.id} ${withdrawamount}`
				}).catch(() => 0);
				const msg3 = await bankuser.send({
					files: [linelineline]
				});
			} catch { }
		} else if (interaction.customId.startsWith("donetransfer_")) {
			if (!(interaction.member.roles.cache.has(ownerrole))) return;
			user = await client.users.fetch(interaction.customId.split('_')[1], {
				force: true
			}).catch(() => undefined);
			if (!user) return interaction.reply({
				content: "لا أستطيع العثور على الشخص !!",
				ephemeral: true
			});
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data);
			if (anotherUserData.withdraw_amount == 0) return interaction.reply({
				content: "هو معندوش طلب سحب علشان تقبله !!",
				ephemeral: true
			});
			const withdrawamount = anotherUserData.withdraw_amount
			anotherUserData.withdraw_amount = 0;
			let messagesss = anotherUserData.withdrawmessages
			for (const messagee of anotherUserData.withdrawmessages) {
				if (messagee[1] === "withdrawEmbed") {
					const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
					const messageToEdit = await channel.messages.fetch(messagee[0]);
					const embed = new MessageEmbed().setColor('#00ff00').setTitle('طلب سحب رصيد').setThumbnail(user.displayAvatarURL({
						dynamic: true,
						size: 1024
					})).addFields({
						name: 'العضو',
						value: `<@${user.id}>`,
						inline: true
					}, {
						name: '\u200B',
						value: '\u200B',
						inline: true
					}, {
						name: 'المبلغ',
						value: `${withdrawamount}`,
						inline: false
					}, {
						name: 'الرصيد الحالي',
						value: `${anotherUserData.coins}`,
						inline: false
					}, {
						name: 'الحالة',
						value: 'تم التحويل ✅',
						inline: false
					}).setFooter({
						text: '7lm Casino',
						iconURL: interaction.guild.iconURL({
							dynamic: true
						})
					}).setTimestamp();
					const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`donetransfer_${user.id}`).setLabel('تم التحويل ✅').setStyle('SUCCESS').setDisabled(true),);
					messageToEdit.edit({
						embeds: [embed],
						components: [row]
					})
					continue;
				}
			}
			try {
				const embeddm = new MessageEmbed().setColor('#00ff00').setTitle('تم سحب الرصيد بنجاح').setDescription(`**تم تسليمك ${withdrawamount} بنجاح رجاء تقيم خدمتنا :face_with_monocle:**
<#${feedbackchannel}>`).setFooter({
					text: '7lm Casino',
					iconURL: interaction.guild.iconURL({
						dynamic: true
					})
				}).setTimestamp();
				user.send({
					embeds: [embeddm]
				})
			} catch { }
			bankuser = await client.users.fetch(ownertr, {
				force: true
			}).catch(() => undefined);
			anotherUserData.withdrawmessages = [];
			anotherUserData.totalwithdraw += withdrawamount;
			anotherUserData.withdraw_accepted = false
			await anotherUserData.save();
			await bankuser.send({
				content: `تم التحويل ل ${user}`
			}).catch(() => 0);
			await bankuser.send({
				files: [linelineline]
			}).catch(() => 0);
			const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`delete`).setLabel('حذف الرسائل').setStyle('DANGER'));
			await interaction.reply({
				content: `تم التحويل ل ${user}`,
				components: [row],
				ephemeral: true
			}).catch(async () => {
				for (const messageId of messagesss) {
					try {
						const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
						const messageToDelete = await channel.messages.fetch(messageId[0]);
						try {
							messageToDelete.delete();
						} catch { }
					} catch { }
				}
				return;
			});
			const msg33 = await interaction.fetchReply()
			const filter = i => i.user.id === interaction.user.id;
			const collector432 = msg33.createMessageComponentCollector({
				filter,
				max: 1
			});
			collector432.on('collect', async interaction => {
				for (const messageId of messagesss) {
					try {
						const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
						const messageToDelete = await channel.messages.fetch(messageId[0]);
						try {
							messageToDelete.delete();
						} catch { }
					} catch { }
				}
				interaction.reply({
					content: `تم حذف الرسائل بنجاح`,
					ephemeral: true
				});
				collector432.stop();
			});
		} else if (interaction.customId.startsWith("canceltransfer_")) {
			user = await client.users.fetch(interaction.customId.split('_')[1], {
				force: true
			}).catch(() => undefined);
			if (!(interaction.member.roles.cache.has(setlimitrole) || interaction.member.roles.cache.has(managerrole) || interaction.member.roles.cache.has(ownerrole) || user.id == interaction.user.id)) return;
			if (!user) return interaction.reply({
				content: "لا أستطيع العثور على الشخص !!",
				allowedMentions: {
					repliedUser: false
				}
			});
			let anotherUserData = await db.findOne({
				id: user.id
			});
			if (!anotherUserData) await db.create({
				id: user.id
			}).then((data) => anotherUserData = data);
			if (anotherUserData.withdraw_amount == 0) return interaction.reply({
				content: "هو معندوش طلب سحب علشان تلغيه !!"
			});
			anotherUserData.coins += parseInt(anotherUserData.withdraw_amount);
			const withdrawamount = anotherUserData.withdraw_amount
			anotherUserData.withdraw_amount = 0;
			let messagesss = anotherUserData.withdrawmessages
			if (user.id === interaction.user.id) {
				for (const messageId of anotherUserData.withdrawmessages) {
					try {
						const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
						const messageToDelete = await channel.messages.fetch(messageId[0]);
						try {
							messageToDelete.delete();
						} catch { }
					} catch { }
				}
				interaction.reply({
					content: `تم إلغاء سحبك بنجاح`,
					ephemeral: true
				});
			} else {
				for (const messagee of anotherUserData.withdrawmessages) {
					if (messagee[1] === "withdrawEmbed") {
						const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
						const messageToEdit = await channel.messages.fetch(messagee[0]);
						const embed = new MessageEmbed().setColor('#ff0000').setTitle('طلب سحب رصيد').setThumbnail(user.displayAvatarURL({
							dynamic: true,
							size: 1024
						})).addFields({
							name: 'العضو',
							value: `<@${user.id}>`,
							inline: true
						}, {
							name: '\u200B',
							value: '\u200B',
							inline: true
						}, {
							name: 'المبلغ',
							value: `${withdrawamount}`,
							inline: false
						}, {
							name: 'الرصيد الحالي',
							value: `${anotherUserData.coins}`,
							inline: false
						}, {
							name: 'الحالة',
							value: 'تم رفض الطلب ❌',
							inline: false
						}).setFooter({
							text: '7lm Casino',
							iconURL: interaction.guild.iconURL({
								dynamic: true
							})
						}).setTimestamp();
						const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`canceltransfer_${user.id}`).setLabel('تم الرفض ❌').setStyle('DANGER').setDisabled(true),);
						messageToEdit.edit({
							embeds: [embed],
							components: [row]
						})
					}
				}
				const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`delete`).setLabel('حذف الرسائل').setStyle('DANGER'));
				await interaction.reply({
					content: `تم رفض سحب ${user}`,
					components: [row],
					ephemeral: true
				});
				const msg33 = await interaction.fetchReply()
				const filter = i => i.user.id === interaction.user.id;
				const collector432 = msg33.createMessageComponentCollector({
					filter,
					max: 1
				});
				collector432.on('collect', async interaction => {
					for (const messageId of messagesss) {
						try {
							const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
							const messageToDelete = await channel.messages.fetch(messageId[0]);
							try {
								messageToDelete.delete();
							} catch { }
						} catch { }
					}
					interaction.reply({
						content: `تم حذف الرسائل بنجاح`,
						ephemeral: true
					});
					collector432.stop();
				});
			}
			anotherUserData.withdrawmessages = [];
			anotherUserData.withdraw_accepted = false
			await anotherUserData.save();
			bankuser = await client.users.fetch(ownertr, {
				force: true
			}).catch(() => undefined);
			await bankuser.send({
				content: `تم رفض سحب ${user}`
			});
			await bankuser.send({
				files: [linelineline]
			});
		} else if (interaction.customId == `yesg_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			let nums = ["1", "2"]
			let numr = nums[Math.floor(Math.random() * nums.length)]
			let usrchoose = "";
			let notrole = "";
			if (numr == "1") {
				usrchoose = gdatawith.id;
				notrole = gdatawith.with;
			}
			if (numr == "2") {
				usrchoose = gdatawith.with;
				notrole = gdatawith.id;
			}
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`نرد\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			setTimeout(async () => {
				let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
					name: `${stusrgame.tag}`,
					value: `0`
				}, {
					name: `${wthusrgame.tag}`,
					value: `0`
				})
				let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdatawith.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
				let row = new MessageActionRow().setComponents(button_nrdk)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit_nrd_game],
					content: `<@!${usrchoose}>\n اصبح دورك`,
					components: [row]
				})).catch()
			}, 2500)
			let nrdata = await nrd.findOne({
				msgID: gdatawith.msgID
			})
			if (!nrdata) {
				nrdata = await nrd.create({
					msgID: gdatawith.msgID,
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					players: [stusrgame.id, wthusrgame.id]
				})
			} else {
				nrdata = await nrd.findOneAndUpdate({
					msgID: gdatawith.msgID
				}, {
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					players: [stusrgame.id, wthusrgame.id]
				})
			}
			let nrdusrdata = await nrdusr.findOne({
				id: gdatawith.id
			})
			if (!nrdusrdata) {
				nrdusrdata = await nrdusr.create({
					id: gdatawith.id,
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0
				})
			} else {
				nrdusrdata = await nrdusr.findOneAndUpdate({
					id: gdatawith.id
				}, {
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0
				})
			}
			let nrdusr1data = await nrdusr.findOne({
				id: gdatawith.with
			})
			if (!nrdusr1data) {
				nrdusr1data = await nrdusr.create({
					id: gdatawith.with,
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0
				})
			} else {
				nrdusr1data = await nrdusr.findOneAndUpdate({
					id: gdatawith.with
				}, {
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0
				})
			}
			return;
		} else if (interaction.customId == `yesxo_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`اكس او\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			let i = Math.floor(Math.random() * 2)
			if (i == 0) {
				await startGame(interaction.message, stusrgame, wthusrgame, gdatawith.coins);
			} else await startGame(interaction.message, wthusrgame, stusrgame, gdatawith.coins);
		} else if (interaction.customId == `yesrps_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await rpsgamedata.create({
				messageId: interaction.message.id
			})
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`حجرة ورقة مقص\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			const betAmount = parseInt(gdatawith.coins);
			const row = new MessageActionRow().addComponents(new MessageButton().setCustomId('حجرة').setLabel('🪨 حجرة').setStyle('PRIMARY'), new MessageButton().setCustomId('ورقة').setLabel('📄 ورقة').setStyle('PRIMARY'), new MessageButton().setCustomId('مقص').setLabel('✂️ مقص').setStyle('PRIMARY'),);
			const embed = new MessageEmbed().setTitle('حجرة ورقة مقص').setDescription(`<@${stusrgame.id}> vs <@${wthusrgame.id}>\n\n العب!`).setColor(serverColor);
			const msg = await interaction.message.edit({
				content: "** **",
				embeds: [embed],
				components: [row]
			});
			const filter = (interactionn) => {
				return [stusrgame.id, wthusrgame.id].includes(interactionn.user.id);
			};
			const choices = {};
			const collector = msg.createMessageComponentCollector({
				filter,
				time: 15000
			});
			collector.on('collect', async (interactionnn) => {
				if (!choices[interactionnn.user.id]) {
					choices[interactionnn.user.id] = interactionnn.customId;
					await interactionnn.reply({
						content: `لقد اخترت ${interactionnn.customId}`,
						ephemeral: true
					});
				}
				if (Object.keys(choices).length === 2) {
					collector.stop();
				}
			});
			collector.on('end', async () => {
				if (Object.keys(choices).length < 2) {
					data1 = await db.findOne({
						id: stusrgame.id
					});
					data2 = await db.findOne({
						id: wthusrgame.id
					});
					data1.status_playing = "no";
					data2.status_playing = "no";
					await data1.save();
					await data2.save();
					return interaction.message.edit({
						content: `تم إلغاء التحدي بسبب عدم التفاعل`,
						components: []
					});
				}
				const result = determineWinner(choices[stusrgame.id], choices[wthusrgame.id]);
				if (result === 'draw') {
					interaction.message.edit({
						content: `لقد اخترتما ${choices[stusrgame.id]}.\nتعادل! لا أحد فاز أو خسر أي قرش`,
						components: []
					});
					data1 = await db.findOne({
						id: stusrgame.id
					});
					data2 = await db.findOne({
						id: wthusrgame.id
					});
					data1.status_playing = "no";
					data2.status_playing = "no";
					await data1.save();
					await data2.save();
				} else {
					const winner = result === 'author' ? stusrgame : wthusrgame;
					const loser = result === 'author' ? wthusrgame : stusrgame;
					data1 = await db.findOne({
						id: winner.id
					});
					data2 = await db.findOne({
						id: loser.id
					});
					data1.coins += parseInt(parseInt(betAmount) * (1 - TAX_RATE));
					data1.totalwinnings += parseInt(parseInt(betAmount) * (1 - TAX_RATE));
					data1.challengesnumber += 1;
					data1.winnumber += 1;
					data2.coins -= parseInt(betAmount);
					data2.cashback += parseInt(betAmount * 0.02);
					data2.totallost += parseInt(parseInt(betAmount) * (1 - TAX_RATE));
					data2.challengesnumber += 1;
					data2.losenumber += 1;
					data1.status_playing = "no";
					data2.status_playing = "no";
					await data1.save();
					await data2.save();
					interaction.message.edit({
						content: `<@${winner.id}> اختار ${choices[winner.id]}\n<@${loser.id}> اختار ${choices[loser.id]}\n<@${winner.id}> ربح باللعبة وفاز ب${betAmount}!`,
						components: []
					});
				}
				await game.findOneAndDelete({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				await rpsgamedata.findOneAndDelete({
					messageId: interaction.message.id
				})
			});
		} else if (interaction.customId == `yestartib_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`البحث عن الزر\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			const betAmount = gdatawith.coins;
			const players = [stusrgame.id, wthusrgame.id];
			const correctButtonIndex = Math.floor(Math.random() * 16);
			const rows = [];
			for (let i = 0; i < 4; i++) {
				const row = new MessageActionRow();
				for (let j = 0; j < 4; j++) {
					const buttonIndex = i * 4 + j;
					row.addComponents(new MessageButton().setCustomId(buttonIndex === correctButtonIndex ? 'correct' : `wrong_${buttonIndex}`).setEmoji(hiddenemoji).setStyle('PRIMARY'));
				}
				rows.push(row);
			}
			const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة العثور على الزر الصحيح').setDescription(`اضغط على الزر الصحيح للفوز! الدور الآن عند <@${players[0]}>`);
			const gameMessage = await interaction.message.edit({
				content: `**الدور الآن عند <@${players[0]}>**`,
				embeds: [embed],
				components: rows
			});
			const gamedd = new minegame({
				guildId: gameMessage.guild.id,
				channelId: gameMessage.channel.id,
				messageId: gameMessage.id,
				players: players,
				turn: 0,
				correctButtonId: `correct`,
				correctButtonIndex: correctButtonIndex,
				betAmount: betAmount
			});
			await gamedd.save();
		} else if (interaction.customId === `yesmines_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			});
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			});
			let stusrgame = client.users.cache.get(gdatawith.id);
			let wthusrgame = client.users.cache.get(gdatawith.with);
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now());
			await gdatawith.save();
			await interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`الألغام\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			});
			const betAmount = gdatawith.coins;
			await startPvPGame(interaction.message, stusrgame, wthusrgame, betAmount);
		} else if (interaction.customId == `nog_${interaction.message.id}`) {
			let gdata = await game.findOne({
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(gdata.id)
			let wthusrgame = client.users.cache.get(gdata.with)
			if (stusrgame.id !== interaction.user.id && wthusrgame.id !== interaction.user.id) return;
			await game.findOneAndDelete({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (stusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `>  تم إلغاء التحدي بنجاح ${interaction.user} ! 
> || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch()
			}
			if (wthusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `>  تم رفض التحدي بنجاح ${interaction.user} ! 
> || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch()
			}
			let data = await db.findOne({
				id: stusrgame.id
			})
			if (!data) {
				data = await db.create({
					id: stusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			let data2 = await db.findOne({
				id: wthusrgame.id
			})
			if (!data2) {
				data2 = await db.create({
					id: wthusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			data2.status_playing = "no";
			await data2.save()
			data.status_playing = "no";
			await data.save()
		} else if (interaction.customId == `nrdk_${interaction.message.id}`) {
			let data = await nrd.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			let datausr = await nrdusr.findOne({
				id: interaction.user.id
			})
			if (!datausr) return;
			await interaction.deferReply({
				ephemeral: true
			})
			if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			let nums = [];
			if (!nardwinners.includes(interaction.user.id)) nums = ["1", "2", "3", "4", "5", "6"]
			else nums = ["4", "5", "6"]
			let num = nums[Math.floor(Math.random() * nums.length)]
			datausr.numbers.push(num)
			await datausr.save()
			datausr.result = parseInt(datausr.result) + parseInt(num)
			await datausr.save()
			datausr.attempt = parseInt(datausr.attempt) + 1;
			await datausr.save()
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			interaction.editReply({
				content: `> تم اللعب ، رقمك هو \`${num}\` !!`,
				ephemeral: true
			})
			let datausrus = await nrdusr.findOne({
				id: stusrgame.id
			})
			let datausrue = await nrdusr.findOne({
				id: wthusrgame.id
			})
			let resultnum1;
			if (datausrus.numbers.length == 2) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} = **${datausrus.result}**`;
			if (datausrus.numbers.length == 3) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} + ${datausrus.numbers[2]} = **${datausrus.result}**`;
			let resultnum2;
			if (datausrue.numbers.length == 2) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`;
			if (datausrue.numbers.length == 3) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} + ${datausrue.numbers[2]} = **${datausrue.result}**`;
			if (parseInt(datausr.attempt) == 1) {
				if (gdata.with == interaction.user.id) {
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrus.numbers[0] || 0}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${num}`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_edit_nrd_game],
						components: [row]
					})).catch()
					setTimeout(async () => {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
						let row1 = new MessageActionRow().setComponents(button_nrdk1)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							content: `${stusrgame}\n اصبح دورك`,
							components: [row1]
						})).catch()
					}, 2500)
				}
				if (data.idstusr == interaction.user.id) {
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${num}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrue.numbers[0] || 0}`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_edit_nrd_game],
						components: [row]
					})).catch()
					setTimeout(async () => {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
						let row1 = new MessageActionRow().setComponents(button_nrdk1)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							content: `${wthusrgame}\n اصبح دورك`,
							components: [row1]
						})).catch()
					}, 2500)
				}
				return;
			}
			if (parseInt(datausr.attempt) == 2) {
				if (datausrus.numbers.length == 1) resultnum1 = `${datausrus.numbers[0]}`
				if (datausrue.numbers.length == 1) resultnum2 = `${datausrue.numbers[0]}`
				if (wthusrgame.id == interaction.user.id) {
					var datausrup = await nrdusr.findOne({
						id: interaction.user.id
					})
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_edit_nrd_game],
						components: [row]
					})).catch()
					setTimeout(async () => {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
						let row1 = new MessageActionRow().setComponents(button_nrdk1)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							content: `${stusrgame}\n اصبح دورك`,
							components: [row1]
						})).catch()
					}, 2500)
				}
				if (stusrgame.id == interaction.user.id) {
					var datausrup = await nrdusr.findOne({
						id: interaction.user.id
					})
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${resultnum2}`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_edit_nrd_game],
						components: [row]
					})).catch()
					setTimeout(async () => {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
						let row1 = new MessageActionRow().setComponents(button_nrdk1)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							content: `${wthusrgame}\n اصبح دورك`,
							components: [row1]
						})).catch()
					}, 2500)
				}
				return;
			}
			if (parseInt(datausr.attempt) == 3) {
				if (wthusrgame.id == interaction.user.id) {
					var datausrup = await nrdusr.findOne({
						id: interaction.user.id
					})
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${resultnum2}`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					let datausrupst = await nrdusr.findOne({
						id: stusrgame.id
					})
					let datausrupwh = await nrdusr.findOne({
						id: wthusrgame.id
					})
					let embed_end_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${resultnum2}`
					})
					if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_end_nrd_game],
							content: `> انتهى التحدي...`,
							components: []
						})).catch()
					} else {
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							components: [row]
						})).catch()
					}
					setTimeout(async () => {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
							let userr1r = await nrdusr.findOne({
								id: stusrgame.id
							})
							let userr2r = await nrdusr.findOne({
								id: wthusrgame.id
							})
							if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 1, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr1st.status_playing = "no"
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.tienumber += 1
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.tienumber += 1
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("نرد", stusrgame, wthusrgame, 0, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let tax = parseInt(gdata.coins) * TAX_RATE;
								let total = parseInt(gdata.coins) - parseInt(tax);
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.winnumber += 1
								datacoinsusr1st.totalwinnings += parseInt(total)
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
								datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.losenumber += 1
								datacoinsusr2st.totallost += parseInt(gdata.coins)
								datacoinsusr1st.status_playing = "no"
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("نرد", wthusrgame, stusrgame, 0, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let tax = parseInt(gdata.coins) * TAX_RATE;
								let total = parseInt(gdata.coins) - parseInt(tax);
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.winnumber += 1
								datacoinsusr1st.totalwinnings += parseInt(total)
								let datacoinsusr2st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr2st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
								datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.losenumber += 1
								datacoinsusr2st.totallost += parseInt(gdata.coins)
								datacoinsusr1st.status_playing = "no"
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							return;
						} else {
							let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
							let row1 = new MessageActionRow().setComponents(button_nrdk1)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_edit_nrd_game],
								content: `${stusrgame}\n اصبح دورك`,
								components: [row1]
							})).catch()
						}
					}, 2500)
				}
				if (stusrgame.id == interaction.user.id) {
					var datausrupst = await nrdusr.findOne({
						id: interaction.user.id
					})
					let datausrupwh = await nrdusr.findOne({
						id: wthusrgame.id
					})
					let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${resultnum2}`
					})
					let button_nrdk = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("DANGER").setDisabled()
					let row = new MessageActionRow().setComponents(button_nrdk)
					let embed_end_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").addFields({
						name: `${stusrgame.tag}`,
						value: `> ${resultnum1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${resultnum2}`
					})
					if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_end_nrd_game],
							content: `> انتهى التحدي...`,
							components: []
						})).catch()
					} else {
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_edit_nrd_game],
							components: [row]
						})).catch()
					}
					setTimeout(async () => {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
							let userr1r = await nrdusr.findOne({
								id: stusrgame.id
							})
							let userr2r = await nrdusr.findOne({
								id: wthusrgame.id
							})
							if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("نرد", stusrgame, wthusrgame, 1, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr1st.status_playing = "no"
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.tienumber += 1
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.tienumber += 1
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("نرد", stusrgame, wthusrgame, 0, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let tax = parseInt(gdata.coins) * TAX_RATE;
								let total = parseInt(gdata.coins) - parseInt(tax);
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.winnumber += 1
								datacoinsusr1st.totalwinnings += parseInt(total)
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
								datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.losenumber += 1
								datacoinsusr2st.totallost += parseInt(gdata.coins)
								datacoinsusr1st.status_playing = "no"
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
								let embed_end = new MessageEmbed().setTitle("بيانات التحدي").addFields({
									name: `${stusrgame.tag}`,
									value: `> ${resultnum1}`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${resultnum2}`
								})
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_end],
									content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
								})).catch()
								await allbetssend("نرد", wthusrgame, stusrgame, 0, gdata.coins)
								let datacoinsusr1st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr1st) {
									datacoinsusr1st = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								let tax = parseInt(gdata.coins) * TAX_RATE;
								let total = parseInt(gdata.coins) - parseInt(tax);
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
								datacoinsusr1st.challengesnumber += 1
								datacoinsusr1st.winnumber += 1
								datacoinsusr1st.totalwinnings += parseInt(total)
								let datacoinsusr2st = await db.findOne({
									id: stusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr2st = await db.create({
										id: stusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
								datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
								datacoinsusr2st.challengesnumber += 1
								datacoinsusr2st.losenumber += 1
								datacoinsusr2st.totallost += parseInt(gdata.coins)
								datacoinsusr1st.status_playing = "no"
								await datacoinsusr1st.save()
								datacoinsusr2st.status_playing = "no"
								await datacoinsusr2st.save()
								await nrd.findOneAndDelete({
									msgID: gdata.msgID,
									idstusr: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: stusrgame.id
								})
								await nrdusr.findOneAndDelete({
									id: wthusrgame.id
								})
								await game.findOneAndDelete({
									id: stusrgame.id,
									with: wthusrgame.id
								})
							}
							return;
						} else {
							let button_nrdk1 = new MessageButton().setCustomId(`nrdk_${gdata.msgID}`).setLabel("العب نردك").setStyle("PRIMARY")
							let row1 = new MessageActionRow().setComponents(button_nrdk1)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_edit_nrd_game],
								content: `${wthusrgame}\n اصبح دورك`,
								components: [row1]
							})).catch()
						}
					}, 2500)
				}
				return;
			}
		} else if (interaction.customId == `condtkg_${interaction.user.id}`) {
			let gdata = await game.findOne({
				with: interaction.user.id
			})
			if (!gdata) return;
			if (!gdata.coins || gdata.coins == null) return;
			if (!gdata.with || gdata.with == null) return;
			if (!gdata.msgID || gdata.msgID == null) return;
			gdata.game = "takribi"
			await gdata.save()
			await interaction.deferReply({
				ephemeral: true
			})
			let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.id)
			if (!usraccano) return interaction.editReply({
				content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
				ephemeral: true
			})
			gdata.time = timestamp(moment(ms("40s")) + Date.now())
			await gdata.save()
			let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
				name: `📊 لعبة الرقم التقريبي:`,
				value: `> في كل جولة سوف تحصل على رقم عشوائي, و انت عليك ان تحصل على نفس الرقم او اقل منه, الذي يحصل عليه يفوز, في حال الحصول على اعلى تعتبر خاسر, جولة واحدة لكل تحدي ! انهاء الجولة يعني انهاء التحدي, التعادل ليس فوزا !`
			}, {
				name: `المبلغ:`,
				value: `${parseInt(gdata.coins)}`
			})
			let button_yes = new MessageButton().setCustomId(`yescond_${gdata.msgID}`).setLabel("قبول مع شروط").setStyle("SUCCESS")
			let button_no = new MessageButton().setCustomId(`notkg_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
			let row = new MessageActionRow().setComponents(button_yes, button_no)
			interaction.editReply({
				content: `> لقد تم اختيار العبة هي : \`الرقم التقريبي\` !!`,
				ephemeral: true
			})
			client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
				embeds: [embed_edit],
				content: `> بانتظار رد من ${usraccano} ...
${usraccano} هل تقبل الشروط (ارقامك تظهر بالشات)؟`,
				components: [row]
			})).catch()
		} else if (interaction.customId == `notkg_${interaction.message.id}`) {
			let gdata = await game.findOne({
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(gdata.id)
			let wthusrgame = client.users.cache.get(gdata.with)
			if (stusrgame.id !== interaction.user.id && wthusrgame.id !== interaction.user.id) return;
			await game.findOneAndDelete({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (stusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `>  تم إلغاء التحدي بنجاح ${interaction.user} ! 
> || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch()
			}
			if (wthusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `>  تم رفض التحدي بنجاح ${interaction.user} ! 
> || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch()
			}
			let data = await db.findOne({
				id: stusrgame.id
			})
			if (!data) {
				data = await db.create({
					id: stusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			let data2 = await db.findOne({
				id: wthusrgame.id
			})
			if (!data2) {
				data2 = await db.create({
					id: wthusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			data2.status_playing = "no";
			await data2.save()
			data.status_playing = "no";
			await data.save()
		} else if (interaction.customId == `yestkg_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			let nums = ["1", "2"]
			let numr = nums[Math.floor(Math.random() * nums.length)]
			let usrchoose = "";
			let notrole = "";
			if (numr == "1") {
				usrchoose = gdatawith.id;
				notrole = gdatawith.with;
				statusuingame1 = `**Playing..**`;
				statusuingame2 = "**Waiting..**"
			}
			if (numr == "2") {
				usrchoose = gdatawith.with;
				notrole = gdatawith.id;
				statusuingame1 = "**Waiting..**";
				statusuingame2 = `**Playing..**`
			}
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`الرقم التقريبي\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			const firstNumbers = [];
			const secondNumbers = [];
			const thirdNumbers = [];
			const fourthNumbers = [];
			const fiveNumbers = [];
			for (let first = 19; first <= 133; first += 3) {
				firstNumbers.push(first);
				secondNumbers.push(Math.round(first / 11.5));
				thirdNumbers.push(Math.round(first / 5.9));
				fourthNumbers.push(Math.round(first / 4.3));
				fiveNumbers.push(Math.round(first / 2.95));
			}
			const randomIndex = Math.floor(Math.random() * firstNumbers.length);
			const a = secondNumbers[randomIndex];
			const b = thirdNumbers[randomIndex];
			const c = fourthNumbers[randomIndex];
			const d = fiveNumbers[randomIndex]
			const numaksa = firstNumbers[randomIndex];
			let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${numaksa}**`).addFields({
				name: `${stusrgame.tag}`,
				value: `> ${statusuingame1}`
			}, {
				name: `${wthusrgame.tag}`,
				value: `> ${statusuingame2}`
			})
			let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdatawith.msgID}`).setLabel(`${a} - ${b}`).setStyle("PRIMARY")
			let button_finish = new MessageButton().setCustomId(`finishtk_${gdatawith.msgID}`).setLabel("finish").setStyle("SUCCESS")
			let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdatawith.msgID}`).setLabel(`${c} - ${d}`).setStyle("PRIMARY")
			let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
			client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
				embeds: [embed_edit_nrd_game],
				content: `<@!${usrchoose}>\n انه دورك`,
				components: [row]
			})).catch()
			let tkdata = await takribi.findOne({
				msgID: gdatawith.msgID
			})
			if (!tkdata) {
				tkdata = await takribi.create({
					msgID: gdatawith.msgID,
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					max_number: numaksa,
					number_players_done: 0,
					number_smaller1: a,
					number_smaller2: b,
					number_greater1: c,
					number_greater2: d,
					conditions: false
				})
			} else {
				tkdata = await takribi.findOneAndUpdate({
					msgID: gdatawith.msgID
				}, {
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					max_number: numaksa,
					number_players_done: 0,
					number_smaller1: a,
					number_smaller2: b,
					number_greater1: c,
					number_greater2: d,
					conditions: false
				})
			}
			let tkusrdata = await tkusr.findOne({
				id: gdatawith.id
			})
			if (!tkusrdata) {
				tkusrdata = await tkusr.create({
					id: gdatawith.id,
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusrdata = await tkusr.findOneAndUpdate({
					id: gdatawith.id
				}, {
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			let tkusr1data = await tkusr.findOne({
				id: gdatawith.with
			})
			if (!tkusr1data) {
				tkusr1data = await tkusr.create({
					id: gdatawith.with,
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusr1data = await tkusr.findOneAndUpdate({
					id: gdatawith.with
				}, {
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			return;
		} else if (interaction.customId == `yescond_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			let nums = ["1", "2"]
			let numr = nums[Math.floor(Math.random() * nums.length)]
			let usrchoose = "";
			let notrole = "";
			let controllingidd = "";
			if (numr == "1") {
				usrchoose = gdatawith.id;
				notrole = gdatawith.with;
				controllingidd = gdatawith.id;
				statusuingame1 = `**Playing..**
> = **0**`;
				statusuingame2 = `**Waiting..**
> = **0**`
			}
			if (numr == "2") {
				usrchoose = gdatawith.with;
				notrole = gdatawith.id;
				controllingidd = gdatawith.with;
				statusuingame1 = `**Waiting..**
> = **0**`;
				statusuingame2 = `**Playing..**
> = **0**`
			}
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`الرقم التقريبي\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			const firstNumbers = [];
			const secondNumbers = [];
			const thirdNumbers = [];
			const fourthNumbers = [];
			const fiveNumbers = [];
			for (let first = 19; first <= 133; first += 3) {
				firstNumbers.push(first);
				secondNumbers.push(Math.round(first / 11.5));
				thirdNumbers.push(Math.round(first / 5.9));
				fourthNumbers.push(Math.round(first / 4.3));
				fiveNumbers.push(Math.round(first / 2.95));
			}
			const randomIndex = Math.floor(Math.random() * firstNumbers.length);
			const a = secondNumbers[randomIndex];
			const b = thirdNumbers[randomIndex];
			const c = fourthNumbers[randomIndex];
			const d = fiveNumbers[randomIndex]
			const numaksa = firstNumbers[randomIndex];
			let embed_edit_nrd_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${numaksa}**`).addFields({
				name: `${stusrgame.tag}`,
				value: `> ${statusuingame1}`
			}, {
				name: `${wthusrgame.tag}`,
				value: `> ${statusuingame2}`
			})
			let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdatawith.msgID}`).setLabel(`${a} - ${b}`).setStyle("PRIMARY")
			let button_finish = new MessageButton().setCustomId(`finishtk_${gdatawith.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
			let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdatawith.msgID}`).setLabel(`${c} - ${d}`).setStyle("PRIMARY")
			let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
			client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
				embeds: [embed_edit_nrd_game],
				content: `<@!${usrchoose}>\n انه دورك`,
				components: [row]
			})).catch()
			let tkdata = await takribi.findOne({
				msgID: gdatawith.msgID
			})
			if (!tkdata) await takribi.create({
				msgID: gdatawith.msgID,
				idstusr: gdatawith.id,
				role: usrchoose,
				notrole: notrole,
				controllingid: controllingidd,
				max_number: numaksa,
				number_players_done: 0,
				number_smaller1: a,
				number_smaller2: b,
				number_greater1: c,
				number_greater2: d
			})
			else await takribi.findOneAndUpdate({
				msgID: gdatawith.msgID
			}, {
				idstusr: gdatawith.id,
				role: usrchoose,
				notrole: notrole,
				max_number: numaksa,
				controllingid: controllingidd,
				number_players_done: 0,
				number_smaller1: a,
				number_smaller2: b,
				number_greater1: c,
				number_greater2: d
			})
			let tkusrdata = await tkusr.findOne({
				id: gdatawith.id
			})
			if (!tkusrdata) {
				tkusrdata = await tkusr.create({
					id: gdatawith.id,
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusrdata = await tkusr.findOneAndUpdate({
					id: gdatawith.id
				}, {
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			let tkusr1data = await tkusr.findOne({
				id: gdatawith.with
			})
			if (!tkusr1data) {
				tkusr1data = await tkusr.create({
					id: gdatawith.with,
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusr1data = await tkusr.findOneAndUpdate({
					id: gdatawith.with
				}, {
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			return;
		} else if (interaction.customId == `finishtk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			const conditions = !data.conditions
			let datausr = await tkusr.findOne({
				id: data.role,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			if (conditions === false) {
				if (data.notrole !== interaction.user.id && data.role !== interaction.user.id) return;
				else if (data.controllingid !== interaction.user.id) return interaction.reply({
					content: `انه ليس دورك !`,
					ephemeral: true
				})
			} else if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.reply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			else if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			data.number_players_done = parseInt(data.number_players_done) + 1;
			await data.save()
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if (parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					data.controllingid = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					if (conditions === true) {
						return interaction.reply({
							content: `> تم الأنتهاء من اللعب ، انتظر صديقك حتى يلعب !`,
							ephemeral: true
						}).then(async () => {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${stusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
						});
					} else await interaction.deferUpdate().then(async () => {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
					});
				} else if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					data.controllingid = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					if (conditions === true) {
						return interaction.reply({
							content: `> تم الأنتهاء من اللعب ، انتظر صديقك حتى يلعب !`,
							ephemeral: true
						}).then(async () => {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${wthusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
						});
					} else await interaction.deferUpdate().then(async () => {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
					});
				}
			} else if (parseInt(dataup.number_players_done) == 2) {
				if (conditions === true) {
					interaction.reply({
						content: `> تم الأنتهاء من اللعب , سيتم إظهار النتائج بعد لحظات !`,
						ephemeral: true
					});
				} else await interaction.deferUpdate();
				if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) > parseInt(datausrtk2.result)) {
					let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
					})
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game_tm],
						content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
						components: []
					})).catch()
					await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
					let datacoinsusr1st = await db.findOne({
						id: stusrgame.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: stusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let datacoinsusr2st = await db.findOne({
						id: wthusrgame.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr = await db.create({
							id: wthusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.losenumber += 1
					datacoinsusr1st.totallost += parseInt(gdata.coins)
					datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.winnumber += 1
					datacoinsusr2st.totalwinnings += parseInt(total)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: stusrgame.id
					})
					await tkusr.findOneAndDelete({
						id: stusrgame.id,
						msgID: interaction.message.id
					})
					await tkusr.findOneAndDelete({
						id: wthusrgame.id,
						msgID: interaction.message.id
					})
					await game.findOneAndDelete({
						id: stusrgame.id,
						with: wthusrgame.id,
						msgID: interaction.message.id
					})
					return;
				} else if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
					let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
					})
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game_tm],
						content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
						components: []
					})).catch()
					await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 1, gdata.coins)
					let datacoinsusr1st = await db.findOne({
						id: stusrgame.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: stusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let datacoinsusr2st = await db.findOne({
						id: wthusrgame.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr = await db.create({
							id: wthusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.tienumber += 1
					datacoinsusr2st.tienumber += 1
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: stusrgame.id
					})
					await tkusr.findOneAndDelete({
						id: stusrgame.id,
						msgID: interaction.message.id
					})
					await tkusr.findOneAndDelete({
						id: wthusrgame.id,
						msgID: interaction.message.id
					})
					await game.findOneAndDelete({
						id: stusrgame.id,
						with: wthusrgame.id,
						msgID: interaction.message.id
					})
					return;
				} else if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
					let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
					})
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game_tm],
						content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
						components: []
					})).catch()
					await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
					let datacoinsusr1st = await db.findOne({
						id: stusrgame.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: stusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.winnumber += 1
					datacoinsusr1st.totalwinnings += parseInt(total)
					let datacoinsusr2st = await db.findOne({
						id: wthusrgame.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr = await db.create({
							id: wthusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.losenumber += 1
					datacoinsusr2st.totalwinnings += parseInt(gdata.coins)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: stusrgame.id
					})
					await tkusr.findOneAndDelete({
						id: stusrgame.id,
						msgID: interaction.message.id
					})
					await tkusr.findOneAndDelete({
						id: wthusrgame.id,
						msgID: interaction.message.id
					})
					await game.findOneAndDelete({
						id: stusrgame.id,
						with: wthusrgame.id,
						msgID: interaction.message.id
					})
					return;
				} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
					let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
					})
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game_tm],
						content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
						components: []
					})).catch()
					await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
					let datacoinsusr1st = await db.findOne({
						id: stusrgame.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: stusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.winnumber += 1
					datacoinsusr1st.totalwinnings += parseInt(total)
					let datacoinsusr2st = await db.findOne({
						id: wthusrgame.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr = await db.create({
							id: wthusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.losenumber += 1
					datacoinsusr2st.totallost += parseInt(gdata.coins)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: stusrgame.id
					})
					await tkusr.findOneAndDelete({
						id: stusrgame.id,
						msgID: interaction.message.id
					})
					await tkusr.findOneAndDelete({
						id: wthusrgame.id,
						msgID: interaction.message.id
					})
					await game.findOneAndDelete({
						id: stusrgame.id,
						with: wthusrgame.id,
						msgID: interaction.message.id
					})
					return;
				} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
					let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
						name: `${stusrgame.tag}`,
						value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
					})
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game_tm],
						content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
						components: []
					})).catch()
					await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
					let datacoinsusr1st = await db.findOne({
						id: stusrgame.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: stusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
					datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
					datacoinsusr1st.challengesnumber += 1
					datacoinsusr1st.losenumber += 1
					datacoinsusr1st.totallost += parseInt(gdata.coins)
					let datacoinsusr2st = await db.findOne({
						id: wthusrgame.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr = await db.create({
							id: wthusrgame.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * TAX_RATE;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
					datacoinsusr2st.challengesnumber += 1
					datacoinsusr2st.winnumber += 1
					datacoinsusr2st.totalwinnings += parseInt(total)
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: stusrgame.id
					})
					await tkusr.findOneAndDelete({
						id: stusrgame.id,
						msgID: interaction.message.id
					})
					await tkusr.findOneAndDelete({
						id: wthusrgame.id,
						msgID: interaction.message.id
					})
					await game.findOneAndDelete({
						id: stusrgame.id,
						with: wthusrgame.id,
						msgID: interaction.message.id
					})
					return;
				}
				return;
			}
		} else if (interaction.customId == `arkam1tk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			const conditions = !data.conditions
			let datausr = await tkusr.findOne({
				id: data.role,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			if (conditions === false) {
				if (data.notrole !== interaction.user.id && data.role !== interaction.user.id) return;
				else if (data.controllingid !== interaction.user.id) return interaction.reply({
					content: `انه ليس دورك !`,
					ephemeral: true
				})
			} else if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.reply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			else if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			let urnum = getRandomNumbertakribi(parseInt(data.number_smaller1), parseInt(data.number_smaller2))
			datausr.numbers.push(urnum)
			await datausr.save()
			datausr.result = parseInt(datausr.result) + urnum;
			await datausr.save()
			let datausrup = await tkusr.findOne({
				id: data.role,
				msgID: interaction.message.id
			})
			if (!datausrup) return;
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if ((parseInt(data.max_number) < parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: data.role,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> **Playing..**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> Done`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${stusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								}
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: dataup.controllingid == stusrgame.id ? `> ${stusrgame}\n اصبح دورك !` : `> ${wthusrgame}\n يتحكم لـ ${stusrgame}!`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					} else if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> Done`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> **Playing..**`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: dataup.controllingid == wthusrgame.id ? `> ${wthusrgame}\n اصبح دورك !` : `> ${stusrgame}\n يتحكم لـ ${wthusrgame}!`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
					return;
				} else if (parseInt(dataup.number_players_done) >= 2) {
					if (conditions === true) {
						interaction.reply({
							content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ephemeral: true
						}).then(async () => {
							const userIdToNotify = interaction.user.id;
							const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
							if (userToNotify) {
								try {
									let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                            اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
									await new Promise(resolve => setTimeout(resolve, 90000));
									msgg.delete();
								} catch { }
							} else { }
						});
					} else await interaction.deferUpdate();
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						}));
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 1, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.tienumber += 1
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.tienumber += 1
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					return;
				}
			} else if ((parseInt(data.max_number) == parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: data.role,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						data.controllingid = stusrgame.id;
						data.notrole = wthusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> **Playing..**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> Done`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
                                > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${stusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						data.controllingid = wthusrgame.id;
						data.notrole = stusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> Done`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> **Playing..**`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
                                > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${wthusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
				} else if (parseInt(dataup.number_players_done) >= 2) {
					if (conditions === true) {
						interaction.reply({
							content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ephemeral: true
						}).then(async () => {
							const userIdToNotify = interaction.user.id;
							const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
							if (userToNotify) {
								try {
									let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                            اصبح مجموعك ${datausrup.result}
                            > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
									await new Promise(resolve => setTimeout(resolve, 90000));
									msgg.delete();
								} catch { }
							} else { }
						});
					} else await interaction.deferUpdate();
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 1, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.tienumber += 1
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr2st.tienumber += 1
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}
			} else if (conditions === true) return interaction.reply({
				content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        المتبقي على الرقم الأقصى: ${parseInt(data.max_number) - parseInt(datausrup.result)}
        ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`,
				ephemeral: true
			}).then(async () => {
				const userIdToNotify = interaction.user.id;
				const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
				if (userToNotify) {
					try {
						let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    المتبقي على الرقم الأقصى: ${parseInt(data.max_number) - parseInt(datausrup.result)}
        ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`);
						await new Promise(resolve => setTimeout(resolve, 90000));
						msgg.delete();
					} catch { }
				} else { }
			});
			else {
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.role == stusrgame.id) {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: dataup.controllingid == stusrgame.id ? `> ${stusrgame}\n اصبح دورك !` : `> ${wthusrgame}\n يتحكم لـ ${stusrgame}!`,
							components: [row]
						})).catch()
						await interaction.deferUpdate();
					} else {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: dataup.controllingid == wthusrgame.id ? `> ${wthusrgame}\n اصبح دورك !` : `> ${stusrgame}\n يتحكم لـ ${wthusrgame}!`,
							components: [row]
						})).catch()
						await interaction.deferUpdate();
					}
				} else if (parseInt(dataup.number_players_done) == 0) {
					if (data.role == stusrgame.id) {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Waiting..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
						await interaction.deferUpdate()
					} else {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Waiting..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
						await interaction.deferUpdate()
					}
				}
				return;
			};
		} else if (interaction.customId == `arkam2tk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			const conditions = !data.conditions
			let datausr = await tkusr.findOne({
				id: data.role,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			if (conditions === false) {
				if (data.notrole !== interaction.user.id && data.role !== interaction.user.id) return;
				else if (data.controllingid !== interaction.user.id) return interaction.reply({
					content: `انه ليس دورك !`,
					ephemeral: true
				})
			} else if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.reply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			else if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			let urnum = getRandomNumbertakribi(parseInt(data.number_greater1), parseInt(data.number_greater2))
			datausr.numbers.push(urnum)
			await datausr.save()
			datausr.result = parseInt(datausr.result) + urnum;
			await datausr.save()
			let datausrup = await tkusr.findOne({
				id: data.role,
				msgID: interaction.message.id
			})
			if (!datausrup) return;
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if ((parseInt(data.max_number) < parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: data.role,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> **Playing..**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> Done`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${stusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								}
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: dataup.controllingid == stusrgame.id ? `> ${stusrgame}\n اصبح دورك !` : `> ${wthusrgame}\n يتحكم لـ ${stusrgame}!`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					} else if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> Done`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> **Playing..**`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: dataup.controllingid == wthusrgame.id ? `> ${wthusrgame}\n اصبح دورك !` : `> ${stusrgame}\n يتحكم لـ ${wthusrgame}!`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
					return;
				} else if (parseInt(dataup.number_players_done) >= 2) {
					if (conditions === true) {
						interaction.reply({
							content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ephemeral: true
						}).then(async () => {
							const userIdToNotify = interaction.user.id;
							const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
							if (userToNotify) {
								try {
									let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                            اصبح مجموعك ${datausrup.result}
              > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`);
									await new Promise(resolve => setTimeout(resolve, 90000));
									msgg.delete();
								} catch { }
							} else { }
						});
					} else await interaction.deferUpdate();
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						}));
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 1, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.tienumber += 1
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.tienumber += 1
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					return;
				}
			} else if ((parseInt(data.max_number) == parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: data.role,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						data.controllingid = stusrgame.id;
						data.notrole = wthusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> **Playing..**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> Done`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
                                > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${stusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						data.controllingid = wthusrgame.id;
						data.notrole = stusrgame.id;
						await data.save()
						if (conditions === true) {
							return interaction.reply({
								content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
								ephemeral: true
							}).then(async () => {
								let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
									name: `${stusrgame.tag}`,
									value: `> Done`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> **Playing..**`
								})
								let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
								let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("SUCCESS")
								let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
								let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
								client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
									embeds: [embed_finish_tk_game],
									content: `> ${wthusrgame}\n اصبح دورك !`,
									components: [row]
								})).catch()
							}).then(async () => {
								const userIdToNotify = interaction.user.id;
								const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
								if (userToNotify) {
									try {
										let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                                اصبح مجموعك ${datausrup.result}
                                > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
										await new Promise(resolve => setTimeout(resolve, 90000));
										msgg.delete();
									} catch { }
								} else { }
							});
						} else {
							let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
								name: `${stusrgame.tag}`,
								value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
							})
							let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle("PRIMARY")
							let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle("DANGER").setDisabled(true)
							let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle("PRIMARY")
							let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game],
								content: `> ${wthusrgame}\n اصبح دورك !`,
								components: [row]
							})).catch()
							return interaction.deferUpdate();
						}
					}
				} else if (parseInt(dataup.number_players_done) >= 2) {
					if (conditions === true) {
						interaction.reply({
							content: `لقد حصلت على **${urnum}**
              اصبح مجموعك ${datausrup.result}
              > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ephemeral: true
						}).then(async () => {
							const userIdToNotify = interaction.user.id;
							const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
							if (userToNotify) {
								try {
									let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                            اصبح مجموعك ${datausrup.result}
                            > تهانينا لقد حصلت على الرقم المطلوب و تم انهاء دورك.`);
									await new Promise(resolve => setTimeout(resolve, 90000));
									msgg.delete();
								} catch { }
							} else { }
						});
					} else await interaction.deferUpdate();
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 1, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.tienumber += 1
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr2st.tienumber += 1
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", stusrgame, wthusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.winnumber += 1
						datacoinsusr1st.totalwinnings += parseInt(total)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
						datacoinsusr2st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.losenumber += 1
						datacoinsusr2st.totallost += parseInt(gdata.coins)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					} else if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch()
						await allbetssend("رقم التقريبي", wthusrgame, stusrgame, 0, gdata.coins)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						datacoinsusr1st.cashback += parseInt(parseInt(gdata.coins) * 0.02)
						datacoinsusr1st.challengesnumber += 1
						datacoinsusr1st.losenumber += 1
						datacoinsusr1st.totallost += parseInt(gdata.coins)
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * TAX_RATE;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.challengesnumber += 1
						datacoinsusr2st.winnumber += 1
						datacoinsusr2st.totalwinnings += parseInt(total)
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}
			} else if (conditions === true) return interaction.reply({
				content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        المتبقي على الرقم الأقصى: ${parseInt(data.max_number) - parseInt(datausrup.result)}
        ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`,
				ephemeral: true
			}).then(async () => {
				const userIdToNotify = interaction.user.id;
				const userToNotify = interaction.guild.members.cache.get(userIdToNotify);
				if (userToNotify) {
					try {
						let msgg = await userToNotify.send(`لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    المتبقي على الرقم الأقصى: ${parseInt(data.max_number) - parseInt(datausrup.result)}
        ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`);
						await new Promise(resolve => setTimeout(resolve, 90000));
						msgg.delete();
					} catch { }
				} else { }
			});
			else {
				if (parseInt(dataup.number_players_done) == 1) {
					if (data.role == stusrgame.id) {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: dataup.controllingid == stusrgame.id ? `> ${stusrgame}\n اصبح دورك !` : `> ${wthusrgame}\n يتحكم لـ ${stusrgame}!`,
							components: [row]
						})).catch()
						await interaction.deferUpdate();
					} else {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> Done
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: dataup.controllingid == wthusrgame.id ? `> ${wthusrgame}\n اصبح دورك !` : `> ${stusrgame}\n يتحكم لـ ${wthusrgame}!`,
							components: [row]
						})).catch()
						await interaction.deferUpdate();
					}
				} else if (parseInt(dataup.number_players_done) == 0) {
					if (data.role == stusrgame.id) {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Waiting..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk1.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
						await interaction.deferUpdate()
					} else {
						let embed_finish_tk_game = new MessageEmbed().setTitle("بيانات التحدي").setDescription(`اقصى رقم : **${dataup.max_number}**`).addFields({
							name: `${stusrgame.tag}`,
							value: `> **Waiting..**
> ${datausrtk1.numbers.join(" + ") || ""} = **${parseInt(datausrtk1.result) || 0}**${parseInt(datausrtk1.result) > 0 && parseInt(datausrtk1.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk1.result)})**` : parseInt(datausrtk1.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk1.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""}`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**
> ${datausrtk2.numbers.join(" + ") || ""} = **${parseInt(datausrtk2.result) || 0}**${parseInt(datausrtk2.result) > 0 && parseInt(datausrtk2.result) < parseInt(dataup.max_number) ? ` **(متبقي ${parseInt(dataup.max_number) - parseInt(datausrtk2.result)})**` : parseInt(datausrtk2.result) === parseInt(dataup.max_number) ? " **(تهاني)**" : parseInt(datausrtk2.result) > parseInt(dataup.max_number) ? " **(تخطي)**" : ""} `
						})
						let button_arkam1 = new MessageButton().setCustomId(`arkam1tk_${gdata.msgID}`).setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_smaller1))
						let button_finish = new MessageButton().setCustomId(`finishtk_${gdata.msgID}`).setLabel("finish").setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1) ? "DANGER" : "SUCCESS").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) >= parseInt(dataup.number_smaller1))
						let button_arkam2 = new MessageButton().setCustomId(`arkam2tk_${gdata.msgID}`).setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`).setStyle(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1) ? "DANGER" : "PRIMARY").setDisabled(parseInt(dataup.max_number) - parseInt(datausrtk2.result) < parseInt(dataup.number_greater1))
						let row = new MessageActionRow().setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch()
						await interaction.deferUpdate()
					}
				}
				return;
			};
		} else if (interaction.customId.split('_')[0] === 'move') {
			await makeMove(interaction.user, interaction.customId.split('_')[1], interaction.customId.split('_')[2], interaction);
		} else if (interaction.customId === 'startBet') {
			if (gamegameStarted) {
				await interaction.reply({
					content: 'اللعبة بدأت بالفعل. لا يمكنك وضع رهانات الآن',
					ephemeral: true
				});
				return;
			}
			const user = interaction.user;
			const member = interaction.guild.members.cache.get(user.id);
			await interaction.channel.permissionOverwrites.create(member, {
				SEND_MESSAGES: true
			});
			await interaction.reply({
				content: 'اكتب رهانك. لديك 5 ثواني',
				ephemeral: true
			});
			setTimeout(async () => {
				await interaction.channel.permissionOverwrites.delete(member);
			}, 5000);
		} else if (interaction.customId === 'withdrawWinnings') {
			let multi = currentMultiplier
			if (!gamegameStarted) {
				await interaction.reply({
					content: 'اللعبة لم تبدأ بعد',
					ephemeral: true
				});
				return;
			}
			const user = interaction.user;
			if (betAmounts.has(user.id)) {
				const betAmount = betAmounts.get(user.id);
				let data = await db.findOne({
					id: user.id
				});
				if (!data) {
					data = await db.create({
						id: user.id,
						coins: 0,
						status_playing: "no"
					});
				}
				data.coins += (parseInt(betAmount * multi));
				data.status_playing = "no";
				data.totalwinnings += (parseInt(betAmount * multi));
				data.winnumber += 1
				await data.save();
				let channeltosend = client.channels.cache.get(allbetschannelcrashid)
				let embed = new MessageEmbed().setDescription(`**<@${user.id}> سحب مبلغ ${(parseInt(betAmount * multi)).toLocaleString()} من لعبة الطائرة :tada:**`);
				await channeltosend.send({
					embeds: [embed]
				});
				await channeltosend.send({
					files: [linelineline]
				});
				betAmounts.delete(user.id);
				await interaction.reply({
					content: `لقد سحبت بنجاح مبلغ ${(parseInt(betAmount * multi)).toLocaleString()}!`,
					ephemeral: true
				});
			} else {
				await interaction.reply({
					content: 'ليس لديك رهان',
					ephemeral: true
				});
			}
		} else if (interaction.customId === "buyroomprv") {
			const count = await privdata.countDocuments({});
			if (count >= 6) {
				return interaction.reply({
					content: "> **ليس هناك رومات خاصة متاحة حالياً. يرجى المحاولة لاحقاً.**",
					ephemeral: true
				});
			}
			const amount = 30000;
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) {
				data = await db.create({
					id: interaction.user.id,
					coins: 0,
					status_playing: "no"
				});
			}
			if (data.coins < amount) {
				return interaction.reply({
					content: "> **ليس لديك رصيد كافٍ لشراء الروم.**",
					ephemeral: true
				});
			}
			const embed = new MessageEmbed().setDescription(`انت هتشتري روم خاصة بمبلغ: ${amount}\nيرجى اختيار صلاحية الروم:`);
			const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('room_visibility').setPlaceholder('اختر صلاحية الروم').addOptions([{
				label: 'روم خاصة (مخفية عن الأعضاء)',
				description: 'لن يتمكن أي أحد من رؤية الروم إلا أنت',
				value: 'private',
			}, {
				label: 'روم ظاهرة (يراها الجميع)',
				description: 'الروم ستكون مرئية لجميع الأعضاء لكن لا يستطيعون الكتابة',
				value: 'public',
			},]));
			await interaction.reply({
				embeds: [embed],
				components: [row],
				ephemeral: true
			});
		} else if (interaction.customId === 'delete_ticket') {
			const userId = interaction.message.mentions.users.first().id;
			const userName = interaction.message.mentions.users.first().username;
			const now = Date.now();
			const cooldownAmount = 5 * 1000;
			if (deleteCooldowns.has(userId)) {
				const expirationTime = deleteCooldowns.get(userId) + cooldownAmount;
				if (now < expirationTime) {
					const timeLeft = (expirationTime - now) / 1000;
					return interaction.reply({
						content: `يرجى الانتظار ${Math.ceil(timeLeft)} ثواني قبل محاولة الضغط على الزر مرة أخرى.`,
						ephemeral: true
					});
				}
			}
			deleteCooldowns.set(userId, now);
			await interaction.reply(`**> سيتم حذف الروم بعد 10 ثواني من قبل <@${interaction.user.id}>.**`);
			setTimeout(async () => {
				const channel = interaction.channel;
				const chatHistory = await channel.messages.fetch();
				const chatLogs = chatHistory.map(m => `${m.author.tag}: ${m.content}`).join('<br>');
				const htmlDocument = `
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سجل تذكرة</title>
</head>
<body>
<p>${chatLogs}</p>
</body>
</html>`;
				const fileName = `ticket-${userName}.html`;
				fs.writeFileSync(fileName, htmlDocument);
				const logChannel = client.channels.cache.get(logRoomSupport);
				if (logChannel) {
					const attachment = new MessageAttachment(fs.readFileSync(fileName), fileName);
					await logChannel.send({
						content: 'تم حذف تذكرة، إليك السجل:',
						files: [attachment]
					});
					fs.unlinkSync(fileName);
				}
				try {
					await channel.delete();
				} catch { }
			}, 10000);
		} else if (interaction.customId === 'claim_ticket') {
			const userId = interaction.message.mentions.users.first().id;
			const userName = interaction.message.mentions.users.first().username;
			const now = Date.now();
			const cooldownAmount = 5 * 1000;
			if (!(interaction.member.roles.cache.has(ownerrole) || interaction.member.roles.cache.has(supportRoleId) || interaction.member.roles.cache.has(setlimitrole))) return;
			const supportrole = interaction.guild.roles.cache.get(supportRoleId);
			await interaction.channel.permissionOverwrites.delete(supportrole);
			await interaction.channel.permissionOverwrites.create(supportrole, {
				SEND_MESSAGES: false,
				VIEW_CHANNEL: true,
				READ_MESSAGE_HISTORY: true,
				ATTACH_FILES: false
			});
			await interaction.channel.permissionOverwrites.create(interaction.member, {
				SEND_MESSAGES: true,
				VIEW_CHANNEL: true,
				READ_MESSAGE_HISTORY: true,
				ATTACH_FILES: true
			});
			const embed = new MessageEmbed().setTitle('**> Support Tickets.**').setDescription(`**مرحبا بك في التكت الدعم الفني ، للمساعدة انتظر رد الدعم الفني واكتب سبب فتح التذكرة .**
مسؤول التذكرة: ${interaction.user}`);
			const deleteRow = new MessageActionRow().addComponents(new MessageButton().setCustomId('delete_ticket').setLabel('حذف').setStyle('DANGER'), new MessageButton().setCustomId(`unclaim_${interaction.user.id}`).setLabel('ترك').setStyle('SECONDARY'));
			await interaction.reply(`**> تم استلام التذكرة من قبل المسؤول <@${interaction.user.id}>.**`);
			await interaction.message.edit({
				content: `<@${userId}> ${interaction.user}`,
				embeds: [embed],
				components: [deleteRow]
			});
			await interaction.channel.setName(`by-${interaction.user.username}`).catch();
		} else if (interaction.customId === `unclaim_${interaction.user.id}`) {
			const userId = interaction.message.mentions.users.first().id;
			const userName = interaction.message.mentions.users.first().username;
			const now = Date.now();
			const cooldownAmount = 5 * 1000;
			if (!(interaction.member.roles.cache.has(ownerrole) || interaction.member.roles.cache.has(supportRoleId) || interaction.member.roles.cache.has(setlimitrole))) return;
			const supportRole = interaction.guild.roles.cache.get(supportRoleId);
			await interaction.channel.permissionOverwrites.delete(interaction.member);
			await interaction.channel.permissionOverwrites.create(supportRole, {
				SEND_MESSAGES: true,
				VIEW_CHANNEL: true,
				READ_MESSAGE_HISTORY: true,
				ATTACH_FILES: true
			});
			const embed = new MessageEmbed().setTitle('**> Support Tickets.**').setDescription(`**مرحبا بك في التكت الدعم الفني ، للمساعدة انتظر رد الدعم الفني واكتب سبب فتح التذكرة .**`);
			const deleteRow = new MessageActionRow().addComponents(new MessageButton().setCustomId('delete_ticket').setLabel('حذف').setStyle('DANGER'), new MessageButton().setCustomId(`claim_ticket`).setLabel('استلام').setStyle('SECONDARY'));
			await interaction.reply(`**> تم ترك التذكرة من قبل المسؤول <@${interaction.user.id}>.**`);
			await interaction.message.edit({
				content: `<@${userId}> <@&${supportRoleId}>`,
				embeds: [embed],
				components: [deleteRow]
			});
			await interaction.channel.setName(`ticket-${userName}`).catch();
		} else if (interaction.customId === 'normal_spin') {
			let invv = await setinv.findOne();
			if (!invv) await setinv.create({
				spinsystem: "off"
			});
			if (invv.spinsystem == "off") return interaction.reply('🚫 عجلة الحظ معطلة حاليًا.');
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) {
				data = await db.create({
					id: interaction.user.id,
					coins: 0,
					status_playing: "no",
					cashback: 0,
					points: 0
				});
			}
			const userPointsCount = data.points;
			const prizeChannel = interaction.guild.channels.cache.get(channelwinningspin);
			if (userPointsCount < 1) {
				return interaction.reply({
					content: `\nليس لديك نقاط كافية للف العجلة.\nنقاطك الحالية: **\`${userPointsCount}\`**`,
					ephemeral: true
				});
			}
			data.points -= 1;
			await data.save();
			const prize = getRandomPrize('normal');
			if (prizeChannel) {
				await prizeChannel.send(`🥳 مبروك <@${interaction.user.id}>! فزت بـ **${prize}**!`);
				prizeChannel.send({
					files: [linelineline]
				});
			}
			return interaction.reply(`🎉 مبروك <@${interaction.user.id}>! فزت بـ **${prize}**!`);
		} else if (interaction.customId === 'legendary_spin') {
			let invv = await setinv.findOne();
			if (!invv) await setinv.create({
				spinsystem: "off"
			});
			if (invv.spinsystem == "off") return interaction.reply('🚫 عجلة الحظ معطلة حاليًا.');
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) {
				data = await db.create({
					id: interaction.user.id,
					coins: 0,
					status_playing: "no",
					cashback: 0,
					points: 0
				});
			}
			const userPointsCount = data.points;
			const prizeChannel = interaction.guild.channels.cache.get(channelwinningspin);
			if (userPointsCount < 2) {
				return interaction.reply({
					content: `\nليس لديك نقاط كافية للف العجلة.\nنقاطك الحالية: **\`${userPointsCount}\`**`,
					ephemeral: true
				});
			}
			data.points -= 2;
			await data.save();
			const prize = getRandomPrize('legendary');
			if (prizeChannel) {
				await prizeChannel.send(`🥳 مبروك <@${interaction.user.id}>! فزت بـ **${prize}**!`);
				prizeChannel.send({
					files: [linelineline]
				});
			}
			return interaction.reply(`🎉 مبروك <@${interaction.user.id}>! فزت بـ **${prize}**!`);
		} else if (interaction.customId === 'redeem') {
			const modal = new Modal().setCustomId('redeemModal').setTitle("Code Redemption");
			const tashferInput = new TextInputComponent().setCustomId('code').setLabel("Redeem Code").setPlaceholder('اكتب الكود هنا').setStyle('SHORT').setRequired(true);
			const firstActionRow = new MessageActionRow().addComponents(tashferInput);
			modal.addComponents(firstActionRow);
			await interaction.showModal(modal);
		} else if (interaction.customId === 'withdrawcredit') {
			let adasd = await kombe.findOne();
			if (!adasd) return interaction.reply({
				content: "> **السحب غير متاح حاليا. يرجى المحاولة في وقت لاحق.**",
				ephemeral: true
			})
			if (adasd.sahbsett != "on") return interaction.reply({
				content: "> **السحب غير متاح حاليا. يرجى المحاولة في وقت لاحق.**",
				ephemeral: true
			})
			const modal = new Modal().setCustomId('withdrawcreditModal').setTitle("سحب رصيد");
			const tashferInput = new TextInputComponent().setCustomId('amountwithdrawcredit').setLabel("المبلغ").setPlaceholder('اكتب المبلغ هنا').setStyle('SHORT').setRequired(true);
			const firstActionRow = new MessageActionRow().addComponents(tashferInput);
			modal.addComponents(firstActionRow);
			await interaction.showModal(modal);
		} else if (interaction.customId === 'cancelwithdrawcredit') {
			const userId = interaction.user.id;
			let userData = await db.findOne({
				id: userId
			});
			if (!userData) userData = await db.create({
				id: userId
			});
			if (userData.status_playing == "yes") return interaction.reply({
				content: "انت بتلعب مينفعش تلغي سحب او تسحب !!",
				ephemeral: true
			});
			if (userData.withdraw_amount == 0 || userData.withdraw_accepted == true) return interaction.reply({
				content: "انت معندكش طلب سحب علشان تلغيه !!",
				ephemeral: true
			});
			userData.coins += parseInt(userData.withdraw_amount);
			amount = userData.withdraw_amount
			userData.withdraw_amount = 0;
			for (const messageId of userData.withdrawmessages) {
				try {
					const channel = await client.channels.fetch(WITHDRAW_CHANNEL_ID);
					const messageToDelete = await channel.messages.fetch(messageId[0]);
					await messageToDelete.delete();
				} catch { }
			}
			userData.withdrawmessages = [];
			await userData.save();
			interaction.reply({
				content: `تم الغاء طلب سحب: \`${amount}\``,
				ephemeral: true
			});
		} else if (interaction.customId === 'infowithdrawcredit') {
			return interaction.reply({
				content: `**تسليم السحب بيكون في الأوقات التالية:
- الساعة 10 مساءً بتوقيت السعودية يوافق:
- مصر: 9 مساءً
- الجزائر وتونس: 8 مساءً
- الأردن، سوريا، العراق، لبنان، الكويت: 10 مساءً (نفس توقيت السعودية)

✔ تأكد من التوقيت المناسب لك قبل السحب!
لو سحبت وبدك تلغي تقدر تلغي بالزر الاحمر فوق**`,
				ephemeral: true
			});
		} else if (interaction.customId === 'createclan') {
			let clans = await clansdb.find({})
			if (clans.length >= 100) return interaction.reply({
				content: `لقد تخطى عدد الكلانات العدد الأقصى المسموح به وهو 100`,
				ephemeral: true
			})
			const modal = new Modal().setCustomId('createclanModal').setTitle("إنشاء كلان");
			const tashferInput = new TextInputComponent().setCustomId('clanname').setLabel("الإسم").setPlaceholder('اكتب إسم الكلان هنا').setStyle('SHORT').setRequired(true);
			const firstActionRow = new MessageActionRow().addComponents(tashferInput);
			modal.addComponents(firstActionRow);
			await interaction.showModal(modal);
		} else if (interaction.customId === 'takenickname' || interaction.customId === 'resetnickname') {
			const guild = client.guilds.cache.get(bettingserverid);
			if (!guild) return;
			try {
				const member = interaction.member;
				let myclanname = await myclann(member.id);
				let currentNickname = member.nickname || member.displayName || member.user.username;
				let cleanNickname = currentNickname.replace(/\(\w+\)/g, "").trim();
				if (myclanname && interaction.customId === 'takenickname') {
					let clanNameTag = `(${myclanname})`;
					let newNickname = `${cleanNickname} ${clanNameTag}`.trim();
					if (!currentNickname.includes(clanNameTag)) {
						if (newNickname.length <= 32) {
							await member.setNickname(newNickname).catch(() => { });
							await interaction.reply({
								content: `لقد أخذت اسم كلانك بنجاح!`,
								ephemeral: true
							})
						}
					} else {
						await interaction.reply({
							content: `أنت لديك النك نيم بالفعل. هل تريد حذفه؟`,
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId(`resetnickname`).setLabel('حذف النك نيم').setStyle('DANGER'))],
							ephemeral: true
						})
					}
				} else if (myclanname && interaction.customId === 'resetnickname') {
					await member.setNickname(null).catch(() => { });
					interaction.reply({
						content: `لقد حذفت النك نيم بنجاح!`,
						ephemeral: true
					})
				} else if (!myclanname) {
					interaction.reply({
						content: `لست حاليا بكلان.`,
						ephemeral: true
					})
				}
			} catch { }
		} else if (interaction.customId === 'removeclan') {
			const userId = interaction.user.id;
			let clan = await clansdb.findOne({
				ownerid: userId
			});
			if (!clan) return interaction.reply({
				content: "ليس لديك كلان لحذفه !!",
				ephemeral: true
			});
			if (activeOperationsClansDelete.has(interaction.user.id)) {
				return interaction.reply({
					content: 'لديك عملية حذف كلان قيد التنفيذ بالفعل.',
					ephemeral: true
				});
			}
			let embed = new MessageEmbed().setColor(serverColor).setTitle('حذف كلان').setDescription(`هل تريد حذف كلان \`${clan.clanname}\`؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.`);
			let buttonConfirm = new MessageButton().setCustomId('confirm_removeclan').setLabel('تأكيد').setStyle('SUCCESS');
			let buttonCancel = new MessageButton().setCustomId('cancel_removeclan').setLabel('إلغاء').setStyle('DANGER');
			let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);
			const msg = await interaction.reply({
				embeds: [embed],
				components: [row],
				ephemeral: true
			});
			activeOperationsClansDelete.add(interaction.user.id);
			const filter = i => (i.customId === 'confirm_removeclan' || i.customId === 'cancel_removeclan') && i.user.id === interaction.user.id;
			const collector = interaction.channel.createMessageComponentCollector({
				filter,
				time: 60000
			});
			collector.on('end', async collected => {
				if (!collected.size) {
					activeOperationsClansDelete.delete(interaction.user.id);
					await interaction.followUp({
						content: 'تم إلغاء عملية حذف الكلان بسبب عدم التفاعل.',
						components: [],
						ephemeral: true
					});
				}
			});
			collector.on('collect', async i => {
				if (i.customId === 'confirm_removeclan') {
					let data = await clansdb.findOne({
						ownerid: userId
					});
					for (let i = 0; i < data.members.length; i++) {
						let member = await i.guild.members.fetch(data.members[i])
						await member.setNickname(null).catch(() => { });
					}
					await i.member.setNickname(null).catch(() => { });
					await clansdb.findOneAndDelete({
						ownerid: i.user.id
					})
					await i.reply({
						content: `تم حذف كلانك \`${clan.clanname}\` بنجاح!`,
						embeds: [],
						components: [],
						ephemeral: true
					});
				} else if (i.customId === 'cancel_removeclan') {
					await i.reply({
						content: 'تم إلغاء حذف الكلان.',
						embeds: [],
						components: [],
						ephemeral: true
					});
				}
				activeOperationsClansDelete.delete(interaction.user.id);
				collector.stop();
			});
		} else if (interaction.customId === 'infoclans') {
			return interaction.reply({
				content: `**> لإضافة شخص للكلان: \`addtoclan mention\`
		> لحذف شخص من الكلان: \`removefromclan mention\`
		> لتغيير إسم الكلان حقك: \`clanrename new_name\`
		> لرؤية توب الكلانات: \`topclans\`
		> لمعرفة معلومات الكلان اللي انت فيه: \`myclan\`
		> للخروج من الكلان اللي انت فيه: \`leaveclan\`**`,
				ephemeral: true
			});
		} else if (interaction.customId === 'copyTransfer') {
			await interaction.reply({
				content: `c ${ownertr} [المبلغ اللي تبغى تشحنه]`,
				ephemeral: true
			});
		} else if (interaction.customId.startsWith(settings.ticketPrefix)) {
			const tickets = loadTickets();
			const ticketCode = interaction.customId;
			if (tickets[ticketCode]) {
				const embed = new MessageEmbed().setTitle('🎫 تأكيد امتلاك التذكرة').setDescription(`تم التحقق من تذكرتك بنجاح!\n**كود التذكرة:** ${ticketCode}`).setColor(0x00FF00).setTimestamp();
				await interaction.reply({
					embeds: [embed],
					ephemeral: true
				});
			}
		} else if (interaction.customId == `lotteryButton`) {
			const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`lotteryBuyButton`).setLabel('Buy').setStyle('SUCCESS'));
			return interaction.reply({
				content: `سعر التذكرة حاليا: \`${settings.ticketPrice}\`
الجائزة بالسحب القادم: \`${settings.winPrize}\`
لشراء تذكرة اضغط الزر أسفل.`,
				ephemeral: true,
				components: [row]
			})
		} else if (interaction.customId == `lotteryBuyButton`) {
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) data = await db.create({
				id: interaction.user.id,
				coins: 0,
				status_playing: "no"
			})
			if (data.status_playing == "yes") return interaction.reply({
				content: "لديك تحدي جاري. لا يمكنك شراء تذكرة إلا لما تكون غير مشغول.",
				ephemeral: true
			})
			if (data.coins < settings.ticketPrice) return interaction.reply({
				content: "ليس لديك الرصيد الكافي لشراء تدكرة. يرجى التأكد من رصيدك.",
				ephemeral: true
			})
			const user = interaction.user;
			const tickets = loadTickets();
			const userTickets = Object.values(tickets).filter(ticket => ticket.userId === user.id && !ticket.used);
			if (userTickets.length >= settings.maxTicketsPerUser) {
				return interaction.reply({
					content: '❌ هذا المستخدم لديه بالفعل تذكرة نشطة!',
					ephemeral: true
				});
			}
			data.coins -= settings.ticketPrice
			data.save();
			const ticketCode = generateTicketCode();
			tickets[ticketCode] = {
				userId: user.id,
				username: user.username,
				userTag: user.tag,
				createdAt: new Date().toISOString(),
				used: false,
				givenBy: client.user.id
			};
			saveTickets(tickets);
			const ticketEmbed = new MessageEmbed().setTitle('🎫 تذكرة اليانصيب الخاصة بك').setDescription(`مبروك! لقد حصلت على تذكرة يانصيب جديدة!\n\n**🎯 كود التذكرة:** \`${ticketCode}\`\n**📅 تاريخ الإصدار:** <t:${Math.floor(Date.now() / 1000)}:F>\n**👤 تم الإعطاء بواسطة:** ${client.user}`).setColor(serverColor).setThumbnail('https://cdn-icons-png.flaticon.com/512/3486/3486875.png').setFooter({
				text: 'حظاً موفقاً! 🍀'
			}).setTimestamp();
			const button = new MessageActionRow().addComponents(new MessageButton().setCustomId(ticketCode).setLabel('تأكيد امتلاك التذكرة').setStyle("SUCCESS").setEmoji('✅'));
			try {
				await user.send({
					embeds: [ticketEmbed],
					components: [button]
				});
				const confirmEmbed = new MessageEmbed().setTitle('✅ تم إعطاء التذكرة بنجاح').setDescription(`**تم إرسال تذكرة اليانصيب بنجاح**\n\n**👤 المستلم:** ${user}\n**🆔 الأيدي:** ${user.id}\n**🎫 كود التذكرة:** \`${ticketCode}\``).setColor(0x00FF00).setThumbnail(user.displayAvatarURL()).setTimestamp().setFooter({
					text: `تم الإعطاء بواسطة: ${client.user}`,
					iconURL: interaction.user.displayAvatarURL()
				});
				await interaction.reply({
					embeds: [confirmEmbed],
					ephemeral: true
				});
				const logEmbed = new MessageEmbed().setTitle('📝 سجل إعطاء التذاكر').setDescription(`**تم إعطاء تذكرة يانصيب جديدة**\n\n**👤 المعطي:** ${client.user}\n**🎯 المستلم:** ${user}\n**🆔 أيدي المستلم:** ${user.id}\n**🎫 كود التذكرة:** \`${ticketCode}\``).setColor(serverColor).setTimestamp().setFooter({
					text: `إجمالي التذاكر النشطة: ${Object.keys(tickets).length}`
				});
				const logChannel = interaction.guild.channels.cache.get(logs.ticketLogChannel);
				if (logChannel) {
					await logChannel.send({
						embeds: [logEmbed]
					});
				}
			} catch (error) {
				const errorEmbed = new MessageEmbed().setTitle('❌ خطأ في الإرسال').setDescription(`لا يمكن إرسال رسالة خاصة إلى ${user}.\n**السبب:** قد يكون لديه الرسائل المباشرة مغلقة.`).setColor(0xFF0000).setTimestamp();
				await interaction.reply({
					embeds: [errorEmbed],
					ephemeral: true
				});
			}
		} else {
			const gamedd = await minegame.findOne({
				messageId: interaction.message.id
			});
			if (gamedd) {
				if (interaction.user.id !== gamedd.players[gamedd.turn]) {
					await interaction.reply({
						content: 'ليس دورك الآن.',
						ephemeral: true
					});
					return;
				}
				let gdata = await game.findOne({
					msgID: interaction.message.id
				})
				if (!gdata) return;
				const correctButtonId = gamedd.correctButtonId;
				const buttonLabel = interaction.customId;
				if (buttonLabel === correctButtonId) {
					const winnerId = gamedd.players[gamedd.turn];
					const loserId = gamedd.players[gamedd.turn === 0 ? 1 : 0];
					const betAmount = gamedd.betAmount;
					const data1 = await db.findOne({
						id: winnerId
					});
					const data2 = await db.findOne({
						id: loserId
					});
					data1.coins += parseInt(betAmount * (1 - TAX_RATE));
					data1.winnumber += 1;
					data1.totalwinnings += parseInt(betAmount * (1 - TAX_RATE));
					data1.challengesnumber += 1;
					data1.status_playing = "no";
					data2.coins -= parseInt(betAmount);
					data2.cashback += parseInt(parseInt(betAmount) * 0.02)
					data2.losenumber += 1;
					data2.totallost += parseInt(betAmount);
					data2.challengesnumber += 1;
					data2.status_playing = "no";
					await data1.save();
					await data2.save();
					const updatedRows = updateButtonStyles(interaction.message.components, buttonLabel, correctButtonId, true);
					const embed = new MessageEmbed().setColor(serverColor).setDescription(`<@${data1.id}> **VS** <@${data2.id}>`)
					await interaction.update({
						content: `> ال **فائز** : <@${data1.id}>\n \n> ال **خاسر** : <@${data2.id}>\n \n> ال 💰 - **مبلغ** : ${betAmount.toLocaleString()}\n \n> ال **لعبة** : البحث عن الزر`,
						components: updatedRows,
						embeds: [embed],
					});
					await allbetssend("بحث عن الزر", data1, data2, 0, betAmount);
					await game.findOneAndDelete({
						msgID: interaction.message.id
					});
					await minegame.deleteOne({
						messageId: interaction.message.id
					});
				} else {
					gdata.time = timestamp(moment(ms("90s")) + Date.now())
					gamedd.turn = gamedd.turn === 0 ? 1 : 0;
					await gamedd.save();
					await gdata.save();
					let updatedRows = updateButtonStyles(interaction.message.components, buttonLabel, correctButtonId, true);
					const nextPlayer = gamedd.players[gamedd.turn];
					const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة العثور على الزر الصحيح').setDescription(`اضغط على الزر الصحيح للفوز! الدور الآن عند <@${nextPlayer}>`);
					await interaction.update({
						content: `**الدور الآن عند <@${nextPlayer}>**`,
						components: updatedRows,
						embeds: [embed],
					});
					await new Promise(resolve => setTimeout(resolve, 1000));
					updatedRows = updateButtonStyles(interaction.message.components, buttonLabel, correctButtonId);
					await interaction.message.edit({
						content: `**الدور الآن عند <@${nextPlayer}>**`,
						components: updatedRows,
						embeds: [embed],
					});

				}
			} else {
				const [_, id1, id2, buttonIndex] = interaction.customId.split('_');
				const player1Id = id1;
				const player2Id = id2;
				const gamee = await PvpMinesweeper.findOne({
					'player1.userId': player1Id,
					'player2.userId': player2Id,
					gameStatus: 'active',
					messageId: interaction.message.id
				});
				if (gamee) {
					const {
						currentPlayer,
						correctButtons,
						buttonStates,
						player1,
						player2,
						betAmount
					} = gamee;
					const buttonIndexParsed = parseInt(buttonIndex);
					const currentPlayerId = currentPlayer === 'player1' ? player1.userId : player2.userId;
					if (interaction.user.id !== currentPlayerId) {
						return interaction.reply({
							content: `ليس دورك! انتظر دورك.`,
							ephemeral: true,
						});
					}
					let gdata = await game.findOne({
						msgID: interaction.message.id
					})
					if (!gdata) return;
					if (correctButtons.includes(buttonIndexParsed)) {
						buttonStates[buttonIndexParsed] = 'SUCCESS';
						if (currentPlayer === 'player1') {
							gamee.player1.score++;
						} else {
							gamee.player2.score++;
						}
					} else {
						buttonStates[buttonIndexParsed] = 'DANGER';
						if (currentPlayer === 'player1') {
							gamee.player1.score--;
						} else {
							gamee.player2.score--;
						}
					}
					const buttons = [];
					for (let i = 0; i < 16; i++) {
						const button = new MessageButton().setCustomId(`minesweeperbutton_${player1Id}_${player2Id}_${i}`).setStyle(buttonStates[i]).setDisabled(buttonStates[i] !== 'PRIMARY').setEmoji(buttonStates[i] === 'SUCCESS' ? '👑' : buttonStates[i] === 'DANGER' ? '💥' : '🔲');
						buttons.push(button);
					}
					gamee.currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
					await gamee.save();
					let rows = [];
					for (let i = 0; i < 4; i++) {
						rows.push(new MessageActionRow().addComponents(buttons.slice(i * 4, (i + 1) * 4)));
					}
					const embed = new MessageEmbed().setTitle('لعبة الألغام').setDescription(`المبلغ: ${gamee.betAmount}`).addFields({
						name: 'نتائج اللعبة',
						value: `<@${player1.userId}>: ${gamee.player1.score} | <@${player2.userId}>: ${gamee.player2.score}`
					}).setColor('#0099ff');
					const currentPlayeId = currentPlayer === 'player1' ? player2.userId : player1.userId;
					await interaction.update({
						content: `**الدور الآن عند <@${currentPlayeId}>**`,
						embeds: [embed],
						components: rows,
					});
					let gdatawith = await game.findOne({
						with: interaction.user.id
					});
					if (gdatawith) {
						gdatawith.time = Date.now() + ms("90s");
						await gdatawith.save();
					}
					if (gamee.buttonStates.every(state => state !== 'PRIMARY')) {
						gamee.gameStatus = 'ended';
						await PvpMinesweeper.findOneAndDelete({
							_id: gamee._id
						});
						if (gdatawith) {
							await game.findOneAndDelete({
								_id: gdatawith._id
							});
						}
						if (gamee.player1.score > gamee.player2.score) {
							const data1 = await db.findOne({
								id: gamee.player1.userId
							});
							const data2 = await db.findOne({
								id: gamee.player2.userId
							});
							data1.coins += parseInt(betAmount * (1 - TAX_RATE));
							data1.winnumber += 1;
							data1.totalwinnings += parseInt(betAmount * (1 - TAX_RATE));
							data1.challengesnumber += 1;
							data1.status_playing = "no";
							data2.coins -= parseInt(betAmount);
							data2.cashback += parseInt(parseInt(betAmount) * 0.02)
							data2.losenumber += 1;
							data2.totallost += parseInt(betAmount);
							data2.challengesnumber += 1;
							data2.status_playing = "no";
							await data1.save();
							await data2.save();
							const embed = new MessageEmbed().setColor(serverColor).setDescription(`<@${data1.id}> **VS** <@${data2.id}>`)
							await interaction.message.edit({
								content: `> ال **فائز** : <@${data1.id}>\n \n> ال **خاسر** : <@${data2.id}>\n \n> ال 💰 - **مبلغ** : ${betAmount.toLocaleString()}\n \n> ال **لعبة** : الألغام`,
								embeds: [embed]
							});
							await allbetssend("ألغام", data1, data2, 0, betAmount);
							await game.findOneAndDelete({
								msgID: interaction.message.id
							});
							await PvpMinesweeper.deleteOne({
								messageId: interaction.message.id
							});
						} else if (gamee.player1.score < gamee.player2.score) {
							const data1 = await db.findOne({
								id: gamee.player2.userId
							});
							const data2 = await db.findOne({
								id: gamee.player1.userId
							});
							data1.coins += parseInt(betAmount * (1 - TAX_RATE));
							data1.winnumber += 1;
							data1.totalwinnings += parseInt(betAmount * (1 - TAX_RATE));
							data1.challengesnumber += 1;
							data1.status_playing = "no";
							data2.coins -= parseInt(betAmount);
							data2.cashback += parseInt(parseInt(betAmount) * 0.02)
							data2.losenumber += 1;
							data2.totallost += parseInt(betAmount);
							data2.challengesnumber += 1;
							data2.status_playing = "no";
							await data1.save();
							await data2.save();
							const embed = new MessageEmbed().setColor(serverColor).setDescription(`<@${data1.id}> **VS** <@${data2.id}>`)
							await interaction.message.edit({
								content: `> ال **فائز** : <@${data1.id}>\n \n> ال **خاسر** : <@${data2.id}>\n \n> ال 💰 - **مبلغ** : ${betAmount.toLocaleString()}\n \n> ال **لعبة** : الألغام`,
								embeds: [embed],
							});
							await allbetssend("ألغام", data1, data2, 0, betAmount);
							await game.findOneAndDelete({
								msgID: interaction.message.id
							});
							await PvpMinesweeper.deleteOne({
								messageId: interaction.message.id
							});
						} else {
							const data1 = await db.findOne({
								id: gamee.player1.userId
							});
							const data2 = await db.findOne({
								id: gamee.player2.userId
							});
							data1.challengesnumber += 1;
							data1.tienumber += 1;
							data1.status_playing = "no";
							data2.challengesnumber += 1;
							data2.tienumber += 1;
							data2.status_playing = "no";
							await data1.save();
							await data2.save();
							const embed = new MessageEmbed().setColor(serverColor).setDescription(`<@${data1.id}> **VS** <@${data2.id}>`)
							await interaction.message.edit({
								content: `<@${data1.id}> **/** <@${data2.id}> تعادل !\nاللعبة: **الألغام**, المبلغ: **${parseInt(gamee.betAmount).toLocaleString()}**`,
								embeds: [embed],
							});
							await allbetssend("ألغام", data1, data2, 1, betAmount);
							await game.findOneAndDelete({
								msgID: interaction.message.id
							});
							await PvpMinesweeper.deleteOne({
								messageId: interaction.message.id
							});
						}
					}
				} else {
					const tofehaGame = await TofehaGame.findOne({
						messageId: interaction.message.id
					});
					if (tofehaGame) {
						if (interaction.user.id !== tofehaGame.playerId || !tofehaGame.gameActive) {
							return;
						} else if (interaction.customId === 'quit' && !(interaction.user.id !== tofehaGame.playerId || !tofehaGame.gameActive)) {
							const player = await db.findOne({
								id: tofehaGame.playerId
							});
							player.coins += parseInt(tofehaGame.winnings - tofehaGame.betAmount);
							player.winnumber += 1;
							player.challengesnumber += 1;
							player.totalwinnings += parseInt(tofehaGame.winnings - tofehaGame.betAmount);
							player.status_playing = "no";
							await player.save();
							await TofehaGame.deleteOne({
								messageId: tofehaGame.messageId
							});
							const playedRows = LEVELS.map((_, idx) => createGrid(idx, tofehaGame.pressedButtons, tofehaGame.buttonOrder, tofehaGame.currentLevel, true));
							const embed = new MessageEmbed().setColor(serverColor).setTitle('لعبة التفاحة 🍎').setDescription(`لقد خرجت من اللعبة بأمان. هذه هي الصفوف التي لعبتها:`);
							if (!interaction.replied) {
								await interaction.update({
									content: `تم إنهاء اللعبة بنجاح. لقد ربحت ${tofehaGame.winnings} عملات!`,
									components: [...playedRows, new MessageActionRow().addComponents(createQuitButton(true))],
									embeds: [embed]
								});
							}
							await allbetssendtofeha(player, 1, tofehaGame.winnings)
							return;
						} else if (tofehaGame.messageId === interaction.message.id && interaction.customId !== 'quit') {
							tofehaGame.time = timestamp(moment(ms("90s")) + Date.now());
							await tofehaGame.save()
							const currentlvlbuttons = tofehaGame.buttonOrder[tofehaGame.currentLevel]
							const pressedbtn = currentlvlbuttons.find(btn => btn.index === parseInt(interaction.customId[7]));
							const correctPressed = pressedbtn.correct;
							await updateTofehaGame(interaction, tofehaGame, correctPressed);
						}
					}
				}
			}
		}
	} else if (interaction.isCommand()) {
		if (interaction.commandName === 'setup') {
			const embed = new MessageEmbed().setTitle('⚽ اختر الدوري الذي تريد عرض مبارياته اليوم').setDescription('اختر أحد الدوريات لعرض مباريات اليوم فقط.').setColor('#00ff88');
			const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('league_select').setPlaceholder('اختر دوري...').addOptions([{
				label: 'الدوري الإنجليزي الممتاز',
				value: 'PL',
				emoji: '🏴'
			}, {
				label: 'الدوري الإسباني',
				value: 'PD',
				emoji: '🇪🇸'
			}, {
				label: 'الدوري الإيطالي',
				value: 'SA',
				emoji: '🇮🇹'
			}, {
				label: 'الدوري الألماني',
				value: 'BL1',
				emoji: '🇩🇪'
			}, {
				label: 'الدوري الفرنسي',
				value: 'FL1',
				emoji: '🇫🇷'
			},]));
			await interaction.reply({
				embeds: [embed],
				components: [row]
			});
		}
	} else if (interaction.isSelectMenu()) {
		if (interaction.customId === "deletecode_select") {
			{
				const selectedCodeId = interaction.values[0];
				await dbcodes.findByIdAndDelete(selectedCodeId);
				await interaction.update({
					content: "تم حذف الكود بنجاح!",
					components: []
				});
			}
		} else if (interaction.customId === 'challenge_select') {
			const selectedValue = interaction.values[0];
			const member = interaction.member;
			if (selectedValue === 'refresh_select') {
				try {
					await interaction.reply({
						content: '**✅ تم إعادة التحميل بنجاح!**',
						ephemeral: true
					});
				} catch {
					return interaction.reply({
						content: '**❌ حدث خطأ أثناء إعادة التحميل!**',
						ephemeral: true
					}).catch();
				}
			} else if (selectedValue === 'select_all') {
				try {
					const member = await interaction.guild.members.fetch(interaction.user.id);
					const allRoles = roleOptions.map(option => interaction.guild.roles.cache.get(option.roleId)).filter(role => role);
					const rolesToAdd = allRoles.filter(role => !member.roles.cache.has(role.id));
					if (rolesToAdd.length > 0) {
						await member.roles.add(rolesToAdd);
						await interaction.reply({
							content: '**✅ تم إعطاؤك جميع الرتب التي لم تكن تمتلكها مسبقًا!**',
							ephemeral: true
						});
					} else {
						await interaction.reply({
							content: '**⚠️ لديك بالفعل جميع هذه الرتب!**',
							ephemeral: true
						});
					}
				} catch {
					return interaction.reply({
						content: '**❌ حدث خطأ أثناء إضافة الرتب!**',
						ephemeral: true
					}).catch(() => { });
				}
			} else if (selectedValue === "remove_all") {
				try {
					const member = await interaction.guild.members.fetch(interaction.user.id);
					const allRoles = roleOptions.map(option => interaction.guild.roles.cache.get(option.roleId)).filter(role => role);
					const rolesToRemove = allRoles.filter(role => member.roles.cache.has(role.id));
					if (rolesToRemove.length > 0) {
						await member.roles.remove(rolesToRemove);
						await interaction.reply({
							content: '**✅ تم إزالة جميع الرتب التي كنت تمتلكها!**',
							ephemeral: true
						});
					} else {
						await interaction.reply({
							content: '**⚠️ لا تملك أي من هذه الرتب!**',
							ephemeral: true
						});
					}
				} catch {
					return interaction.reply({
						content: '**❌ حدث خطأ أثناء إزالة الرتب!**',
						ephemeral: true
					}).catch(() => { });
				}
			} else {
				const selectedOption = roleOptions.find(option => option.value === selectedValue);
				if (!selectedOption) {
					return interaction.reply({
						content: '**❌ الخيار المحدد غير صحيح!**',
						ephemeral: true
					}).catch();
				}
				const role = interaction.guild.roles.cache.get(selectedOption.roleId);
				if (!role) {
					return interaction.reply({
						content: '**❌ الرتبة غير موجودة!**',
						ephemeral: true
					}).catch();
				}
				try {
					if (member.roles.cache.has(role.id)) {
						await member.roles.remove(role);
						await interaction.reply({
							content: `**✅ تم إزالة الرتبة:** ${role.name}`,
							ephemeral: true
						});
					} else {
						await member.roles.add(role);
						await interaction.reply({
							content: `**✅ تم إعطاؤك رتبة:** ${role.name}`,
							ephemeral: true
						});
					}
				} catch {
					return interaction.reply({
						content: '**❌ حدث خطأ أثناء إدارة الرتبة!**',
						ephemeral: true
					}).catch();
				}
			}
		} else if (interaction.customId === 'select_ticket') {
			const userId = interaction.user.id;
			const userName = interaction.user.username;
			const now = Date.now();
			const cooldownAmount = 5 * 1000;
			const value = interaction.values[0];
			if (value === 'shane') {
				if (cooldowns5.has(userId)) {
					const expirationTime = cooldowns5.get(userId) + cooldownAmount;
					if (now < expirationTime) {
						const timeLeft = (expirationTime - now) / 1000;
						return interaction.reply({
							content: `يرجى الانتظار ${Math.ceil(timeLeft)} ثواني قبل محاولة الضغط على الزر مرة أخرى.`,
							ephemeral: true
						});
					}
				}
				cooldowns5.set(userId, now);
				const channel = await interaction.guild.channels.create(`ticket-${userName}`, {
					type: 'GUILD_TEXT',
					parent: ticketcategid,
					permissionOverwrites: [{
						id: interaction.guild.id,
						deny: ['VIEW_CHANNEL'],
					}, {
						id: interaction.user.id,
						allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
					},],
				});
				await interaction.reply({
					content: `تم إنشاء التكت بنجاح <#${channel.id}>`,
					ephemeral: true
				});
				const embeds = [
					new MessageEmbed().setTitle('كيفيه الشحن؟').setDescription(`**\`#credit ${ownertr} المبلغ\`**`),
					new MessageEmbed().setTitle('كيفيه شحن بري؟').setDescription('**اكتب بري**'),
				];
				let ilett = 0
				for (const embed of embeds) {
					if (ilett === 0) {
						await channel.send({
							embeds: [embed],
							content: `c ${ownertr} المبلغ`
						});
						ilett += 1
					} else {
						await channel.send({
							embeds: [embed]
						});
						ilett += 1
					}
				}
				let warningMessage = await channel.send('**# انتباه سوف يتم حذف التذكرة بعد دقيقتين .**');
				await warningMessage.pin();
				const countdown = async (time) => {
					if (time > 0) {
						try {
							await warningMessage.edit(`**سوف يحذف الروم بعد ${time} ثانية.**`);
						} catch (error) {
							if (error.code === 10008) {
								warningMessage = await channel.send('**# انتباه سوف يتم حذف التذكرة بعد دقيقتين .**');
								await warningMessage.pin();
							} else {
								return;
							}
						}
						setTimeout(() => countdown(time - 1), 1000);
					} else {
						const chatHistory = await channel.messages.fetch();
						const chatLogs = chatHistory.map(m => `${m.author.tag}: ${m.content}`).join('<br>');
						const htmlDocument = `
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سجل تذكرة</title>
</head>
<body>
<p>${chatLogs}</p>
</body>
</html>`;
						const fileName = `ticket-${userName}.html`;
						fs.writeFileSync(fileName, htmlDocument);
						const logChannel = client.channels.cache.get(logTickets);
						if (logChannel) {
							const attachment = new MessageAttachment(fs.readFileSync(fileName), fileName);
							await logChannel.send({
								content: 'تم حذف تذكرة، إليك السجل:',
								files: [attachment]
							});
							fs.unlinkSync(fileName);
						}
						await channel.delete();
					}
				};
				countdown(120);
			} else if (value === 'support') {
				const channel = await interaction.guild.channels.create(`ticket-${userName}`, {
					type: 'GUILD_TEXT',
					parent: categoryIdSupport,
					permissionOverwrites: [{
						id: interaction.guild.id,
						deny: ['VIEW_CHANNEL'],
					}, {
						id: interaction.user.id,
						allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ATTACH_FILES'],
					}, {
						id: supportRoleId,
						allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ATTACH_FILES'],
					}],
				});
				await interaction.reply({
					content: `تم إنشاء التكت بنجاح <#${channel.id}>`,
					ephemeral: true
				});
				const embed = new MessageEmbed().setTitle('**> Support Tickets.**').setDescription('**مرحبا بك في التكت الدعم الفني ، للمساعدة انتظر رد الدعم الفني واكتب سبب فتح التذكرة .**');
				const deleteRow = new MessageActionRow().addComponents(new MessageButton().setCustomId('delete_ticket').setLabel('حذف').setStyle('DANGER'), new MessageButton().setCustomId('claim_ticket').setLabel('استلام').setStyle('SECONDARY'));
				await channel.send({
					content: `<@${userId}> <@&${supportRoleId}>`,
					embeds: [embed],
					components: [deleteRow]
				});
			} else if (value === 'support_apply') {
				const channel = await interaction.guild.channels.create(`apply-${userName}`, {
					type: 'GUILD_TEXT',
					parent: categoryIdApply,
					permissionOverwrites: [{
						id: interaction.guild.id,
						deny: ['VIEW_CHANNEL'],
					}, {
						id: interaction.user.id,
						allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ATTACH_FILES'],
					}],
				});
				await interaction.reply({
					content: `تم إنشاء التكت بنجاح <#${channel.id}>`,
					ephemeral: true
				});
				const embed = new MessageEmbed().setTitle('**> Apply Tickets.**').setDescription('**مرحبا بك في التكت التقديم للإدارة ، للتقديم انتظر رد أحد المسؤولين .**');
				const deleteRow = new MessageActionRow().addComponents(new MessageButton().setCustomId('delete_ticket').setLabel('حذف').setStyle('DANGER'));
				await channel.send({
					content: `<@${userId}> <@&${supportRoleId}>`,
					embeds: [embed],
					components: [deleteRow]
				});
			} else if (value === 'reload') {
				await interaction.reply({
					content: '**تم عمل إعادة تحميل للاختيارات بنجاح ✅**',
					ephemeral: true
				});
			}
		} else if (interaction.customId === `game_select_${interaction.user.id}`) {
			const selectedValue = interaction.values[0];
			if (selectedValue == `cancel_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				let stusrgame = client.users.cache.get(gdata.id)
				let wthusrgame = client.users.cache.get(gdata.with)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `>  تم إلغاء التحدي بنجاح ${interaction.user} ! 
> || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch()
				await game.findOneAndDelete({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				let data = await db.findOne({
					id: stusrgame.id
				})
				if (!data) {
					data = await db.create({
						id: stusrgame.id,
						coins: 0,
						status_playing: "no"
					})
				}
				let data2 = await db.findOne({
					id: wthusrgame.id
				})
				if (!data2) {
					data2 = await db.create({
						id: wthusrgame.id,
						coins: 0,
						status_playing: "no"
					})
				}
				data2.status_playing = "no";
				await data2.save()
				data.status_playing = "no";
				await data.save()
			}
			if (selectedValue == `nrd_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "nrd"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `🎲 لعبة النرد:`,
					value: `> يفوز الذي يحصل على أعلى مجموع من ثلاث مرات, التعادل ليس فوزا !`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yesg_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`nog_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`نرد\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `xo_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "xo"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `❌⭕ لعبة اكس او:`,
					value: `> يفوز الذي يحصل على خط مستقيم طوله من ثلاث مربعات, التعادل ليس فوزا !`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yesxo_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`nog_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`اكس او\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `rps_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "rps"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `✂️ لعبة حجرة ورقة مقص:`,
					value: `> هنهزر يسطا ؟ مش عارف حجره ورقه مقص ؟`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yesrps_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`nog_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`حجرة ورقة مقص\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `tartib_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "tartib"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `لعبة البحث عن الزر:`,
					value: `> يفوز الذي يجد الزر الصحيح !`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yestartib_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`nog_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`البحث عن الزر\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `mines_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "mines"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `لعبة الألغام:`,
					value: `> قم باختيار الأزرار الصحيحة ولا تختر الألغام حتى لا تخسر!`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yesmines_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`nog_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`الألغام\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `takribi_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "takribi"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `📊 لعبة الرقم التقريبي (بدون شروط):`,
					value: `> في كل جولة سوف تحصل على رقم عشوائي, و انت عليك ان تحصل على نفس الرقم او اقل منه, الذي يحصل عليه يفوز, في حال الحصول على اعلى تعتبر خاسر, جولة واحدة لكل تحدي ! انهاء الجولة يعني انهاء التحدي, التعادل ليس فوزا !`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yestkg_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`notkg_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`الرقم التقريبي (بدون شروط)\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
			if (selectedValue == `takribicondss_${interaction.user.id}`) {
				let gdata = await game.findOne({
					id: interaction.user.id
				})
				if (!gdata) return;
				if (!gdata.coins || gdata.coins == null) return;
				if (!gdata.with || gdata.with == null) return;
				if (!gdata.msgID || gdata.msgID == null) return;
				gdata.game = "takribi"
				await gdata.save()
				await interaction.deferReply({
					ephemeral: true
				})
				let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
				if (!usraccano) return interaction.editReply({
					content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
					ephemeral: true
				})
				gdata.time = timestamp(moment(ms("40s")) + Date.now())
				await gdata.save()
				let embed_edit = new MessageEmbed().setColor(serverColor).setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
	> عند التعادل لا يتم سحب اي مبلغ من الطرفين.`).addFields({
					name: `📊 لعبة الرقم التقريبي (بشروط):`,
					value: `> في كل جولة سوف تحصل على رقم عشوائي, و انت عليك ان تحصل على نفس الرقم او اقل منه, الذي يحصل عليه يفوز, في حال الحصول على اعلى تعتبر خاسر, جولة واحدة لكل تحدي ! انهاء الجولة يعني انهاء التحدي, التعادل ليس فوزا !`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
				let button_yes = new MessageButton().setCustomId(`yescond_${gdata.msgID}`).setLabel("قبول").setStyle("SUCCESS")
				let button_no = new MessageButton().setCustomId(`notkg_${gdata.msgID}`).setLabel("رفض").setStyle("DANGER")
				let row = new MessageActionRow().setComponents(button_yes, button_no)
				interaction.editReply({
					content: `> لقد تم اختيار العبة هي : \`الرقم التقريبي\` !!`,
					ephemeral: true
				})
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit],
					content: `> بانتظار رد من ${usraccano} ...`,
					components: [row]
				})).catch()
			}
		} else if (interaction.customId === "room_visibility") {
			const selected = interaction.values[0];
			const guild = client.guilds.cache.get(bettingserverid);
			const category = guild.channels.cache.get(privateroomcateg);
			const user = await guild.members.fetch(interaction.user.id);
			const data = await db.findOne({
				id: interaction.user.id
			});
			if (!data || data.coins < 30000) {
				return interaction.update({
					content: "> **حدث خطأ: لا يوجد لديك رصيد كافٍ، أو لم يتم العثور على بياناتك.**",
					components: [],
					embeds: [],
					ephemeral: true
				});
			}
			data.coins -= 30000;
			await data.save();
			const channel = await guild.channels.create(`🎰｜${interaction.user.tag}`, {
				type: 'GUILD_TEXT',
				parent: category,
			});
			await channel.permissionOverwrites.create(user, {
				VIEW_CHANNEL: true,
				SEND_MESSAGES: true,
				ADD_REACTIONS: false,
				ATTACH_FILES: false
			});
			if (selected === 'private') {
				await channel.permissionOverwrites.create(guild.roles.everyone, {
					VIEW_CHANNEL: false
				});
			} else if (selected === 'public') {
				await channel.permissionOverwrites.create(guild.roles.everyone, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: false,
					ADD_REACTIONS: false,
					ATTACH_FILES: false
				});
			}
			const embed = new MessageEmbed().addFields({
				name: "> صاحب الروم :",
				value: `${user}`,
				inline: false
			}, {
				name: "> تبقي من مدة الروم :",
				value: "1 يوم",
				inline: false
			}).setThumbnail(guild.iconURL({
				dynamic: true
			}));
			const messageannounce = await channel.send({
				embeds: [embed]
			});
			await privdata.create({
				channelid: channel.id,
				owner: user.id,
				expiredate: moment().add(1, 'days').toDate(),
				announcemessageid: messageannounce.id
			});
			await interaction.update({
				content: `تم إنشاء الروم بنجاح باختيارك: ${selected === 'private' ? 'مخفي' : 'ظاهر'}`,
				embeds: [],
				components: [],
				ephemeral: true
			});
		} else if (interaction.customId === 'league_select') {
			const leagueCode = interaction.values[0];
			await interaction.deferReply({
				ephemeral: true
			});
			const today = new Date().toISOString().split('T')[0];
			try {
				const res = await fetch(`${BASE_URL}competitions/${leagueCode}/matches?dateFrom=${today}&dateTo=${today}`, {
					headers: {
						'X-Auth-Token': API_KEY
					},
				});
				if (!res.ok) {
					return interaction.editReply({
						content: `❌ حصل خطأ (${res.status}) أثناء جلب البيانات.`
					});
				}
				const data = await res.json();
				const matches = data.matches;
				if (!matches.length) {
					return interaction.editReply({
						content: `❌ لا توجد مباريات اليوم في ${data.competition.name}.`
					});
				}
				// روابط شعارات الدوريات الرسمية
				const leagueLogos = {
					PL: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
					PD: 'https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_logo.svg',
					SA: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg',
					BL1: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg',
					FL1: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue1.svg',
				};
				const embed = new MessageEmbed().setTitle(`📅 مباريات اليوم - ${data.competition.name}`).setThumbnail(leagueLogos[leagueCode]).setColor('#0099ff');
				matches.forEach((m, i) => {
					let details = '';
					if (m.status === 'FINISHED') {
						const home = m.score.fullTime?.home ?? 0;
						const away = m.score.fullTime?.away ?? 0;
						details = `🏁 انتهت المباراة\n⚽ ${m.homeTeam.name} ${home} - ${away} ${m.awayTeam.name}`;
					} else if (m.status === 'IN_PLAY' || m.status === 'PAUSED') {
						details = `🔥 جارية الآن\n🕒 <t:${Math.floor(new Date(m.utcDate).getTime() / 1000)}:t>`;
					} else {
						details = `⏳ لم تبدأ بعد\n🕒 <t:${Math.floor(new Date(m.utcDate).getTime() / 1000)}:t>`;
					}
					embed.addField(`${i + 1}. ${m.homeTeam.name} 🆚 ${m.awayTeam.name}`, details, false);
				});
				await interaction.editReply({
					embeds: [embed]
				});
			} catch (err) {
				console.error(err);
				await interaction.editReply({
					content: '⚠️ حدث خطأ أثناء جلب المباريات.'
				});
			}
		}
	} else if (interaction.isModalSubmit()) {
		if (interaction.customId === 'withdrawmodal') {
			const amountt = interaction.fields.getTextInputValue('withdraw_amount').replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`);
			const amount = parseInt(amountt);
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) {
				data = await db.create({
					id: interaction.user.id,
					coins: 0,
					status_playing: "no"
				});
			}
			if (data.status_playing === "yes") {
				return interaction.reply('> لا يمكنك استعمال هذا الأمر أثناء لعب تحدي!');
			}
			if (isNaN(amount) || parseInt(amount) <= 0) {
				return interaction.reply('المبلغ غير صالح. حاول مرة أخرى.');
			} else if (data.prembank < parseInt(amount)) {
				return interaction.reply('ليس معك هذا المبلغ بالبنك');
			} else {
				data.prembank = parseInt(data.prembank - amount);
				data.coins = parseInt(data.coins + amount);
				await data.save();
				return interaction.reply(`لقد سحبت ${amount.toLocaleString()} من البنك.`);
			}
		} else if (interaction.customId === 'depositmodal') {
			const amountt = interaction.fields.getTextInputValue('deposit_amount').replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`);
			const amount = parseInt(amountt);
			let data = await db.findOne({
				id: interaction.user.id
			});
			if (!data) {
				data = await db.create({
					id: interaction.user.id,
					coins: 0,
					status_playing: "no"
				});
			}
			if (data.status_playing === "yes") {
				return interaction.reply('> لا يمكنك استعمال هذا الأمر أثناء لعب تحدي!');
			}
			if (isNaN(amount) || parseInt(amount) <= 0) {
				return interaction.reply('المبلغ غير صالح. حاول مرة أخرى.');
			} else if (data.coins < parseInt(amount)) {
				return interaction.reply('ليس معك هذا المبلغ برصيدك');
			} else {
				data.prembank = parseInt(data.prembank + amount);
				data.coins = parseInt(data.coins - amount);
				await data.save();
				return interaction.reply(`لقد أودعت ${amount.toLocaleString()} إلى البنك.`);
			}
		} else if (interaction.customId === 'redeemModal') {
			let text = interaction.fields.getTextInputValue('code');
			let code = await dbcodes.findOne({
				codestring: text
			})
			if (!code) return interaction.reply({
				content: "هذا الكود غير صحيح",
				ephemeral: true
			})
			let data = await db.findOne({
				id: interaction.user.id
			})
			if (!data) data = await db.create({
				id: interaction.user.id,
				coins: 0
			})
			if (data.redeemedcodes.includes(text)) return interaction.reply({
				content: "لقد استخدمت هذا الكود من قبل",
				ephemeral: true
			})
			if (code.usecount === 0) return interaction.reply({
				content: "هذا الكود تم استخدامه كثيرا",
				ephemeral: true
			})
			data.redeemedcodes.push(text);
			let msgcontent = ""
			if (code.gifttype == "p") {
				data.premiumExpires = calculateDuration(code.amount);
				data.premium = true;
				await data.save();
				msgcontent = `**تم استخدام الكود بنجاح وإعطاؤك بريميوم مدته ${code.amount}.**`
			} else {
				data.coins += parseCoins(code.amount)
				msgcontent = `**تم استخدام الكود بنجاح وإعطاؤك مبلغ ${code.amount}.**`
			}
			await data.save();
			if (code.usecount > 0) {
				code.usecount -= 1
				await code.save();
			}
			return interaction.reply({
				content: msgcontent,
				ephemeral: true
			})
		} else if (interaction.customId === 'withdrawcreditModal') {
			let adasd = await kombe.findOne();
			if (!adasd) return interaction.reply({
				content: "> **السحب غير متاح حاليا. يرجى المحاولة في وقت لاحق.**",
				ephemeral: true
			})
			if (adasd.sahbsett != "on") return interaction.reply({
				content: "> **السحب غير متاح حاليا. يرجى المحاولة في وقت لاحق.**",
				ephemeral: true
			})
			const userId = interaction.user.id;
			let userData = await db.findOne({
				id: userId
			});
			if (!userData) await db.create({
				id: userId
			}).then((data) => userData = data).catch(() => 0);
			if (!interaction.fields.getTextInputValue('amountwithdrawcredit')) return interaction.reply({
				content: 'يرجى تحديد مبلغ.',
				ephemeral: true
			});
			let coinAmount = interaction.fields.getTextInputValue('amountwithdrawcredit').replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("b", `000000000`).replace("B", `000000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
			let amount = coinAmount;
			if (userData.status_playing == "yes") return interaction.reply({
				content: "لايمكنك السحب وانت في تحدي",
				ephemeral: true
			});
			if (userData.withdraw_amount != 0) return interaction.reply({
				content: "لديك عمليه سحب مسجله يرجى انتظار قبول سحبك او رفض سحبك لكي تستطيع السحب مره اخرى",
				ephemeral: true
			});
			if (!amount) return interaction.reply({
				content: `دخل رقم طيب !!`,
				ephemeral: true
			});
			if (isNaN(amount)) return interaction.reply({
				content: `يرجى ادخال مبلغ صحيح`,
				ephemeral: true
			});
			if (amount <= 0 || interaction.fields.getTextInputValue('amountwithdrawcredit').includes('.') || interaction.fields.getTextInputValue('amountwithdrawcredit').includes('-')) return interaction.reply({
				content: `يرجى ادخال مبلغ صحيح`,
				ephemeral: true
			});
			if (!userData || parseInt(userData.coins) < parseInt(amount)) return interaction.reply({
				content: "لايمكنك ادخال مبلغ ليس متوفر لديك",
				ephemeral: true
			});
			if (amount < 1000) return interaction.reply({
				content: `الحد الأدنى للسحب هو 1000`,
				ephemeral: true
			});
			if (amount >= 1000000000) return interaction.reply({
				content: `الحد الأقصى للسحب هو 999999999`,
				ephemeral: true
			});
			userData.withdraw_amount = parseInt(amount);
			userData.coins -= parseInt(amount);
			await userData.save();
			const embed = new MessageEmbed().setColor(serverColor).setTitle('طلب سحب رصيد').setThumbnail(interaction.user.displayAvatarURL({
				dynamic: true,
				size: 1024
			})).addFields({
				name: 'العضو',
				value: `<@${userId}>`,
				inline: true
			}, {
				name: '\u200B',
				value: '\u200B',
				inline: true
			}, {
				name: 'المبلغ',
				value: `${userData.withdraw_amount}`,
				inline: false
			}, {
				name: 'الرصيد الحالي',
				value: `${userData.coins}`,
				inline: false
			}, {
				name: 'الحالة',
				value: 'في انتظار التحويل ⏳',
				inline: false
			}).setFooter({
				text: '7lm Casino',
				iconURL: interaction.guild.iconURL({
					dynamic: true
				})
			}).setTimestamp();
			const row = new MessageActionRow().addComponents(new MessageButton().setCustomId(`transfer_${interaction.user.id}`).setLabel('تحويل').setStyle('SUCCESS'), new MessageButton().setCustomId(`canceltransfer_${interaction.user.id}`).setLabel('إلغاء السحب').setStyle('DANGER'));
			interaction.reply({
				content: `تم تقديم طلب سحب: \`${amount}\`\nبرجاء انتظار نتيجة السحب هنا <#${selfChannelId}>`,
				ephemeral: true
			});
			const withdrawMessage = await client.channels.cache.get(WITHDRAW_CHANNEL_ID).send({
				embeds: [embed],
				components: [row]
			});
			userData.withdrawmessages.push([withdrawMessage.id, "withdrawEmbed"]);
			const linemessage = await client.channels.cache.get(WITHDRAW_CHANNEL_ID).send({
				files: [linelineline]
			});
			userData.withdrawmessages.push([linemessage.id, "linemessage"]);
			await userData.save();
		} else if (interaction.customId === 'createclanModal') {
			const userId = interaction.user.id;
			let userData = await db.findOne({
				id: userId
			});
			if (!userData) await db.create({
				id: userId
			}).then((data) => userData = data).catch(() => 0);
			let owneralreadyexist = await clansdb.findOne({
				ownerid: interaction.user.id
			})
			if (owneralreadyexist) return interaction.reply({
				content: `لديك كلان بالفعل واسمه \`${owneralreadyexist.clanname}\` .`,
				ephemeral: true
			});
			if (!interaction.fields.getTextInputValue('clanname')) return interaction.reply({
				content: 'يرجى تحديد إسم الكلان المراد إنشاؤه.',
				ephemeral: true
			});
			let clannamee = interaction.fields.getTextInputValue('clanname')
			let clanalreadyexist = await clansdb.findOne({
				clanname: clannamee
			})
			if (clanalreadyexist) return interaction.reply({
				content: `هناك بالفعل كلان بنفس الاسم الذي حددته .`,
				ephemeral: true
			});
			let clans = await clansdb.find({})
			if (clans.length >= 100) return interaction.reply({
				content: `لقد تخطى عدد الكلانات العدد الأقصى المسموح به وهو 100`,
				ephemeral: true
			})
			if (activeOperationsClansCreate.has(interaction.user.id)) {
				return minteraction.reply({
					content: 'لديك عملية إنشاء كلان قيد التنفيذ بالفعل.',
					ephemeral: true
				});
			}
			let embed = new MessageEmbed().setColor(serverColor).setTitle('إنشاء كلان').setDescription(`هل تريد إنشاء كلان \`${clannamee}\` مقابل 50,000؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.`);
			let buttonConfirm = new MessageButton().setCustomId('confirm_createclan').setLabel('تأكيد').setStyle('SUCCESS');
			let buttonCancel = new MessageButton().setCustomId('cancel_createclan').setLabel('إلغاء').setStyle('DANGER');
			let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);
			const msg = await interaction.reply({
				embeds: [embed],
				components: [row],
				ephemeral: true
			});
			activeOperationsClansCreate.add(interaction.user.id);
			const filter = i => (i.customId === 'confirm_createclan' || i.customId === 'cancel_createclan') && i.user.id === interaction.user.id;
			const collector = interaction.channel.createMessageComponentCollector({
				filter,
				time: 60000
			});
			collector.on('end', async collected => {
				if (!collected.size) {
					activeOperationsClansCreate.delete(interaction.user.id);;
					await interaction.followUp({
						content: 'تم إلغاء عملية إنشاء الكلان بسبب عدم التفاعل.',
						components: [],
						ephemeral: true
					});
				}
			});
			collector.on('collect', async i => {
				collector.stop()
				if (i.customId === 'confirm_createclan') {
					let data = await db.findOne({
						id: userId
					});
					if (!data) await db.create({
						id: userId
					}).then((dataa) => data = dataa).catch(() => 0);
					let clans = await clansdb.find({})
					if (clans.length >= 100) return i.reply({
						content: `لقد تخطى عدد الكلانات العدد الأقصى المسموح به وهو 100`,
						ephemeral: true
					})
					let owneralreadyexist = await clansdb.findOne({
						ownerid: interaction.user.id
					})
					if (owneralreadyexist) return i.reply({
						content: `لديك كلان بالفعل واسمه \`${owneralreadyexist.clanname}\` .`,
						ephemeral: true
					});
					if (!interaction.fields.getTextInputValue('clanname')) return interaction.reply({
						content: 'يرجى تحديد إسم الكلان المراد إنشاؤه.',
						ephemeral: true
					});
					let clannamee = interaction.fields.getTextInputValue('clanname')
					let clanalreadyexist = await clansdb.findOne({
						clanname: clannamee
					})
					if (clanalreadyexist) return i.reply({
						content: `هناك بالفعل كلان بنفس الاسم الذي حددته .`,
						ephemeral: true
					});
					if (data.coins >= 50000) {
						data.coins -= 50000;
						await data.save();
						await clansdb.create({
							ownerid: i.user.id,
							clanname: clannamee,
							members: [i.user.id]
						})
						await i.reply({
							content: `تم إنشاء كلانك \`${clannamee}\` بنجاح!`,
							embeds: [],
							components: [],
							ephemeral: true
						});
					} else {
						await i.reply({
							content: 'ليس لديك رصيد كافي لإنشاء الكلان.',
							embeds: [],
							components: [],
							ephemeral: true
						});
					}
				} else if (i.customId === 'cancel_createclan') {
					await i.reply({
						content: 'تم إلغاء إنشاء الكلان.',
						embeds: [],
						components: [],
						ephemeral: true
					});
				}
				activeOperationsClansCreate.delete(interaction.user.id);;
			});
		}
	}
});
client.on('guildMemberAdd', async member => {
	if (member.user.bot) return;
	let invv = await setinv.findOne();
	if (!invv) invv = await setinv.create({
		systemm: "off"
	});
	const cachedInvites = invites.get(member.guild.id);
	const newInvites = await member.guild.invites.fetch();
	const channell = await client.channels.fetch(logwelcome);
	invites.set(member.guild.id, new Map(newInvites.map(invite => [invite.code, invite.uses])));
	let usedInvite;
	try {
		usedInvite = newInvites.find(invite => cachedInvites?.get(invite.code) < invite.uses);
	} catch {
		return;
	}
	const vanityCode = await member.guild.fetchVanityData().catch(() => null);
	if (!usedInvite && !vanityCode) {
		channell.send(`⚠️ ${member.user} joined without a valid invite (Possibly OAuth). Ignoring.`);
		return;
	}
	const inviter = usedInvite?.inviter;
	const chnlreward = await client.channels.fetch(channelreward);
	const chnlrewardspin = await client.channels.fetch(channelrewardspin);
	if (usedInvite) {
		channell.send(`📩 **${member.user.tag}** joined using invite code **${usedInvite.code}** created by **${inviter?.tag || 'Unknown'}**. (${usedInvite.uses} uses)`);
		if (inviter?.bot) return;
		const accountAge = Date.now() - member.user.createdTimestamp;
		const threeMonths = 3 * 30 * 24 * 60 * 60 * 1000;
		if (accountAge > threeMonths) {
			const existingMember = await InviteDatabase.findOne({
				userId: member.user.id
			});
			if (!existingMember) {
				const newMember = new InviteDatabase({
					userId: member.user.id,
					inviterName: inviter.username
				});
				await newMember.save();
				if (invv.systemm === "on") {
					let data = await db.findOne({
						id: inviter.id
					});
					if (!data) {
						data = await db.create({
							id: inviter.id,
							coins: 0,
							status_playing: 'no',
							lastWithdrawal: null
						});
					}
					data.coins += invv.price;
					await data.save();
					let embed = new MessageEmbed().setDescription(`<@${member.user.id}> تم اضافتك من قبل <@${inviter.id}> حسابك فوق 3 اشهر تم اضافة ✅ رصيد \`${invv.price.toLocaleString()}\` المبلغ الجملي للرصيد \`${data.coins}\``);
					await chnlreward.send({
						embeds: [embed]
					});
					try {
						await inviter.send({
							embeds: [embed]
						});
					} catch { }
					chnlreward.send({
						files: [linelineline]
					});
				}
				if (invv.spinsystem === "on") {
					let data = await db.findOne({
						id: inviter.id
					});
					if (!data) {
						data = await db.create({
							id: inviter.id,
							coins: 0,
							points: 0,
							status_playing: 'no',
							lastWithdrawal: null
						});
					}
					data.points += 1;
					await data.save();
					await chnlrewardspin.send({
						content: `<a:a_:1349855047009304692> <@${inviter.id}> لقد دعوت <@${member.id}>. نقاطك الآن: **${data.points}**`
					});
					try {
						await inviter.send({
							content: `<a:a_:1349855047009304692> <@${inviter.id}> لقد دعوت <@${member.id}>. نقاطك الآن: **${data.points}**`
						});
					} catch { }
					chnlrewardspin.send({
						files: [linelineline]
					});
				}
			} else {
				if (invv.systemm === "on") {
					let embed = new MessageEmbed().setDescription(`<@${member.user.id}> تم اضافتك من قبل <@${inviter.id}> ولكنك طالع داخل من السيرفر ❌ فلم يتم اضافة عملات`);
					await chnlreward.send({
						embeds: [embed]
					});
					try {
						await inviter.send({
							embeds: [embed]
						});
					} catch { }
					chnlreward.send({
						files: [linelineline]
					});
				}
				if (invv.spinsystem === "on") {
					await chnlrewardspin.send({
						content: `⚠️ <@${inviter.id}> لقد دعوت <@${member.id}> ولكنه طالع داخل من الخادم، لم يتم احتساب النقاط.`
					});
					try {
						await inviter.send({
							content: `⚠️ <@${inviter.id}> لقد دعوت <@${member.id}> ولكنه طالع داخل من الخادم، لم يتم احتساب النقاط.`
						});
					} catch { }
					chnlrewardspin.send({
						files: [linelineline]
					});
				}
			}
		} else {
			if (invv.systemm === "on") {
				let embed = new MessageEmbed().setDescription(`<@${member.user.id}> تم اضافتك من قبل <@${inviter.id}> حسابه اقل من3 اشهر لم يتم ❌ اضافت عملات`);
				await chnlreward.send({
					embeds: [embed]
				});
				try {
					await inviter.send({
						embeds: [embed]
					});
				} catch { }
				chnlreward.send({
					files: [linelineline]
				});
			}
			if (invv.spinsystem === "on") {
				await chnlrewardspin.send({
					content: `⚠️ <@${inviter.id}> لقد دعوت <@${member.id}> ولكن حسابه أقل من 3 شهور، لم يتم احتساب النقاط.`
				});
				try {
					await inviter.send({
						content: `⚠️ <@${inviter.id}> لقد دعوت <@${member.id}> ولكن حسابه أقل من 3 شهور، لم يتم احتساب النقاط.`
					});
				} catch { }
				chnlrewardspin.send({
					files: [linelineline]
				});
			}
			const existingMember = await InviteDatabase.findOne({
				userId: member.user.id
			});
			if (!existingMember) {
				const newMember = new InviteDatabase({
					userId: member.user.id,
					inviterName: inviter.username
				});
				await newMember.save();
			}
		}
		const existingMember = await InviteDatabase.findOne({
			userId: member.user.id
		});
		if (!existingMember) {
			const newMember = new InviteDatabase({
				userId: member.user.id,
				inviterName: inviter.username
			});
			await newMember.save();
		}
	} else if (vanityCode?.code) {
		channell.send(`📩 **${member.user.tag}** joined using the server's vanity invite: **${vanityCode.code}**.`);
		const existingMember = await InviteDatabase.findOne({
			userId: member.user.id
		});
		if (!existingMember) {
			const newMember = new InviteDatabase({
				userId: member.user.id,
				inviterName: vanityCode.code
			});
			await newMember.save();
		}
	} else {
		channell.send(`📩 **${member.user.tag}** joined, but the invite method couldn't be determined.`);
		const existingMember = await InviteDatabase.findOne({
			userId: member.user.id
		});
		if (!existingMember) {
			const newMember = new InviteDatabase({
				userId: member.user.id
			});
			await newMember.save();
		}
	}
});
client.probot.on("transfered", async (guild, data, err) => {
	if (err) return;
	if (guild.channel.id == selfChannelId) {
		guild.channel.send({
			files: [linelineline]
		});
	}
	var {
		member,
		price,
		receiver,
		isOwner,
		fullPrice,
		channel
	} = data;
	if (isOwner == false) return;
	let datausr = await db.findOne({
		id: member.user.id
	})
	if (!datausr) {
		datausr = await db.create({
			id: member.user.id,
			coins: 0,
			status_playing: "no"
		})
	}
	datausr.coins += parseInt(price)
	datausr.totaltopup += parseInt(price)
	await datausr.save()
	let embed = new MessageEmbed().setColor(serverColor).setThumbnail(client.user.avatarURL({
		dynamic: true
	})).setDescription("تم الشحن بنجاح").addFields({
		name: 'المبلغ',
		value: `> ${price}`
	}, {
		name: `المستلم`,
		value: `> ${member}`
	}, {
		name: `الرصيد الحالي`,
		value: `> ${parseInt(datausr.coins)}`
	}).setFooter({
		text: channel.guild.name
	}).setTimestamp()
	await channel.send({
		embeds: [embed],
		content: `${member}`
	})
	try {
		await member.user.send({
			embeds: [embed],
			content: `${member}`
		})
	} catch { }
	const channell = await client.channels.fetch(loggetcoin);
	let embed1 = new MessageEmbed().setColor("#00FF00").setDescription(`
✅ تم الشحن بنجاح!

:moneybag: تم شحن مبلغ \`${fullPrice.toLocaleString()}\`
:bust_in_silhouette: من قبل <@${member.user.id}>
`).setTimestamp().setFooter({
		text: "معلومات إضافية",
		iconURL: member.user.displayAvatarURL()
	});
	await channell.send({
		embeds: [embed1]
	});
	if (parseInt(price) >= bigamount) {
		await channell.send({
			content: `<@${notifyprobotid}> شحن بمبلغ كبير :warning:
شحن بالضبط ${parseInt(price)}
ايدي اللي شحن: ${member.user.id}
المنشن: <@${member.user.id}>`
		});
		let memberprobot = await client.users.fetch(notifyprobotid);
		await memberprobot.send({
			content: `<@${notifyprobotid}> شحن بمبلغ كبير :warning:
شحن بالضبط ${parseInt(price)}
ايدي اللي شحن: ${member.user.id}
المنشن: <@${member.user.id}>`
		});
	}
})