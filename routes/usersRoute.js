const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.post('/signup', userController.signup_post )


module.exports = router