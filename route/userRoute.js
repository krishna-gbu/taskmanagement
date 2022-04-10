const express = require('express')
const router = express.Router()
const {createUser,getAllUser} = require('../controller/user')

router.route('/createuser').post(createUser)
router.route('/getalluser').get(getAllUser)

module.exports =  router