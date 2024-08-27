// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

// Create a new book
router.post('/books', async (req, res) => {
  try {
    const { title, author, isbn, publishedDate } = req.body;
    const book = await Book.create({ title, author, isbn, publishedDate });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Search books by title or author
router.get('/bookSearch', async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } }
      ]
    });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Enhanced GET all books route with pagination and sorting
router.get('/books', async (req, res) => {
  try {
    const { limit=5, skip =5, sortType = '_id'} = req.query;
    // default sort by id
    const sortCriteria = {}
    if(sortType==='title' || sortType === 'publishedDate'||sortType ==='_id'){
      sortCriteria[sortType]=1
    }
    const books = await Book.find({})
      .sort(sortCriteria)
      .limit(parseInt(limit))
      .skip(parseInt(skip))
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book by ID
router.put('/books/:id', async (req, res) => {
  try {
    const updates = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book by ID
router.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;
