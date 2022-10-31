const express = require('express')
const router = express.Router()
const {sentMail} = require('../controller/mail.controller')
const  {sendJson} = require('../controller/mail.controller')


router.route('/Travel').post(sentMail)
router.route('/Travel123').post(sendJson)

module.exports = router