module.exports = (handler) => { handler.init(

    
    name = [ "move", "moveVoice" ],  // names of the event

    
    func = async function (oldVS, newVS) { // formatting for types and stuff
        let types = this.types;
        let [ o, n ] = [ new types.VoiceState, new types.VoiceState ];

        await o.apply(oldVS, newVS);
        await n.apply(newVS, oldVS);

        return [ o, n ];
    }, 

    
    glue = "voiceStateUpdate", // what discord.js event it's tied to

    
    term = function(oldVS, newVS) { // specific action that triggers the event
        return ( !(!oldVS.channelId && newVS.channelId) && !(!newVS.channelId && oldVS.channelId) );
    }
)}
