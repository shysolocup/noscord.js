/*
	:: WumpCli :: Alpha 1.0.0 | 09/29/23 ::
	https://github.com/paigeroid/wumpcli

*/

/* :: Created by @paigeroid using :: *//*
    - aepl: https://github.com/paigeroid/aepl
	- Stews: https://github.com/paigeroid/stews
    - Discord.JS: https://github.com/discordjs/discord.js
*/



const cl = require('aepl');
const fs = require('fs');

const { Soup } = require('stews');
const { Client } = require('discord.js');

const eventList = require('../Services/EventService/list.js');

const exp = new Soup(Object);



class WumperClient {
    constructor(/**/) {
        this.token = undefined;
        this.shit = new Client(...Array.from(arguments));



        /* service compiling */
        let serv_dir = require('../Services/_funkydir');
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            require(`../Services/${folder}`);
        });



        /* function compiling */
        let cust_dir = require('./custard/_funkydir');
        let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        cust.forEach( (file) => {
            require(`./custard/${file}`);
        });



         /* command handling */
         this.commands = new Soup(Object);
            

            
         /* event handling */
         let events = this.events = new Soup(Object);
         eventList.forEach( (thing) => {
			 let event = new this.Event();


			 // events with multiple names
			 if (thing instanceof Array) thing.forEach( (name) => {
             	this.events.push(name, event);
			 });


			 // events with one name
			 else this.events.push(thing, event);
		 });


		 this.EventSetup();
    }
}


exp.pull("Client", cl.from(WumperClient));
module.exports = exp;
