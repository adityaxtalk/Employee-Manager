const router = require('express').Router()
const employeeController = require('../controller/employee.controller')

router.get('/get', employeeController.getEmployee)
router.post('/add', employeeController.addEmployee)
router.put('/update/:id', employeeController.updateEmployee)
router.delete('/delete/:id', employeeController.deleteEmployee)
router.get('/get/:id', employeeController.getEmployeeById)
module.exports = router