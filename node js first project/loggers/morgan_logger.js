const morgan = require("morgan");

const morgan_middleware = morgan("common");

module.exports = morgan_middleware;