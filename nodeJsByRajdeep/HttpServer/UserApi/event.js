const Eventemit = require("events");
const { eventNames } = require("process");

const event = new Eventemit();

event.on("sayMyName", () => {
  console.log("Your name is Rajdeep");
});

event.emit("sayMyName");

event.on("checkPage", (statusCode, msg) => {
  console.log(`Status Code is ${statusCode} and page is ${msg}`);
});

event.emit("checkPage", 200, ok);

event.on("checkPage", (statusCode, msg) => {
  console.log(`Status Code is ${statusCode} and page is ${msg}`);
});

const ok = "Page is okay";

event.emit("checkPage", 200, ok);
