import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try{await mongoose.connect(process.env.URL)}
catch(error){console.log("error:",error)}

let esquema=new mongoose.Schema({
    numero_del_vendedor: String
});

export let log_numero_vendedor= mongoose.model("numero-de-whatssap-tienda-online",esquema)