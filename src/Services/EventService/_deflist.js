import('node-fetch');

module.exports = ( async () => {
	events = await fetch("https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Events.js");	
	let result = await events.json();
	return Object.values(eval(result.payload.blob.rawLines.join("\n")));
})();
