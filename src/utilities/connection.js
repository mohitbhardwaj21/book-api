const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/book-api";

const bookSchema = Schema({
    bookId: Number,
    bookName: String,
    description: String,
    imageUrl: String,
    author: String,
    category: String
}, { collection: "Books" });

let collection = {};

collection.getBookCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('Books', bookSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = collection;