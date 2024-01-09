import mongoose, { Schema, Document } from 'mongoose';

export interface Category extends Document {
  name: String;
  isActive:Boolean,
  isDeleted:Boolean,
}

const CategorySchema: Schema = new Schema({
  moduleKey: { type: String, default: 'category' },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  isActive: { type: Boolean , default: true },
  isDeleted: { type: Boolean ,  default: false },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
}
);

CategorySchema.index({name:1})

const CategoryModel = (mongoose.models.Category as mongoose.Model<Category>)  || mongoose.model<Category>('Category', CategorySchema);
export default CategoryModel;