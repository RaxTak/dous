const Discord = require('discord.js');
function randomArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('flip')
    .setDescription('Flip a coin'),
  async execute(interaction) {
    const coinimg = [
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Rupees_10_Grain_Series_coin_reverse.png",
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rupees_10_Grain_Series_coin_.png"
    ];
    const coin = [
      "Heads",
      "Tails"
    ]
    await interaction.reply("https://thumbs.gfycat.com/SentimentalAliveEchidna-size_restricted.gif")
    await wait(3000)
    await interaction.editReply('<@' + interaction.user.id + '> ' + randomArray(coin))
  },
};
