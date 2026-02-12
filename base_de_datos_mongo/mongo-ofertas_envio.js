import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try{await mongoose.connect(process.env.URL)}
catch(error){console.log("error:",error)}

let esquema=new mongoose.Schema({
    producto_id: String
});

export let log_ofertas_envio= mongoose.model("primer_envio_gratis-tienda-online",esquema)