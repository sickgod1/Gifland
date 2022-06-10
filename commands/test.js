const Discord = require('discord.js');

module.exports.run = async (client, message, args) => 
{
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("sickgod.xyz")
        .setColor(3447003)
 
    await message.channel.send(embed);
};

module.exports.help = 
{
    name: "bogdan mi l suge"
};