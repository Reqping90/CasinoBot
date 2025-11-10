if (interaction.customId == `arkam1tk_${interaction.message.id}`) {
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
}