import mongoose, { Schema, Document } from 'mongoose';

export interface Country extends Document {
  code: String;
  name: String;
  isActive:Boolean,
  isDeleted:Boolean,
}

const CountrySchema: Schema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  isActive: { type: Boolean , default: true},
  isDeleted: { type: Boolean ,  default: false },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
}
);

CountrySchema.index({code:1})
CountrySchema.index({name:1})

const CountryModel = (mongoose.models.Country as mongoose.Model<Country>)  || mongoose.model<Country>('Country', CountrySchema);
export default CountryModel;