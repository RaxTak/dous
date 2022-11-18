const Discord = require('discord.js');
const tdConfig = require('./truthdareCfg.json')
function randomArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('truth')
    .setDescription('Get a random question'),
  async execute(interaction) {
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
    await interaction.reply({ embeds: [truthEmbed], components: [mesgRow] });
  },
};
