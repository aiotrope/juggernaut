"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
var BookSchema = new _mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: String,
    trim: true,
    required: true
  },
  pages: {
    type: Number,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },
  collection: 'Books'
});
BookSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
var Book = (0, _mongoose.model)('Book', BookSchema);
var _default = Book;
exports.default = _default;