/**
 * Created by imaginato on 19-1-7.
 */
var UserList = require("./UserList");
var users = new UserList();

users.on("saved-user", function (user) {
    console.log("saved: " + user.name + " (" + user.id + ")");
});

users.save({ name: "Jane Doe", occupation: "manager" });
users.save({ name: "John Jacob", occupation: "developer" });