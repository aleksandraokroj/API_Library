const express = require('express');
const router = express.Router();

//import kontrolera
const BooksController = require('../controllers/books');

//import middleware
const checkAuth = require('../middleware/check-auth');

//lista wszystkich produktów
router.get('/', BooksController.books_get_all);

//dodawanie nowego produktu
router.post('/',checkAuth,BooksController.books_new);

//szczegóły produktu o nr
router.get('/:bookId', BooksController.books_get_by_id);

//zmiana produktu o nr
router.patch('/:bookId',checkAuth,BooksController.books_change);

//usunięcie produktu o nr
router.delete('/:bookId',checkAuth,BooksController.books_delete);

module.exports = router;


