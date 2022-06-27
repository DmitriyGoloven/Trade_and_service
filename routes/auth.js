const {Router} = require("express")
const router = Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const {check, validationResult} = require("express-validator")
const User = require("../models/users")
const auth = require("./middleware/auth")


router.post("/register",
    [
        check('email', "incorrect email").isEmail(),
        check("password", "min password length 6 characters ").isLength({min: 6})
    ],
    async (req, res) => {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {

                return res.status(400).json({
                    errors: errors.array(),
                    message: "invalid register data(check email, min password length 6 characters) "
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email: email})

            if (candidate) {

                return res.status(400).json({message: "User already exist"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email: email, password: hashedPassword})
            await user.save()
            res.status(201).json({message: "user created"})

        } catch (e) {
            res.status(501).json({message: "err /register"})
        }

    })


router.post("/login",
    [
        check('email', "incorrect email").isEmail(),
        check("password", "no password ").exists()
    ],
    async (req, res) => {

        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "invalid user data"
                })
            }

            const {email, password} = req.body
            const user = await User.findOne({email: email})

            if (!user) {
                return res.status(400).json({message: "User not found"})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return req.status(400).json({message: "invalid password"})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get("jwtKey"),
                {expiresIn: "1h"}
            )
            res.json({token, userId: user.id})



        } catch (e) {
            res.status(500).json({message: "err /login"})
        }
    })


module.exports = router