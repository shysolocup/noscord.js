<table>
<tr><td>

creates a new glued event with the given info<br>

> notes:
> - optional *term* argument lets you filter the event for certain flags
> - *func* callback argument must return an Array
> <br>

<br>
</td><td> 

`Function` `Sync`

</td><td>

- [src / Services / EventService / glue / custard / init.js](https://github.com/paishee/noscord.js/blob/main/src/Services/EventService/glue/custard/init.js)
- [src / Services / EventService / glue / events](https://github.com/paishee/noscord.js/tree/main/src/Services/EventService/glue/events)
- [src / Services / EventService / Event.js](https://github.com/paishee/noscord.js/blob/main/src/Services/EventService/Event.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *name(s)* `String` or `Array`<br>
> name(s) of the new event<br>
>
> - *func* `Function`<br>
> callback for altering the output of the Discord.JS event<br>
> must return an Array
>
> - *glue* `String`<br>
> Discord.JS event to glue to
>
> - *?term* `Function`<br>
> acts as a sort of filter where you can check the output of the Discord.JS event for certain flags
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/GlueHandler) </h1>