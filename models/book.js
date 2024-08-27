// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true, required: true },
  publishedDate: { type: Date },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
