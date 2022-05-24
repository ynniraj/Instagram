const express = require('express');
const Connect = require('./confiq/db');
const cors = require('cors');
const { body } = require('express-validator');

const app = express();
app.use(cors())
app.use(express.json())

const { register, login, getuserbyid, alluser, userfollow, userunfollow } = require('./controllers/auth.controller');

const { verifyToken, verifyUser, verifyAdmin } = require('./middlewares/verifyToken');

const { post, allpost, singleuser } = require("./controllers/post.controller");


app.post("/register",
    body('email').isEmail().withMessage('Email is not valid'),
    body('username').isString().withMessage('User name is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'), register)

app.post("/login", login)
app.patch("/userfollow/:id", userfollow)
app.patch("/userunfollow/:id", userunfollow)
app.get("/alluser", alluser)
app.get("/getuserbyid/:id", [verifyUser], getuserbyid)


app.post("/post", post)
app.get("/allpost", allpost)
app.get("/singleuser/:id", singleuser)



app.listen(8080, async () => {
    await Connect()
    console.log('Server is running on port 8080');
});