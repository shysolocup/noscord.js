<table>
<tr><td>

dynamically imports services with a custom syntax that<br>lets you mix and match types<br>

> notes:
> - automatically defines the services you import
> <br>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / import.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/import.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *...imports* `Any`<br>
> all of the services you want to import<br>
> possible import styles:
>> - `String`: name of the service
>> - `Array`: array of service names
>> - `Object`: lets you set the def name
> <br>

<br>

</td>

</table>
<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("users", "util", [ "guilds", "channels" ], { com: "commands", exp: "expressions" });      
```

</td></tr>
</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Client-Elements) </h1>