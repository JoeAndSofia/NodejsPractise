/**
 * Created by imaginato on 19-1-7.
 */
var util = require("util");
var EventEmitter = require("events").EventEmitter;

var id = 1;
var database = {
    users: [
        { id: id++, name: "Joe Smith",  occupation: "developer"    },
        { id: id++, name: "Jane Doe",   occupation: "data analyst" },
        { id: id++, name: "John Henry", occupation: "designer"     }
    ]
};

var UserList = function(){};

util.inherits(UserList, EventEmitter);

UserList.prototype.save = function (obj) {
    obj.id = id++;
    console.log("save user", obj)
    database.users.push(obj);
    this.emit("saved-user", obj);
}

UserList.prototype.all = function () {
    return database.users;
}

module.exports = UserList