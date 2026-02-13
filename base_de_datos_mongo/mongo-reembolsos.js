import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try{await mongoose.connect(process.env.URL)}
catch(error){console.log("error:",error)}



let esquema=new mongoose.Schema({
    usuario: String,
    productos:{type: Array, required: false},
 producto_nombre: String,
 producto_precio: String,
 producto_stock: String,
 producto_envio: String,
 producto_id: Number,
 local_ubicacion: String,
 reembolsado: Boolean,
 paymentId: String,
 Date: Date
});

esquema.index({ paymentId: 1 }, { unique: true });

export let log_reembolsos= mongoose.model("reembolsos-tienda-online",esquema)



await log_reembolsos.init(); 
