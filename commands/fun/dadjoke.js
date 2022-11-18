const Discord = require('discord.js');
const tdConfig = require('./truthdareCfg.json')
function randomArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('dadjoke')
    .setDescription('Get a random dadjoke'),
  async execute(interaction) {
    let dadjokeEmbed = new Discord.EmbedBuilder()
      .setColor(0xe67e22)
      .setTitle("DadJoke")
      .setDescription(randomArray(tdConfig.dj)) 
      .setTimestamp()
      .setAuthor({name: 'Requested by ' + interaction.user.username.toString(), iconURL:interaction.user.displayAvatarURL()})
    const mesgRow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("dadjokeBtn")
          .setLabel('Again')
          .setStyle(Discord.ButtonStyle.Primary)
      
      );
   
    await interaction.reply({ embeds: [dadjokeEmbed], components: [mesgRow] });
  },
};
