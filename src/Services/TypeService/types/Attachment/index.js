const TypeService = require('../../index.js');
const { AttachmentBuilder } = require('discord.js');

TypeService.newC("Attachment", class {
    constructor(canvas, settings={}) {
        this.png = new AttachmentBuilder( canvas.toBuffer("image/png"), settings );
		this.jpeg = new AttachmentBuilder( canvas.toBuffer("image/jpeg"), settings );

		this.url = canvas.toDataURL();
		this.raw = canvas;

        this.width = canvas.width;
        this.height = canvas.height;

        this.settings = settings;
    }
});

module.exports = Attachment;

let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
