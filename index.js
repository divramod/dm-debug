var tasks = {};

// example
tasks.example = require("./tasks/example/index.js").start;

// automatically add tasks here
tasks.test1 = require("./tasks/test1/index.js").start;

module.exports = tasks;
