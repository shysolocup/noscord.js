const cl = require('aepl');
const { Soup } = require('stews');
const { Client } = require('discord.js');
const fs = require('fs');

const eventList = require('../Services/EventService/list.js');

const exp = new Soup(Object);


class Client {
    constructor() {
        this.shit = new Client(...Array.from(arguments));
        this.token = undefined;
        
        
        /* service compiling */
        let serv_dir = require('../Services/funky_dir');
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
           this[folder] = require(`../Services/${folder}`);
        });


        
        /* function compiling */
        let func_dir = require('./functions/funky_dir');
        let functions = fs.readdirSync(func_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        functions.forEach( (file) => {
            require(`./functions/${file}`);
        });

        

        /* command handling */
        this.commands = new Soup({
            msg: new Soup(Object),
            slash: new Soup(Object)
        });
        

        
        /* event handling */
        this.events = new Soup(Object);
        eventList.forEach( (name) => {
            this.events.push( name, new this.Event() );
        });
        
    }
}


exp.pull("Client", cl.from(Client));
module.exports = exp;
