import('node-fetch');
const { Soup } = require('stews');


module.exports = (async () => {
    let thing = await fetch("https://raw.githubusercontent.com/discordjs/discord-api-types/refs/heads/main/payloads/common.ts");

    let buffer = (await thing.body.getReader().read()).value.buffer;
	let result = Buffer.from(buffer).toString();

    let stuff = Soup.from(result.split("\n"));

    let lines = stuff.filter( (l, i) => {
        return l.includes("1n <<");
    });

    lines = lines.map( (l, i) => {
        let rep = l.replace("1n <<", "");
        let sub = ((rep.substring(0, rep.length - 4)).trim()).replace(":", "");
        return sub;
    });
    
    
    return lines
})();
