import('node-fetch');
const UtilService = require('../index.js');
const { Soup } = require('stews');


// fetching events
let list = (async () => {
	let emojis = await fetch("https://raw.githubusercontent.com/ArkinSolomon/discord-emoji-converter/refs/heads/master/emojis.json");	
	
	let result = await emojis.json();

	return result
})();


UtilService.prototype.emojis = list;


module.exports = list;
