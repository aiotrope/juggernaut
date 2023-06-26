"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _book = _interopRequireDefault(require("../models/book"));
var _validators = require("../utils/validators");
require('express-async-errors');
//import logger from '../utils/logger'

var createBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var body, foundBook, bookObj, book, newBook;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          body = req.body;
          _context.prev = 1;
          _context.next = 4;
          return _book.default.findOne({
            name: req.body.name
          });
        case 4:
          foundBook = _context.sent;
          if (!foundBook) {
            _context.next = 7;
            break;
          }
          throw Error('Cannot use this book name');
        case 7:
          _context.next = 9;
          return _validators.bookSchema.validate(body);
        case 9:
          bookObj = _context.sent;
          book = new _book.default(bookObj);
          _context.next = 13;
          return _book.default.create(book);
        case 13:
          newBook = _context.sent;
          return _context.abrupt("return", res.status(200).json(newBook));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(400).json({
            error: _context.t0.message
          }));
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 17]]);
  }));
  return function createBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllBooks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var response;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _book.default.find({});
        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(response));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(400).json({
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllBooks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getBook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var name, book;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          name = req.params.name;
          _context3.prev = 1;
          _context3.next = 4;
          return _book.default.findOne({
            name: name
          });
        case 4:
          book = _context3.sent;
          if (book) {
            _context3.next = 7;
            break;
          }
          throw Error('Book not found');
        case 7:
          return _context3.abrupt("return", res.status(200).json(book));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(400).json({
            error: _context3.t0.message
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function getBook(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var _default = {
  getAllBooks: getAllBooks,
  createBook: createBook,
  getBook: getBook
};
exports.default = _default;