const { Client } = require('../index.js');
const fs = require('fs');


Client.newF("spread", function(path, ignore=["index.js", "index.ts"], action=(path, file) => { require(`../../../../${path}/${file}`)(this); }) {
    this.on("ready", () => {   
        let files = fs.readdirSync(`${path}`).filter(file => ((file.endsWith('.js') || file.endsWith('.ts')) && !ignore.includes(file) ));
	    files.forEach( (file) => { action.bind(this)(path, file) } );
    })
});
