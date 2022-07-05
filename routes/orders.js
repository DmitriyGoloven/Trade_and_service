const {Router} = require("express")
const auth = require("./middleware/auth")
const router = Router()
const {check, validationResult} = require("express-validator")
const Service = require("../models/service")


router.post("/service",
    [
        check('email', "incorrect email").isEmail(),
        check('phone', "incorrect phone").isLength({min: 9}),
    ],
    async (req, res) => {

        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "invalid data - check email and phone"
                })
            }

            const {email, phone, service, name, date} = req.body

            const serv = new Service({email: email, phone: phone, service: service, name: name, date: date})
            try{
                await serv.save()} catch (e){console.log(e)}
            return res.status(201).json({message: "Request has been sent"})

        } catch (e) {
            res.status(500).json({message: "err /Request serv service"})
        }

    })

router.post("/services",auth,

    async (req, res) => {

        try {

            const services = await Service.find()
            res.json(services)

        } catch (e) {
            res.status(500).json({message: "err /Request serv"})
        }

    })

router.post("/delete",
    async (req, res) => {

        try {
            const {id} = req.body
            await Service.findOneAndDelete({_id: id})
            return res.status(200).json({message: "order deleted"})


        } catch (e) {
            res.status(500).json({message: "err /delete"})
        }
    })

module.exports = router