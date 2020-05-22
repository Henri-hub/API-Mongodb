
const mongoose = require('mongoose')
    , categorySchema = new mongoose.Schema({

        title: {
            type: String
        }
    })

    module.exports = mongoose.model('Category', categorySchema);