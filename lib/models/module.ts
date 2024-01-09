import mongoose, { Schema, Document } from 'mongoose';

export interface Module extends Document {
  name: string;
  label: string;
  icon: string;
  route:string;
  isActive:boolean,
  isDeleted:boolean,
}
const ModuleSchema: Schema = new Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, required: true },
  route: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

const ModuleModel = (mongoose.models.Module as mongoose.Model<Module>)  || mongoose.model<Module>('Module', ModuleSchema);
export default ModuleModel;