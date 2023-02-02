const router = require('express').Router()
const car = require('../controller/car.controller')
const { body, validationResult } = require('express-validator')

// in this file we separate router to from the main /user address to smaller one such as
const carClass = new car()
router.get('/', (req, res, next) => {

    carClass.getAllCar()
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })

})
router.get('/search', (req, res, next) => {
    console.log(req.query)
    carClass.search(req.query.name)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.get('/:id', (req, res, next) => {
    carClass.getById(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.post('/', (req, res, next) => {
    carClass.insertData(req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.put('/:id', (req, res, next) => {
    carClass.update(req.params.id, req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.delete('/:id', (req, res, next) => {
    carClass.deleteData(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

module.exports = router