const mongoose = require('mongoose');

//import modelu produktu
const Book = require('../models/book');

exports.books_get_all = (req, res, next) => {
    Book.find()
      .then((docs) => {
        res.status(200).json({
          wiadomość: 'Lista wszystkich książek:',
          info: docs,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

  exports.books_new = (req, res, next) => {
    const book = new Book({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      author: req.body.author, 
      genre: req.body.genre, 
      ISBN: req.body.ISBN, 
      status: req.body.status
    });
    book.save()
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Dodano nową książkę',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

exports.books_get_by_id = (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Szczegóły książki o id:  ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

  exports.books_change = (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        author: req.body.author, 
        genre: req.body.genre, 
        ISBN: req.body.ISBN, 
        status: req.body.status
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Zaktualizowano informacje dotyczące książki o id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.books_delete = (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndDelete(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Książka została usunięta',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };