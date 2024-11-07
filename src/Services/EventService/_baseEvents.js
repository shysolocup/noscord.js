import('node-fetch');


// fetching events
let list = (async () => {
	let events = await fetch("https://raw.githubusercontent.com/discordjs/discord.js/refs/heads/main/packages/discord.js/src/util/Events.js");

	let buffer = (await events.body.getReader().read()).value.buffer;
	let stuff = Buffer.from(buffer).toString();

	return Object.values(eval(stuff));
})();


module.exports = list;
