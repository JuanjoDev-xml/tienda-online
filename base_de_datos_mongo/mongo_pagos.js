import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

await mongoose.connect(process.env.URL);

const esquema = new mongoose.Schema({
  paymentId: { type: String, required: true }
});

esquema.index({ paymentId: 1 }, { unique: true });

export const log_pagos_id = mongoose.model(
  "pagos-id-tienda-online",
  esquema
);

await log_pagos_id.init(); 
