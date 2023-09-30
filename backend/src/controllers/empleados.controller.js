const empleadoCtrl={};
const Empleado = require('../models/Empleado');

empleadoCtrl.getEmpleados=(req,res)=>{
    res.send('Funciona el endpoint get empleados')
}
empleadoCtrl.createEmpleado=(req,res)=>{
    res.send('Ha sido creado el empleado')
}
empleadoCtrl.getEmpleado=(req,res)=>{}
empleadoCtrl.editEmpleado=(req,res)=>{}
empleadoCtrl.deleteEmpleado=(req,res)=>{}
module.exports=empleadoCtrl;


empleadoCtrl.getEmpleados= async(req, res)=>
{
 const empleados= await Empleado.find();
 res.json(empleados);

 res.send('get empleados');
}

empleadoCtrl.createEmpleado= async(req,res)=>{
    const empleado=new Empleado({
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento:req.body.departamento,
    sueldo:req.body.sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json('status: Datos guardados');
   }

   empleadoCtrl.editEmpleado=async(req,res)=>{
    const {_id}=req.params;
    const empleado={
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento: req.body.departamento,
    sueldo: req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(_id, {$set:empleado},{new: true});
    res.json('status: Datos actualizados');
   }

   empleadoCtrl.deleteEmpleado=async(req,res)=>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json('status: Empleado ha sido removido');
   }