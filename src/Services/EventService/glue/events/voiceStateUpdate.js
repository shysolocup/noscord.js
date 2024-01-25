module.exports = (handler) => { handler.init(

    
    name = [ "voiceStateUpdate", "vsUpdate", "voiceUpdate" ],  // names of the event

    
    func = async function (oldVS, newVS) { // formatting for types and stuff
        let types = this.types;
        let [ o, n ] = [ new types.VoiceState, new types.VoiceState ];

        await o.apply(oldVS);
        await n.apply(newVS);

        n.joining = o.joining = !!(!oldVS.channelID && newVS.channelId);
        n.leaving = o.leaving = !!(!newVS.channelID && oldVS.channelId);
        n.moving = o.moving = !!( !(!oldVS.channelId && newVS.channelId) && !(!newVS.channelId && oldVS.channelId) );

        return [ o, n ];
    }, 

    
    glue = "voiceStateUpdate", // what discord.js event it's tied to
)}
