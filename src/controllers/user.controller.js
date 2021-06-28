const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.createUser = async (req,res) =>{
    const {username,
        nombre_empleado,
        apellido_paterno,
        apellido_materno,
        email,
        direccion,
        ciudad,
        zip,
        telefono,
        usertype} = req.body;
    const newUser = new User({username,
        nombre_empleado,
        apellido_paterno,
        apellido_materno,
        email,
        direccion,
        ciudad,
        zip,
        telefono,
        usertype});
    await newUser.save();
    res.json('User created')
}

userCtrl.deleteUser =  async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json('User deleted')
}

module.exports = userCtrl;