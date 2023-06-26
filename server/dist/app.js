"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));
var _db = _interopRequireDefault(require("./utils/db"));
var _middlewares = _interopRequireDefault(require("./utils/middlewares"));
var _book = _interopRequireDefault(require("./routes/book"));
require('express-async-errors');
var app = (0, _express.default)();
(0, _db.default)();
app.use(_express.default.static('../client/build'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
if (process.env.NODE_ENV === 'development') {
  var options = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  };
  app.use((0, _cors.default)(options));
}
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use(require('sanitize').middleware);
app.use((0, _expressMongoSanitize.default)());
app.use(_middlewares.default.loggingMiddleware);
app.use('/api/book', _book.default);
app.use(_middlewares.default.endPoint404);
app.use(_middlewares.default.errorHandler);
var _default = app;
exports.default = _default;