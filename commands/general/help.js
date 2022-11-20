const Discord = require('discord.js');


module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('help')
    .setDescription('Get help'),
  async execute(interaction) {
    let helpEmbed = new Discord.EmbedBuilder()
      .setColor(0xe67e22)
      .setTitle("Help")

      
      .setURL('https://youtu.be/d-ggzGbsEWE')

      .setDescription(`Commands Available :`)
      .addFields(


        { name: '━━ 🤖 ・ General commands ━━', value:' `/ping`, `/help`, `/purge` '},
        { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },
        { name: '━━ 🎈 ・ Fun commands ━━', value: ' `/dadjoke`, `/dare`, `/truth`, `/meme`, `/flip` , `/define`,`/rickroll`'  },
        { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },

      )

    .setTimestamp()
    .setAuthor({ name: 'Requested by ' + interaction.user.username.toString(), iconURL: interaction.user.displayAvatarURL() });

    await interaction.reply({ embeds: [helpEmbed] })
  
  },
};



