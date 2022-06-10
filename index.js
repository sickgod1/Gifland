const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

const Enmap = require("enmap");

const config = require("./config.json");
client.config = config;

client.commands = new Enmap();

fs.readdir("./commands/", async (err, files) => 
{
  files.forEach((file) => 
  {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded Command '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
});
b

client.login(config.token || process.env.TOKEN);


const getRandomGifAvatar = async (client) => {
            const targetGuild = client.guilds.cache.get('954626452647735296')
            const gifTargetChannel = targetGuild.channels.cache.get('977932764189970514')
            const normalTargetChannel = targetGuild.channels.cache.get('977932764189970514')

            if(!targetGuild || !gifTargetChannel || !normalTargetChannel) return console.log('no guild')

            await targetGuild.members.fetch({ force: true }).then(members => {

                let gifTargetMembers = members.filter(member => {
                    return member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')
                })

                let normalTargetMembers = members.filter(member => {
                    return member.user.displayAvatarURL({ dynamic: true }).endsWith('.webp')
                })

                if(!normalTargetMembers.size || !gifTargetMembers.size) return

                let gifRandUser = gifTargetMembers.random()
                let normalRandUser = normalTargetMembers.random()

                const { MessageEmbed } = require('discord.js')

                let gifEmbed = new MessageEmbed()
                    .setImage(gifRandUser.user.displayAvatarURL({ dynamic: true }))
                gifTargetChannel.send({ embeds: [gifEmbed] })

                let normalEmbed = new MessageEmbed()
                    .setImage(normalRandUser.user.displayAvatarURL())
                normalTargetChannel.send({ embeds: [normalEmbed] })
            })
        }
        setInterval(getRandomGifAvatar, 250 * 60, client)