const EventEmitter = require("events");
const event = new EventEmitter();

event.on("MyName" , () => {
    console.log("My name is sakshi");
});
event.emit("MyName");
