const express = require('express');
const routing = express.Router();
const service = require('../service/service');

routing.get('/books/', async(req, res, next) => {
    try {
        let data = await service.getAllData();
        res.json(data).status(200);
    } catch (err) {
        next(err)
    }
})

routing.get('/books/:category', async(req, res, next) => {
    let category = req.params.category;
    try {
        let data = await service.getCategorizedBook(category);
        res.json(data).status(200);
    } catch (err) {
        next(err)
    }
})

routing.put('/books/:bookId', async(req, res, next) => {
    let bookId = req.params.bookId;
    let category = req.body.category;
    try {
        let data = await service.updateBookDetails(bookId, category);
        res.json({
            message: data
        }).status(200);
    } catch (err) {
        next(err)
    }
})

module.exports = routing;