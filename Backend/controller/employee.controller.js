const Employee = require('../model/employee.model')


exports.addEmployee = (req, res) => {
	console.log(req.body)
    const employee = new Employee(req.body)
    employee.save()
        .then((data) => {
                res.status(200).send(data)
            }

        )
        .catch(err => {
            res.status(400).send(new Error('Error while adding employee'))
        })
}

exports.getEmployee = (req, res) => {
    Employee.find()
        .then(employees => {
            res.status(200).send(employees)
        })
        .catch(err => {
            res.status(400).send(new Error('Error occured while accessing database'))
        })
}

exports.updateEmployee = (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, { name: req.body.name, email: req.body.email, jobTitle: req.body.jobTitle, phone: req.body.phone, imageURL: req.body.imageURL, employeeId: req.body.employeeId })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(new Error('Unable to update employee'))
        })
}

exports.deleteEmployee = (req, res) => {
    console.log(req.params.id)
    Employee.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send({ message: 'Record has been deleted' })
        })
        .catch(err => {
            res.status(400).send(new Error('Error occured while deleting the employee' ))
        })
}
exports.getEmployeeById = (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            if (employee) {
                res.status(200).send(employee)
            }
            res.status(400).send(new Error('No such employee is present'))

        })
        .catch(err => {
            res.status(400).send(new Error('Error occured while accessing the employee'))
        })
}