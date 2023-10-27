const { AttachmentBuilder } = require('discord.js');
const TypeService = require('../../index.js');
const fs = require('fs');


TypeService.newC("Attachment", class {
    constructor(canvas, settings={}) {
        this.png = new AttachmentBuilder( canvas.toBuffer("image/png"), settings );
	
		this.name = this.png.name
		this.description = this.png.description;
		this.embed = `attachment://${this.png.name}`

		this.base = this.png.attachment;
		this.raw = canvas;

        this.width = canvas.width;
        this.height = canvas.height;

        this.settings = settings;
    }


	get url() {
		return this.raw.toDataURL();
	}


	[Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.embed;
        }
    }
});


module.exports = Attachment;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
