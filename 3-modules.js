//Modules -Encapsulated Code(only share minimum)
//CommonJS, every file is module(by default)
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-fav");

require("./7-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(names);
