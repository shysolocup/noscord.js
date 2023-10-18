# glue handlers

glue handling is how discord.js events and noscord.js events are stuck together<br>
noscord.js glue events act as sort of a middle-man between discord.js and the user, sticking discord.js events and noscord.js events together through a goofy system<br><br><br>


### discord.js
reacts when events are ran and is used as a basis for the events<br><br>
↓ ↓ ↓
### noscord.js
gets the response from discord.js and alters the info then sends it to the user<br><br>
↓ ↓ ↓
### user
the user gets the info and uses it in the bot

<br><br>

the main events are stored in the [events folder](https://github.com/paigeroid/noscord.js/tree/main/src/Services/EventService/glue/events)<br>
most of the events have a somewhat simple setup if you want to mod them in any way<br>

```js
module.exports = (handler) => { handler.init( // sets up the handler and initializes the glued event


    /*
        == NAME ==
            :: name of the event
            :: can be an array for multiple names or just a string
    */


    name = "event",


    /*
        == FUNC ==
            :: function that formats the event from discord.js types to noscord.js types
            :: IMPORTANT: should always return an array or else it'll break
    */


    func = async function () { /* put your stuff here */ }, 


    /*
        == GLUE ==
            :: glue is what discord.js event it's tied to
            :: when that event is fired it'll then fire the glued noscord.js event
    */


    glue = "ready"


    /*
        == TERM ==
            :: term is optional it's mostly for if you want to specifically stop it from firing if a requirement is not met
            :: when the event is firing it'll check if this exists and if it is true or not
            :: also can be async if you want it to it's awaited in the init function
    */


    term = function () { /* put your stuff here */ }
)}
```
