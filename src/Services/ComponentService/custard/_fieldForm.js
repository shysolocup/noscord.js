const ComponentService = require('./index.js');

ComponentService.newF("_fieldForm", (fields) => {
	fields = Soup.from(fields);

	
	// sorts by their line
	fields = fields.sort((a, b) => {
		return a.line - b.line;
	});


	// adds line breaks
	fields.forEach( (field, i) => {
		let last = fields.get(i-1)
		let thing = { name: "** **", value: "** **", line: field.line, inline: false }

		if (last && last.line != field.line) fields.append(i, thing);
	});


	// final edits
	fields = fields.map( (field) => {
		if (field.inline == null) field.inline = true;
		if (!field.name) field.name = "** **";
		if (!field.value) field.value = "** **";
		return JSON.stringify(field);
	});


	// returns fields
	return new Function(`return [${fields.join(",\n")}]`)();
});
