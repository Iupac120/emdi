const express = require('express')
const router = express.Router()
const manufacturingController = require('../controller/manController')

router.route('/products')
.post(manufacturingController.createProduct)
.get(manufacturingController.getAllProduct)
router.route('/products/:id')
.get(manufacturingController.getProduct)
.put(manufacturingController.updateProduct)
.delete(manufacturingController.deleteProduct)

module.exports = router
