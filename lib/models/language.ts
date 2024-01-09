import mongoose, { Schema, Document } from 'mongoose';

export interface Language extends Document {
  code: String;
  name: String;
  isActive:Boolean,
  isDeleted:Boolean,
}

const LanguageSchema: Schema = new Schema({
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

LanguageSchema.index({code:1})
LanguageSchema.index({name:1})

const LanguageModel = (mongoose.models.Language as mongoose.Model<Language>)  || mongoose.model<Language>('Language', LanguageSchema);
export default LanguageModel;