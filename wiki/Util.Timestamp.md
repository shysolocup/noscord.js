creates a new timestamp<br>
type: `AeplSubClass`<br>

arguments:
- ?date `Date`

<br>

```js
let timestamp = new Timestamp();


let embed = new client.Embed({
    description: `this was sent ${timestamp.relative} with a latency of ${timestamp.latency(message)}ms`,
    timestamp: timestamp.embed,
    footer: "sent at"
});
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/Timestamp.js)

<br>

NOTE: examples provided by [LeviSnoot/discord-timestamps.md](https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa)
<br><br>

| <h3> Property </h3> | <h3> Showcase </h3> | <h3> Syntax </h3> |
| - | - | - |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.date) date | None | `2018-11-28T09:01:00.000Z` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.now) now | None | `1698425091743` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.snowflake) snowflake | None | `517263631319040000` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.embed) embed | `3 years ago` | `2018-11-28T09:01:00.000Z` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.default) default | `November 28, 2018 9:01 AM` | `<t:1543392060>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.relative) relative | `3 years ago` | `<t:1543392060:R>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.shortTime) shortTime | `9:01 AM` | `<t:1543392060:t>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.longTime) longTime | `9:01:00 AM` | `<t:1543392060:T>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.shortDate) shortDate | `11/28/2018` | `<t:1543392060:d>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.longDate) longDate | `November 28, 2018` | `<t:1543392060:D>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.short) short | `November 28, 2018 9:01 AM` | `<t:1543392060:f>` |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Util.Timestamp.long) long | `Wednesday, November 28, 2018 9:01 AM` | `<t:1543392060:F>` |


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util) </h1>