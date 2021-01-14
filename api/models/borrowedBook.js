const mongoose = require('mongoose');

const borrowedBookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    surname: String,
    bookId: String, 
    status: String

});

module.exports=mongoose.model("Borrowedbook", borrowedBookSchema);