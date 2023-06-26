"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _book = _interopRequireDefault(require("../controllers/book"));
var router = _express.default.Router();
router.get('/', _book.default.getAllBooks);
router.post('/', _book.default.createBook);
router.get('/:name', _book.default.getBook);
var _default = router;
exports.default = _default;