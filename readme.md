## Insomnia DiscordApp Bot

### Installation
1. `npm install`
2. Rename `config.json.example` to `config.json` and fill in your credentials.
3. Use `node index.js` to run, or set up something like https://github.com/foreverjs/forever (`forever start -a index.js`)

Default commands: `!img`, `!giphy`, `!define`, `!commands`. These can be edited in config.json

!roll command takes a string in the format '1d20'. More complicated commands also exist, which are documented here: https://www.npmjs.com/package/node-dice-js
