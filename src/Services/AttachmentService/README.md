# attachment service
attachment service is where you can create and edit files more easily to use in messages/embeds<br>
it includes built in functions for resizing images and making attachments from image urls
```js
const att = new client.AttachmentService;


let img = await att.create(url, {
    width: 50,
    height: 50
});


img = await img.resize(50, 50);


ctx.reply({ files: [img.png, img.jpeg] });
```
