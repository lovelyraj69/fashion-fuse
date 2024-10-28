const { User } = require('../modules/users');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { name, phone, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email : email});

        if (existingUser) {
            res.status(400).json({ msg : 'user already exist!' })
        }

        const hashPassword = await bcrypt.hash(password,10);

        const result = await User.create({
            name: name,
            phone: phone,
            email: email,
            password: hashPassword
        });

        const token = jwt.sign({email: result.email, id: result._id},process.env.JSON_WEB_TOKEN_SECRET_KEY);

        res.status(200).json({
            user: result,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : 'something went wroung!' })
    }
});

router.post('/signin', async (req,res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email:email });

        if (!existingUser) {
            res.status(404).json({msg: 'User not found!'});
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({msg: 'Invailid credentials'});
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JSON_WEB_TOKEN_SECRET_KEY);

        res.status(200).json({
            user: existingUser,
            token: token,
            msg: 'user Authenticated'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something went wroung!'})
    }
});

router.get('/', async (req,res) => {
    const userList = await User.find();

    if (!userList) {
        res.status(500).json({success: false});
    }
    res.send(userList);
});

router.get('/:id', async (req,res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(500).json({message: 'The user with the given ID was not found!'});
    } 
    res.status(200).send(user);
});

router.delete('/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user) => {
        if (user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'});
        } else {
            return res.status(404).json({success: false, message: 'user not found!'});
        }
    })
    .catch((err) => {
        return res.status(500).json({success: false, error: err})
    });
});

router.get('/get/count', async (req,res) => {
    const userCount = await User.countDocuments((count) => count);

    if (!userCount) {
        res.status(500).json({success: false});
    }

    res.send({
        userCount: userCount
    });
});

router.put('/:id', async (req,res) => {
    const {name, phone, email, password} = req.body;

    const userExist = await User.findById(req.params.id);

    let newPassword;
    if (req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10);
    } else {
        newPassword = userExist.passwordHash;   
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            phone: phone,
            email: email,
            password: newPassword
        },
        { new : true }
    );


    if (!user) return res.status(400).send('the user cannot be Updated!');

    res.send(user);
});

module.exports = router;
