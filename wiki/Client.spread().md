<table>
<tr><td>

spreads out data over another directory if you want to have commands in a separate folder<br>

spread tasks are stored in [Client.spreads](https://github.com/paishee/noscord.js/wiki/Client.spreads) and they're ran when the client logs in<br>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / spread.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/spread.js)
- [src / Client / index.js](https://github.com/paishee/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *directory* `String`<br>
> directory you want to spread to<br>
>
> - *?data* `Array`<br>
> arguments you want to spread with it<br>defaults to just the client if not given<br>
>
> - *?ignore* `Array`<br>
> files to ignore in the directory<br>automatically contains index.js and index.ts<br>
>
> - *?action* `Function`<br>
> what the spread does internally with the stuff<br>don't change if you don't know what you're doing
> <br>

<br>

</td>

</table>

<table>

<tr><td> JS (index.js) </td></tr>

<tr><td>

```js
client.spread("src/commands");                     
```

</td></tr></table>


<table>

<tr><td> JS (src/commands/ping.js) </td></tr>

<tr><td>

```js
module.exports = (client) => {	

    client.import("commands", "app", "components");

    commands.create("ping", "replies with pong", (ctx) => {
	let timestamp = new Timestamp();

	let embed = new Embed({
		header: "Pong!",
		timestamp: timestamp.embed,
		color: app.colors.blurple,
		footer: `latency: ${timestamp.latency(ctx)}ms`
	});

	ctx.reply({ embeds: [embed] });
    });
	
}
```

</td></tr>
</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client-Elements) </h1>