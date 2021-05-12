const express = require('express');
// const productsController = require('../controllers/product')
const adminContriller = require('../controllers/admin')


const router = express.Router();

router.get('/add-products', adminContriller.getAddProducts);
router.post('/add-product', adminContriller.postAddProduct);
router.get('/edit-product/:productId', adminContriller.getEditProduct)
router.post('/edit-product', adminContriller.postEditProduct)
router.post('/delete-product', adminContriller.deleteProduct);



//---------------------------- export method 1
module.exports = router;