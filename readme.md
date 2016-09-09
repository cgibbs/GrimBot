## Insomnia DiscordApp Bot

### Installation
1. `npm install`
2. Rename `config.json.example` to `config.json` and fill in your credentials.
3. Use `node index.js` to run, or set up something like https://github.com/foreverjs/forever (`forever start -a index.js`)


InsomBot Commands: !commands, !help, !checkIn, !checkOut, !report, !roll, !when, !setWhen, !shouldWeDoThisDumbThing, !newSession, !forgetAboutDre, !giphy, !img, !define, !40KWikia, !1d4chan

!commands returns a list of commands.

!help links to this README, so that you can see these entries.

!checkIn checks the user in as able to attend the next session.

!checkOut checks the user out as unable to attend the next session.

!report lists everyone who has checked in for the next session.

!roll command takes a string in the format '1d20'. More complicated commands also exist, which are documented here: https://www.npmjs.com/package/node-dice-js

!when gives the time for the next session.

!setWhen <string> sets the time for the next session.

!shouldWeDoThisDumbThing tells you whether we should do the dumb thing you're thinking about doing.

!newSession resets the session information (time and checked-in status) to default.

!giphy <string> searches for a gif matching the given string.

!img <string> searches imgur for an image matching the given string.

!40KWikia <string> searches the 40K Wiki for an article matching the given string.

!1d4chan <string> searches 1d4chan for an article matching the given string.
