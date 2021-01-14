const express = require('express');
const router = express.Router();

//import kontrolera
const BorrowedBooksController = require('../controllers/borrowedBooks');

//import middleware
const checkAuth = require('../middleware/check-auth');

//lista wszystkich wypożyczeń
router.get('/', checkAuth, BorrowedBooksController.borrowed_get_all);

//dodawanie nowej informacji dotyczącej wypożyczenia
router.post('/',checkAuth, BorrowedBooksController.borrowed_new);

//szczegóły wypożyczenia o nr
router.get('/:borrowedId',checkAuth,BorrowedBooksController.borrowed_get_by_id);

//zmiana informacji dotyczących wypożyczenia o nr
router.patch('/:borrowedId',checkAuth,BorrowedBooksController.borrowed_change);

//usunięcie informacji dotyczących wypożyczenia o nr
router.delete('/:borrowedId',checkAuth,BorrowedBooksController.borrowed_delete);

module.exports = router;
