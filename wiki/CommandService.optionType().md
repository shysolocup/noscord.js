gets option types<br>
arguments: 
- type `Any`
<br>

```js
commands.optionType("user"); // 6
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/CommandService/custard/optionType.js)

<br>


| Type              | Alternate                        | Bit  |
|-------------------|----------------------------------|------|
| sub_command       | • sub_com <br> • sub             | 1    |
| sub_command_group | • sub_com_group <br> • sub_group | 2    |
| string            | • str                            | 3    |
| integer           | • int                            | 4    |
| booelan           | • bool                           | 5    |
| user              | • member                         | 6    |
| channel           | None                             | 7    |
| roles             | None                             | 8    |
| mentionable       | • mention                        | 9    |
| number            | • num                            | 10   |
| attachment        | • file                           | 11   |
<br>


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Commands) </h1>