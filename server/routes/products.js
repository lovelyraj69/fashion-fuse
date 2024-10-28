const { Category } = require('../modules/category');
const { Product } = require('../modules/products');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;

router.get('/', async (req, res) => {
    const productList = await Product.find().populate('category');

    if (!productList) {
        res.status(500).json({ success: false });
    }

    res.send(productList);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({ message: 'The product with the given ID was not found.' });
    }
    return res.status(200).send(product);
});

router.post('/create', async (req, res) => {

    const category = await Category.findById(req.body.category);

    if (!category) {
        return res.status(404).send('invalid catogry!');
    }

    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgUrl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: 'image cannot upload!',
            status: false
        })
    }

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        images: imgUrl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured
    });

    product = await product.save();

    if (!product) {
        res.status(500).json({
            error: err,
            success: false
        });
    }

    res.status(201).json(product);
})

router.delete('/:id', async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
        return res.status(404).json({
            message: 'product not found!',
            status: false
        });
    }

    res.status(200).send({
        message: 'the product is deleted!',
        status: true
    });
});

router.put('/:id', async (req, res) => {
    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgUrl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: 'image cannot upload!',
            status: false
        })
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            images: imgUrl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured
        },
        { new: true }
    );
    
    if (!product) {
        res.status(404).json({
            message: 'the product can not be updated!',
            status: false
        });
    }

    res.status(200).json({
        message: 'the product is updated!',
        status: true
    });
})

module.exports = router;