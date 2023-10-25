const { Client } = require('../index.js');
const fs = require('fs');


Client.newF("spread", function(path, data=null, ignore=["index.js", "index.ts"], action= (path, file, spreads) => { 
		return { data: require(`../../../../../${path}/${file}`), content: spreads };
}) {
	if (!data) data = [this];
	
	let files = fs.readdirSync(`${path}`).filter(file => ((file.endsWith('.js') || file.endsWith('.ts')) && !ignore.includes(file) ));
	
	files.forEach( (file) => { 
		this.spreads.push( action(path, file, data) );
	});
});
