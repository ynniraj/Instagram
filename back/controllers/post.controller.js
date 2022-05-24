
const express = require('express');
const Post = require('../models/post.model');


const post = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).send(post);
    } catch (e) {
        return res.status(400).send(e);
    }
}

const allpost = async (req, res) => {
    try {
        const post = await Post.find().populate({ path: "user", select: ["username", "image"] }).lean().exec();
        return res.status(201).send(post);
    } catch (e) {
        return res.status(400).send(e);
    }
}
const singleuser = async (req, res) => {
    try {
        const post = await Post.find({ user: req.params.id }).populate({ path: "user", select: ["username", "image"] }).lean().exec();
        return res.status(201).send(post);
    } catch (e) {
        return res.status(400).send(e);
    }
}

module.exports = { post, allpost, singleuser };

