module.exports = (handler) => { handler.init(

    
    name = "joinVoice",  // names of the event

    
    func = async function (...args) { // formatting for types and stuff
        return args;
    }, 

    
    glue = "voiceStateUpdate", // what discord.js event it's tied to

    
    term = function(oldVS, newVS) { // specific action that triggers the event
        return (!oldVS.channelID && newVS)
    }
)}
