import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function power(msg, args) {
  if(args.length >= 3) return msg.channel.send("Only two values can be provided \`$pow <num1> <num2>\`");

  var num1 = parseInt(args[0]);
  var num2 = parseInt(args[1]);

  embed.setTitle("The answer is...")
  embed.setDescription(`\`${Math.pow(num1, num2)}\``)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.channel.send(embed);
}

export default power;