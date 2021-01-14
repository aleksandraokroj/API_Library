const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    author: String,
    genre: String, 
    ISBN: Number, 
    status: String, 

});

module.exports=mongoose.model("Book", bookSchema);