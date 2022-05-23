const bcrypt = require('bcryptjs')
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const register = async (req, res) => {
    const { username, email, password: hashPassword } = req.body;
    const password = await bcrypt.hash(hashPassword, 10);
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const exists = await User.findOne({ email });
        if (exists) return res.status(404).send('Email Already Exists');
        const userExist = await User.findOne({ username });
        if (userExist) return res.status(404).send('Username Already Exists');

        const userRegister = await User.create({ username, email, password })
        res.status(201).send(userRegister);
    } catch (err) {
        res.status(500).send(err);
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).send('invalid credentials');
        }

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, 'secretkey', { expiresIn: '1h' });


        return res.status(200).send({ user, token })

    } catch (err) {
        res.status(500).send(err);
    }
}


const getuserbyid = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err)
    }
}


module.exports = { register, login, getuserbyid }