let template = require("./users.pug");
let locals = {
  users: [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5"
  ]
};
document.querySelector("main").innerHTML = template(locals);