var Hangouts = require("./Hangouts.js");
let xmljs = require('xml-js');

var hangoutsJson = require("./Hangouts.json");

var hangoutsConversations = new Hangouts(hangoutsJson);

//console.log(hangoutsConversations.selfUserId);

//console.log(JSON.stringify(hangoutsConversations.toXml(), null, 2));
console.log(xmljs.js2xml(hangoutsConversations.toXml(), {compact: true, spaces: 4}));