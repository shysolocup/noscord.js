const { Client } = require('../index.js');
const fs = require('fs');


Client.newF("spread", function(path, data=null, ignore=["index.js", "index.ts"], action=(path, file, spreads) => { require(`../../../../../${path}/${file}`)(...spreads); }) {
	if (!data) data = [this];
	
	let files = fs.readdirSync(`${path}`).filter(file => ((file.endsWith('.js') || file.endsWith('.ts')) && !ignore.includes(file) ));
	
	files.forEach( (file) => { action(path, file, data) } );
});
