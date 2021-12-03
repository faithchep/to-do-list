require("dotenv").config();
const harperive = require("harperive");

const DB_CONFIG = {
    harperHost: process.env.https,//cloud-1-sample.harperdbcloud.com,
    username: process.env.test,
    password: process.env.Test123,
    schema: process.env.todo,
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;