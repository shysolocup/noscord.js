const fs = require('fs');
const pages = fs.readdirSync('wiki');

console.log(pages);

pages.forEach(p => {
    let content = fs.readFileSync(`wiki/${p}`, 'utf8');

    let replacers = {
        "paigeroid": "shysolocup",
        "paishee": "shysolocup"
    };

    for (let [r, w] of Object.entries(replacers)) {
        while (content.includes(r)) {
            content = content.replace(r, w)
        }
    }

    fs.writeFileSync(`wiki/${p}`, content);
});
