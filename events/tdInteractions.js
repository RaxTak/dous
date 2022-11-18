const Discord = require('discord.js');
const tdConfig = require('../commands/fun/truthdareCfg.json')
function randomArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction) {
    if (interaction.customId === "truthBtn") {
      let truthEmbed = new Discord.EmbedBuilder()
        .setColor(0xe67e22)
        .setTitle("Truth")
        .setDescription(randomArray(tdConfig.truth))
        .setTimestamp()
        .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()})
      const mesgRow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("truthBtn")
          .setLabel("Truth")
          .setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId("dareBtn")
          .setLabel("Dare")
          .setStyle(Discord.ButtonStyle.Danger),
        new Discord.ButtonBuilder()
          .setCustomId("randomBtn")
          .setLabel("Random")
          .setStyle(Discord.ButtonStyle.Primary)
      );


      interaction.reply({ embeds: [truthEmbed], components: [mesgRow] })
    }

    if (interaction.customId === "dareBtn") {
      let dareEmbed = new Discord.EmbedBuilder()
        .setColor(0xe67e22)
        .setTitle('Dare')
        .setDescription(randomArray(tdConfig.dare))
        .setTimestamp()
        .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()})
      const mesgRow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("truthBtn")
          .setLabel("Truth")
          .setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId("dareBtn")
          .setLabel("Dare")
          .setStyle(Discord.ButtonStyle.Danger),
        new Discord.ButtonBuilder()
          .setCustomId("randomBtn")
          .setLabel("Random")
          .setStyle(Discord.ButtonStyle.Primary)
      );


      interaction.reply({ embeds: [dareEmbed], components: [mesgRow] })
    }

    if (interaction.customId === "dadjokeBtn") {
      let dadjokeEmbed = new Discord.EmbedBuilder()
        .setColor(0xe67e22)
        .setTitle('DadJoke')
        .setDescription(randomArray(tdConfig.dj))
        .setTimestamp()
        .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()})
      const mesgRow = new Discord.ActionRowBuilder()
        .addComponents(
          new Discord.ButtonBuilder()
            .setCustomId("dadjokeBtn")
            .setLabel("Again")
            .setStyle(Discord.ButtonStyle.Primary),


        );


      interaction.reply({ embeds: [dadjokeEmbed], components: [mesgRow] })
    }
    if (interaction.customId === "randomBtn") {
      let dareEmbed = new Discord.EmbedBuilder()
        .setColor(0xe67e22)
        .setTitle('Dare')
        .setDescription(randomArray(tdConfig.dare))
        .setTimestamp()
        .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()});
      let truthEmbed = new Discord.EmbedBuilder()
        .setColor(0xe67e22)
        .setTitle("Truth")
        .setDescription(randomArray(tdConfig.truth))
        .setTimestamp()
        .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()})
      const mesgRow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("truthBtn")
          .setLabel("Truth")
          .setStyle(Discord.ButtonStyle.Success),
        new Discord.ButtonBuilder()
          .setCustomId("dareBtn")
          .setLabel("Dare")
          .setStyle(Discord.ButtonStyle.Danger),
        new Discord.ButtonBuilder()
          .setCustomId("randomBtn")
          .setLabel("Random")
          .setStyle(Discord.ButtonStyle.Primary)
      );
      
       
        var randomarr = [
          {embeds: [truthEmbed], components:[mesgRow] },
          {embeds: [dareEmbed], components:[mesgRow] }
        ]

        


      interaction.reply(randomArray(randomarr))
    }

  },
};
