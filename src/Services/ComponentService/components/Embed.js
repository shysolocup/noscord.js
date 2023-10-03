const ComponentService = require('../index.js');


ComponentService.newC("Embed", class {
    constructor(data) {

        // author
        if (data.author) {
  			if (data.author.icon) { data.author.icon_url = data.author.icon; }
  			else if (data.author.iconURL) { data.author.icon_url = data.author.iconURL; }
  		}


        // thumbnail
        if (typeof data.thumbnail == "string") {
            let thumbnail = data.thumbnail;
            data.thumbnail = { url: thumbnail };
        }


        // image
        if (typeof data.image == "string") {
            let image = data.image;
            data.image = { url: image };
        }


        // timestamp
        if (data.timestamp) {
            if (data.timestamp.toLowerCase() == "now") data.timestamp = new Date().toISOString();
        }


        // footer
        if (data.footer) {
            if (typeof data.footer == "string") {
                let footer = data.footer;
                data.footer = { text: footer };
            }
            
            if (data.footer.name) { data.footer.text = data.footer.name; }
            if (data.footer.icon) { data.footer.icon_url = data.footer.icon; }
            else if (data.footer.iconURL) { data.footer.icon_url = data.footer.iconURL; }
        }


        return data;
    }
});
