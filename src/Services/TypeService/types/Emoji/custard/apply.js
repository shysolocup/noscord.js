const Emoji = require('../index.js');


Emoji.newF("apply", async function(base) {
    const client = this.parent.parent;
    client.import({ att: "attachments" }, "util");
    
    this.id = base.id;
    this.name = base.name;
    this.animated = base.animated;
    this.url = base.imageURL('png');
    this.attachment = await att.create(this.url);
    this.identifier = base.identifier;

    this.createdAt = base.createdAt;
    this.timestamps = {
        created: new Timestamp(base.createdAt)
    };
})
