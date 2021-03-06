const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.post('/signup', userController.signup_post )
router.post('/login', userController.login_post )

router.get('/logout', (req,res)=>{
    req.logout()
    req.flash('success_msg', 'You are logged Out')
    res.redirect('/')
})

module.exports = router