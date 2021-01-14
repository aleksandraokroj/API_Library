const mongoose = require('mongoose');

//import modelu 
const BorrowedBook = require('../models/borrowedBook');

exports.borrowed_get_all = (req, res, next) => {
    BorrowedBook.find()
      .then((docs) => {
        res.status(200).json({
          wiadomość: 'Lista wszystkich wypożyczeń:',
          info: docs,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

  exports.borrowed_new = (req, res, next) => {
    const borrowedBook = new BorrowedBook({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      surname: req.body.surname,
      bookId: req.body.bookId, 
      status: req.body.status
    });
    borrowedBook.save()
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Zapisano informacje o wypożyczeniu',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

exports.borrowed_get_by_id = (req, res, next) => {
    const id = req.params.borrowedId;
    BorrowedBook.findById(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Szczegóły wypożyczenia o id: ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };

  exports.borrowed_change = (req, res, next) => {
    const id = req.params.borrowedId;
    BorrowedBook.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
      surname: req.body.surname,
      bookId: req.body.bookId, 
      status: req.body.status
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Zaktualizowano informacje dotyczące wypożyczenia od id: ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.borrowed_delete = (req, res, next) => {
    const id = req.params.borrowedId;
    BorrowedBook.findByIdAndDelete(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Informacje dotyczące wypożyczenia zostały usunięte',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };