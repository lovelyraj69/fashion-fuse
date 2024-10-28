const { Category } = require('../modules/category');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
})


router.get('/', async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    res.send(categoryList);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(500).json({ message: 'The category with the given ID was not found.' });
    }
    return res.status(200).send(category);
});

router.post('/create', async (req, res) => {

    const limit = pLimit(2);

    // Check for images in request body and if it's an array
    if (!req.body.images || !Array.isArray(req.body.images)) {
        return res.status(400).json({ message: 'Images data is missing or not an array' });
    }

    // console.log('Image URLs:', req.body.images);

    try {
        // Upload images to Cloudinary with limit applied
        const imagesToUpload = req.body.images.map((image) =>
            limit(async () => {
                try {
                    return await cloudinary.uploader.upload(image);
                } catch (error) {
                    console.error('Error uploading image:', error);
                    return { error: 'Failed to upload image', image };
                }
            })
        );

        const uploadResults = await Promise.all(imagesToUpload);

        // Filter for successful and failed uploads
        const successfulUploads = uploadResults.filter((result) => !result.error);
        const failedUploads = uploadResults.filter((result) => result.error);

        // If there were any failed uploads, handle response accordingly
        if (failedUploads.length > 0) {
            return res.status(500).json({
                message: 'Some images failed to upload',
                successfulUploads,
                failedUploads,
            });
        }

        // Extract URLs of successful uploads
        const imgUrl = successfulUploads.map((item) => item.secure_url);

        // Create a new category with image URLs
        let category = new Category({
            name: req.body.name,
            images: imgUrl,
            color: req.body.color,
        });

        category = await category.save();

        // Send response with the new category created
        return res.status(201).json(category);

    } catch (error) {
        console.error('Error processing images or saving category:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedUser = await Category.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
        res.status(400).json({
            message: 'Category not found',
            success: false
        });
    }

    res.status(200).json({
        success: true,
        message: 'Category Deleted!'
    });
});


router.put('/:id', async (req, res) => {
    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgUrl = uploadStatus.map((item) => {
        return item.source_url
    });

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        });
    }

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            images: imgUrl,
            color: req.body.color,
        },
        { new: true }
    )

    if (!category) {
        return res.status(500).json({
            message: "Category cannot be upload!",
            success: false
        });
    }

    res.send(category);
});

module.exports = router;