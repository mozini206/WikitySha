const moongoose = require('mongoose')

const authorSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = moongoose.model('Author', authorSchema)