const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} , ${id}`);
});

customEmitter.emit("response", "john", 23);
