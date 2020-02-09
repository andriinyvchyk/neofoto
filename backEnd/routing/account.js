const express = require('express');
const router = express.Router();
const cors = require('cors')
const User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.use(cors())

router.post('/api/auth', cors(), (req, res) =>{
    User.getUserByLogin(req.body.login, (err, user) =>{
        if(err) throw err;
        if(!user)
            return res.json({success: false, msg: "Такой пользователь біл не найден"})
        
        User.comparePass(req.body.pass, user.pass, (err, isMatch) =>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), secretKey,{
                    expiresIn: 3600
                });
                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user:{
                        id: user._id,
                        login: user.login
                    }
                })
            }else return res.json({success: false, msg: "passs"})
        });
    })
})

router.get('/api/auth', cors(), (res, req) =>{
    User.findOne({ 'login': 'darknes' })
        .then(lists => {
            console.log(lists)
            res.send(lists)
        })
        .catch((error) => console.log(error))
})

module.exports = router;