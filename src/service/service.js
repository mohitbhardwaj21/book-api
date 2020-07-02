const model = require('../model/model');
let service = {};

service.getAllData = async() => {
    let bookData = await model.getAllData();
    if (bookData) {
        return bookData
    } else {
        let err = new Error('No Books Available');
        err.status = 403;
        throw err;
    }

}

service.getCategorizedBook = async(category) => {
    let bookData = await model.getCategorizedBook(category);
    if (bookData) {
        return bookData
    } else {
        let err = new Error('No Books Available');
        err.status = 403;
        throw err;
    }

}

service.updateBookDetails = async(bookId, category) => {
    let bookData = await model.updateBookDetails(bookId, category);
    if (bookData) {
        return "Successfully Updated Book Category";
    } else {
        let err = new Error(`Sorry! Category for ${bookId} wasn't updated`)
        err.status = 503;
        throw err;
    }
}

module.exports = service;