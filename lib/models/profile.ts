import mongoose, { Schema, Document } from 'mongoose';

export interface Profile extends Document {
  name: string;
  label: string;
  icon: string;
  route:string;
  isActive:boolean,
  isDeleted:boolean,
}
const ProfileSchema: Schema = new Schema({
  user:{ type: Schema.Types.ObjectId, ref: 'User' },
  category:{ type: Schema.Types.ObjectId, ref: 'Category' },
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  options: [{ type: String, default: "" }],
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

const ProfileModel = (mongoose.models.Profile as mongoose.Model<Profile>)  || mongoose.model<Profile>('Profile', ProfileSchema);
export default ProfileModel;