import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema(
  {
    moduleKey:{ type:String ,default:'invoice'},
    name: { type: String, required: true },
    slug: { type: String, trim:true , default:'' },
    isActive: { type: Boolean, default: true }, 
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Invoice = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);
export default Invoice;
