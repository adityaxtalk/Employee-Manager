const mongoose = require('mongoose')

const employee = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    jobTitle: {
        type: String
    },
    phone: {
        type: String
    },
    imageURL: {
        type: String
    },
    employeeId: {
        type: String
    }

})

module.exports = mongoose.model('Employee', employee)