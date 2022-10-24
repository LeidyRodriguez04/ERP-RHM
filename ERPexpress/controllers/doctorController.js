const Doctor = require("../models/Doctor");

exports.crearDoctor = async (req, res) => {
    console.log(req.body);

    try {
        let doctor;
        doctor = new Doctor(req.body);

        await doctor.save();
        
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hubo un error')
        
    }
}

exports.consultarDoctor = async (req, res) =>{
    try {
        const doctors = await Doctor.find();
        res.json(doctors);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hubo un error')
        
    }
}