const Message = require('../index.js');


Message.newF("edit", function(/**/) { return (async () => {
    const client = this.parent.parent;
    client.import("app", "types", "components");
    
    let msg = this.raw;
    let args = Array.from(arguments);
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = args[0];
    }

    if (settings.embeds) {
        settings.embeds.map( (embed) => {
            embed = new Embed(embed);
            
            let img = embed.image.url;
            let tn = embed.thumbnail.url;
            
            if (img instanceof types.Attachment || img.constructor.name == "AttachmentBuilder") {
                embed.image.url = `attachment://${img.name}`;
                (settings.files) ? settings.files.push(img) : (()=>{ settings.files = []; settings.files.push(img); })();
            }
            
            if (tn instanceof types.Attachment || img.constructor.name == "AttachmentBuilder") {
                embed.thumbnail.url = `attachment://${tn.name}`;
                (settings.files) ? settings.files.push(tn) : (()=>{ settings.files = []; settings.files.push(tn); })();
            }

            return embed;
        });
    }

    let edit = new types.MessageEdit();
    await edit.apply( await msg.edit(settings) );

    if (settings.deleteAfter) await edit.delete(settings.deleteAfter);

    return edit;
    
})(); });
