const express = require('express')
const router = express.Router()
const {createTask,getAllTask,deleteTask,updateTask} = require('../controller/task')

router.route('/createtask').post(createTask)
router.route('/getalltask').get(getAllTask)
router.route('/deletetask/:taskId').post(deleteTask)
router.route('/updatetask/:taskId').post(updateTask)

module.exports =  router