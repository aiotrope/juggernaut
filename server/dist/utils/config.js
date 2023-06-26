"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv.default.config();
var PORT = process.env.PORT || 8080;
var MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/testdb';
var BASE_URL = process.env.BASE_URL || 'http://localhost:8080';
var config = {
  port: PORT,
  base_url: BASE_URL,
  mongo_url: MONGO_URL
};
var _default = config;
exports.default = _default;