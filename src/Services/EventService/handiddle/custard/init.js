const EventHandler = require('../index.js');


EventHandler.newF("init", (name, func, glue=null) => {
    let types = this.types;
	
	if (glue && (await this.defaults).includes(glue)) {
		return this.shit.on(glue, async function (/**/) {
            return await func(...Array.from(arguments));
        });
    }
});
