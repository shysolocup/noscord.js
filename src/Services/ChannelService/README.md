# channel service

channel service is the part of the API for managing and fetching available channels
```js
const channels = new client.ChannelService;


let channel = await channels.get(id);
let guild = channel.guild;


let all = await channels.all(guild); // all channel types including categories
let list = await channels.list(guild); // all text, voice, and thread channels
let tcs = await channels.text(guild); // all text channels
let vcs = await channels.voice(guild); // all voice channels
let threads = await channels.threads(guild); // all threads
let categories = await channels.categories(guild); // all categories


let count = await channels.count(guild);
let tcCount = await channels.textCount(guild);
let vcCount = await channels.voiceCount(guild);
let threadCount = await channels.threadCount(guild);
let categoryCount = await channels.categoryCount(guild); 
```
