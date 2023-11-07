const UserGroup = require('../index.js');


UserGroup.newC("UserPayload", class {
	constructor(id, guild, base) {
		const client = this.parent.parent.parent;
		client.import("users");
		
		this.id = id;
		this.guild = guild;
		this.guildId = guild;
		this.data = {};

		this._promiseProxy = {

			self: null,

			stores: {
				data: [],
				promise: [],
			}
			
		};

		var pack = () => {
			users.get(this.id, this.guild).then( async (user) => {
				Object.assign(this.data, user);
			});
		}


		let stuff = new Proxy(
			Promise.resolve(new Proxy(this.data, {
				get: (...args) => {
					this._promiseProxy.stores.data = args;

					const { data, promise } = this._promiseProxy.stores;
					const [ target, prop ] = args;

					if (data.length > 0 && promise.length > 0) Object.assign(target, base);
					
					return target[prop];
				}
			})), {

			get: (...args) => {
				this._promiseProxy.stores.promise = args;

				const [ target, prop ] = args;
				return target[prop].bind(target);
			}
		});

		
		this._promiseProxy.self = stuff;

		return stuff;
	}
});


module.exports = UserPayload
