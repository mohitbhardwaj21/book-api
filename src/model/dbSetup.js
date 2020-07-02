const collection = require('../utilities/connection');

BookCollectionData = [{
        "bookId": 1001,
        "bookName": "Harry Potter",
        "description": "64GB, Coral Blue",
        "imageUrl": "./../images/harryPotter.jpg",
        "author": "JK Rownling",
        "category": "Fiction"
    },
    {
        "bookId": 1002,
        "bookName": "The Immortals of Meluha",
        "description": "64GB, Coral Blue",
        "imageUrl": "./../images/meluha.jpg",
        "author": "Amish Tripathi",
        "category": "Fiction"
    },
    {
        "bookId": 1003,
        "bookName": "Fault in Our Stars",
        "description": "",
        "imageUrl": "./../images/faultInOutstars.jpg",
        "author": "John Green",
        "category": "Fiction"
    },
    {
        "bookId": 1004,
        "bookName": "Chacha Chaudhary",
        "description": "",
        "imageUrl": "./../images/chachaChaudhary.jpg",
        "author": "Pran",
        "category": "Comics"
    },
    {
        "bookId": 1005,
        "bookName": "The Christmas Carol",
        "description": "",
        "imageUrl": "./../images/christmasCarol.jpg",
        "author": "Charles Dickens",
        "category": "Comics"
    },
    {
        "bookId": 1006,
        "bookName": "Dragon Ball Z",
        "description": "",
        "imageUrl": "./../images/DragozBallZ.jpg",
        "author": "Manga Comic World",
        "category": "Comics"
    }

]


exports.setupDb = () => {
    return collection.getBookCollection().then((collection) => {
        return collection.deleteMany().then(() => {
            return collection.insertMany(BookCollectionData).then((data) => {
                if (data) return "Insertion Successful"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}