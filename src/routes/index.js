const {Router}= require('express');
const router = Router();
//require('dotenv').config();
//const productModel = require("../models/product.js");
//../models/product
router.get('/',(req, res)=>res.json({message: 'Hello world'}));

// router.get("/product", async (req, res) => {
//     try {
//         const products = await productModel.findAll();
//         res.status(200).json(products);
//     }
//     catch (err) {
//         res.status(500).json({message: err.message});
//     }
// });

// router.post("/product", async (req, res) => {
//     try {
//         const {name, price, description} = req.body;
//         await productModel.create(name, price, description);
//         res.status(200).json({message: "product created"});
//     }
//     catch (err) {
//         res.status(500).json({message: err.message});
//     }
// });

module.exports = router;