import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try{await mongoose.connect(process.env.URL)}
catch(error){console.log("error:",error)}

let esquema=new mongoose.Schema({
    productos:{type: Array, required: false},
    precio: String
});

export let log_ofertas2x1= mongoose.model("ofertas2x1-tienda-online",esquema)