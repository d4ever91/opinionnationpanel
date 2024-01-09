import mongoose, { Schema, Document } from 'mongoose';

export enum AdminType {
  Admin = 1,
  Manager = 2,
}

export interface Admin extends Document {
  firstName: String;
  lastName: String;
  email: String;
  password:String;
  company:String;
  lastLogin:Date;
  createdBy:String;
  role:AdminType;
  module:String[];
  isRecieveEmailNotification:Boolean,
  isActive:Boolean,
  isDeleted:Boolean,
}

const AdminSchema: Schema = new Schema({
  moduleKey:{ type:String ,default:'admin'},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: String, required: false },
  role:{ type: String, enum:  [ AdminType.Admin,AdminType.Manager ], default: AdminType.Admin },
  lastLogin: { type: Date , required: false },
  createdBy:{ type: Schema.Types.ObjectId ,ref: 'Admin', required: false,default:null },
  module: [{ type: Schema.Types.ObjectId, ref: 'Module'}],
  isRecieveEmailNotification: { type: Boolean , default: true },
  isActive: { type: Boolean , default: true},
  isDeleted: { type: Boolean ,  default: false },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
}
);

AdminSchema.index({ firstName:1 })
AdminSchema.index({ lastName:1 })
AdminSchema.index({ email:1 })
AdminSchema.index({ company:1 })

const AdminModel = (mongoose.models.Admin as mongoose.Model<Admin>)  || mongoose.model<Admin>('Admin', AdminSchema);
export default AdminModel;