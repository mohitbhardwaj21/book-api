const dbModel = require('../utilities/connection');

const bookModel = {}

bookModel.getAllData = async() => {
    let bookCollection = await dbModel.getBookCollection();
    let bookData = await bookCollection.find();
    return bookData.length > 0 ? bookData : null;
}


bookModel.getCategorizedBook = async(category) => {
    let bookCollection = await dbModel.getBookCollection();
    let bookData = await bookCollection.find({ category: category });
    return bookData.length > 0 ? bookData : null;
}




bookModel.updateBookDetails = async(bookId, category) => {
    let bookCollection = await dbModel.getBookCollection();
    let bookData = await bookCollection.updateOne({ bookId: bookId }, { $set: { category: category } })
    return bookData.nModified > 0 ? true : null;
}

module.exports = bookModel