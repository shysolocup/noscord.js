const EventHandler = require('../index.js');


EventHandler.newF("init", async (name, func, glue=null) => {
    let types = this.types;
	
	if (glue && (await this.defaults).includes(glue)) {
		return this.shit.on(glue, function (/**/) {
            return func(...Array.from(arguments));
        });
    }
});
