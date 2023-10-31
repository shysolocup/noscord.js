[assets]: <> ( 
  🟢
  🟠
  🔴
  🔵
  ⚪
  🟣
)


---


# DOCS CHECKLIST
this list documents finished and unfinished documentation pages<br>
in the source for this file there's a comment with the emoji assets used for easier access

🟢 = finished<br>
🔴 = unfinished<br>

<br>

### Glossary
| | | | | |
| - | - | - | - | - |
| <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#client) Client </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#events) Events </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#users) Users </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#users) Messages </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#guilds) Guilds </b> |
| <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#channels) Channels </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#permissions) Permissions </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#roles) Roles </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#attachments) Attachments </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#components) Components </b> |
| <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#util) Util </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#voice) Voice </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#types) Types </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#errors) Errors </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#addons) Addons </b> |
| <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#commands) Commands </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#logs) Logs </b> | <b> [🛈](https://github.com/paigeroid/noscord.js/blob/main/prog/DOCSCL.md#stores) Stores </b> |
| | | | | |

<br>

---

<br>

| 🔴 | <h2>Client</h2> |
| - | - |
| 🟢 | main |
| 🟢 | token |
| 🟢 | user |
| 🟢 | commands |
| 🟢 | events |
| 🟢 | services |
| 🟢 | types |
| 🟢 | spreads |
| 🟢 | command() |
| 🟢 | import() |
| 🟢 | login() | 
| 🟢 | on() | 
| 🟢 | onCommand() |
| 🟢 | onPress() |
| 🟢 | onSubmit() | 
| 🟢 | spread() | 
| 🟢 | logout() | 
| 🟢 | restart() | 
| 🔴 | setMax() |
| 🟢 | off() | 
| 🟢 | _base | 
| 🟢 | _baseEvents | 
| 🟢 | _customPerms |
| 🟢 | _handler |
| 🟢 | _instances |
| 🟢 | _staticEvents |
| 🟢 | _baseEvents |
| 🟢 | Button |
| 🟢 | Embed |
| 🟢 | Event |
| 🟢 | Row |
| 🟢 | Selection |
<br>

| 🔴 | <h2>Addons</h2> |
| - | - |
| 🟢 | class |
| 🔴 | Addon | 
| 🔴 | create() | 
<br>

| 🔴 | <h2>Channels</h2> |
| - | - |
| 🔴 | main |
| 🔴 | all() | 
| 🔴 | categories() |
| 🔴 | categoryCount() | 
| 🔴 | count() |
| 🔴 | get() | 
| 🔴 | has() | 
| 🔴 | list() | 
| 🔴 | text() | 
| 🔴 | textCount() |
| 🔴 | threadCount() |
| 🔴 | threads() | 
| 🔴 | url() | 
| 🔴 | voice() |
| 🔴 | voiceCount() |
<br>

| 🟢 | <h2>Commands</h2> |
| - | - |
| 🟢 | main |
| 🟢 | create() |
| 🟢 | list() |
| 🟢 | optionType() |
| 🟢 | SlashCommand |
| 🟢 | SlashCommand.name |
| 🟢 | SlashCommand.description |
| 🟢 | SlashCommand.options |
| 🟢 | SlashCommand.cooldown |
| 🟢 | SlashCommand.nsfw |
| 🟢 | SlashCommand.info |
| 🟢 | SlashCommand.data |
| 🟢 | SlashCommand.CooldownHandle | 
| 🟢 | SlashCommand.CooldownHandle.data | 
| 🟢 | SlashCommand.CooldownHandle.active |
| 🟢 | SlashCommand.CooldownHandle.time |
| 🟢 | SlashCommand.CooldownHandle.timeMs |
| 🟢 | SlashCommand.CooldownHandle.timestamp | 
| 🟢 | SlashCommand.CooldownHandle.add() | 
| 🟢 | SlashCommand.CooldownHandle.remove() |
| 🟢 | SlashCommand.CooldownHandle.add() |
| 🟢 | SlashCommand.CooldownHandle.get() |
| 🟢 | SlashCommand.CooldownHandle.has() |
| 🟢 | SlashCommand.CooldownHandle.wipe() |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.user |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.time |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.timeMs |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.remaining |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.start |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.end |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.timeout |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.data |
| 🟢 | SlashCommand.CooldownHandle.CooldownUserHandle.remove() |
<br>

| 🟢 | <h2>Components</h2> |
| - | - |
| 🟢 | main |
| 🟢 | Embed |
| 🟢 | Embed.title |
| 🟢 | Embed.header |
| 🟢 | Embed.description |
| 🟢 | Embed.image |
| 🟢 | Embed.thumbnail |
| 🟢 | Embed.fields |
| 🟢 | Embed.footer |
| 🟢 | Embed.title |
| 🟢 | Embed.author |
| 🟢 | Embed.url |
| 🟢 | Embed.timestamp |
| 🟢 | Button |
| 🟢 | Button.id |
| 🟢 | Button.label |
| 🟢 | Button.emoji |
| 🟢 | Button.style |
| 🟢 | Button.locked |
| 🟢 | Selection | 
| 🟢 | Selection.id |
| 🟢 | Selection.placeholder |
| 🟢 | Selection.options |
| 🟢 | Selection.min |
| 🟢 | Selection.max |
| 🟢 | Row | 
| 🟢 | Blank |
| 🟢 | _fieldForm() |
<br>

| 🔴 | <h2>Errors</h2> |
| - | - |
| 🔴 | main |
| 🔴 | NosError |
| 🔴 | NosError.attachment |
| 🔴 | NosError.name |
| 🔴 | NosError.message |
| 🔴 | NosError.fire() |
| 🔴 | create() |
<br>

| 🟢 | <h2>Events</h2> |
| - | - |
| 🟢 | main |
| 🟢 | list |
| 🟢 | create() |
| 🟢 | Event |
| 🟢 | Event.listeners |
| 🟢 | Event.fire() |
| 🟢 | Event.listen() |
| 🟢 | GlueHandler |
| 🟢 | GlueHandler.client |
| 🟢 | GlueHandler.types |
| 🟢 | GlueHandler._base |
| 🟢 | GlueHandler.init() |
<br>

| 🟠 | <h2>Expressions</h2> | Issues |
| - | - | - |
| 🟢 | class | None |
| 🟠 | emojiCount() | Needs to be typed |
| 🟠 | emojis() | Needs to be typed |
| 🟠 | stickerCount() | Needs to be typed |
| 🟠 | stickers() | Needs to be typed |
<br>

| 🟠 | <h2>Guilds</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟠 | count() | Needs to be typed |
| 🔵 | get() | Needs to be typed |
| 🟣 | has() | Untested |
| 🟠 | list() | Needs to be typed |
<br>

| 🟠 | <h2>Logs</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | get() | None |
| 🟠 | logType() | Unfinished |
<br>

| 🟠 | <h2>Messages</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | delete() | None |
| 🔵 | edit() | Fix embed attachments |
| 🟠 | followUp() | Unfinished |
| 🟢 | get() | None |
| 🟣 | has() | Untested |
| 🟠 | list() | Needs to be typed |
| 🟢 | purge() | None |
| 🔵 | reply() | Fix embed attachments |
| 🔵 | send() | Fix embed attachments |
<br>

| 🟣 | <h2>Permissions</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | _basePerms | None |
| 🟢 | _customPerms | None |
| 🟣 | cache() | Untested |
| 🟣 | list() | Untested |
<br>

| 🟠 | <h2>Roles</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟠 | get() | Needs to be typed |
| 🟠 | list() | Needs to be typed |
<br>

| 🟢 | <h2>Stores</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | Store | None |
| 🟢 | stores | None |
| 🟢 | create() | None |
| 🟢 | get() | None |
<br>

| 🟢 | <h2>Types</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| | [Type Checklist](https://github.com/paigeroid/noscord.js/blob/main/prog/TYPECL.md) | |
<br>

| 🟠 | <h2>Users</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | avatar() | None |
| 🟢 | avatarUrl() | None |
| ⚪ | banner() | Investigating a bug |
| ⚪ | bannerUrl() | Investigating a bug |
| 🟠 | botCount() | Needs to be typed |
| 🟠 | botst() | Needs to be typed |
| 🟠 | count() | Needs to be typed |
| ⚪ | decor() | Investigating a bug |
| ⚪ | decorUrl() | Investigating a bug |
| 🟠 | get() | Needs to be typed |
| 🟣 | has() | Untested |
| 🟠 | list() | Needs to be typed |
| 🟠 | memberCount() | Needs to be typed |
| 🟠 | members() | Needs to be typed |
<br>

| 🟣 | <h2>Util</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟢 | Numer | None |
| 🟣 | Pad | Untested |
| 🟢 | Timestamp | None |
| 🟢 | colors | None |
| 🟢 | genCode() | None |
| 🟢 | latency() | None |
| 🟢 | numer() | None |
| 🟣 | pad() | Untested |
| 🟢 | parse() | None |
| 🟢 | parseMs() | None |
| 🟢 | random | None |
| 🟢 | sleep() | None |
| 🟢 | snowflake() | None |
<br>

| 🟠 | <h2>Voice</h2> | Issues
| - | - | - |
| 🟢 | class | None |
| 🟣 | deafen() | Untested |
| 🟣 | find() | Untested |
| 🟣 | get() | Untested |
| 🟢 | join() | None |
| 🟠 | leave() | Does nothing currently, looking into it |
| 🟣 | me() | Untested |
| 🟣 | mute() | Untested |
| 🟠 | pause() | Unfinished |
| 🟠 | play() | Unfinished |
| 🟠 | stop() | Unfinished |
| 🟣 | undeafen() | Untested |
| 🟣 | unmute() | Untested |
<br>
