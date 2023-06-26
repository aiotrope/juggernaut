"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _config = _interopRequireDefault(require("./utils/config"));
var _app = _interopRequireDefault(require("./app"));
var _http = _interopRequireDefault(require("http"));
var _logger = _interopRequireDefault(require("./utils/logger"));
var server = _http.default.createServer(_app.default);
var port = _config.default.port;
server.listen(port, function () {
  _logger.default.http("Server is running on port ".concat(port));
});