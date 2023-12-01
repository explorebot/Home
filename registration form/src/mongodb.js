const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/formregistration').then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('not connected');
})
const LogInSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ['1', '2', '3', '4'], // Assuming 'title' is a dropdown with these values
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
       required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});
const collection= new mongoose.model("Collection1", LogInSchema);

module.exports = collection
