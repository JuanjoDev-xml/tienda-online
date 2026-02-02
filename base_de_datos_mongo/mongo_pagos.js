import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try{await mongoose.connect(process.env.URL)}
catch(error){console.log("error:",error)}

let esquema=new mongoose.Schema({
 paymentId: Number,
});

export let log_pagos_id= mongoose.model("pagos-id-tienda-online",esquema)
