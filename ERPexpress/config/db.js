const mongoose = require('mongoose');

require('dotenv').config({path:'config.env'})

const connectarDB = async() => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log('base de données connectée!!!');
    
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectarDB