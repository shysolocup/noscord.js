const { Client } = require('./Client');
let client = new Client({ intents: 33283 });

let { token } = require('./config.json');


new client.ComponentService;
let channels = new client.ChannelService;


client.on("ready", async (ctx) => {
    let channel = await channels.get("test");


    let btns = [
        new Button({ id: "a", label: "a", style: "success" }),
        new Button({ id: "b", label: "b", style: "danger" })
    ];


    let row = new Row(btns);


    channel.send({ components: [row] });
});


client.login(token);
