const UserGroup = require('../index.js');


UserGroup.newC("UserPayload", class {
	constructor(id, guild) {
		const client = this.parent.parent.parent;
		client.import("users");
		var data = {};


		function pack() {
			users.get(id, guild).then( async (user) => {
				Object.assign(data, user);
			});
		}


		async function payload() {
			return new Promise( res => {
				res();
				pack();
			}).then( () => data );
		}


		let stuff = payload();

		return stuff;
	}
});


module.exports = UserPayload
