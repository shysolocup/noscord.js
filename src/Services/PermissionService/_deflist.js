import('node-fetch');
const { Noodle } = require('stews');


module.exports = (async () => {
    let thing = await fetch("https://github.com/discordjs/discord-api-types/blob/main/payloads/common.ts");
    let result = await thing.json();

    let stuff = Noodle.from(result.payload.blob.rawLines.join("\n"));
    let index0 = stuff.indexOf("PermissionFlagsBits");
    let index1 = stuff.indexOf("as const;");
    
    stuff.scoop( (v, i) => {
        return i < index0 || i >= index1;
    });

    
    return eval(stuff.toString());
})();
