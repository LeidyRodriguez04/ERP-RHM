const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env'});

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.CONNEXION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("base de Données Connectée")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB
