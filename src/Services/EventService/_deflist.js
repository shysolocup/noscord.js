import('node-fetch');
var events;

module.exports = ( async () => {
	events = await fetch("https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Events.js");	
	let result = await events.json();
	return events = Object.values(eval(result.payload.blob.rawLines.join("\n")));
})();
