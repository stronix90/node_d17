const parseArgs = require("minimist");
const ENV = require("./envVariables");

const options = {
    default: { port: ENV.PORT || 8080, modo: "fork" },
    alias: { p: "port", m: "modo" },
};

const { port, modo } = parseArgs(process.argv.slice(2), options);

module.exports = { port, modo };
