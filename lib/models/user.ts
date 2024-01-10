import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  firstName: String;
  lastName: String;
  email: String;
  password:String;
  company:String;
  lastLogin:Date;
  facebookId:String;
  googleId:String;
  platform:String;
  uuid:String;
  provider:String;
  inviteCode:String;
  emailToken:String;
  forgotToken:String;
  emailVerified:Boolean;
  isSocialLogin:Boolean;
  isRecieveEmailNotification:Boolean,
  isActive:Boolean,
  isDeleted:Boolean,
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  company: { type: String, required: false },
  uuid: { type: String, required: false },
  inviteCode: { type: String, required: false },
  emailToken: { type: String, required: false },
  forgotToken: { type: String, required: false },
  emailVerified: { type: Boolean, required: false ,default:false},
  platform: { type: String, required: false },
  provider: { type: String, required: false },
  facebookId: { type: String, required: false },
  googleId: { type: String, required: false },
  lastLogin: { type: Date , required: false },
  isSocialLogin: { type: Boolean , default: false },
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

UserSchema.index({firstName:1})
UserSchema.index({lastName:1})
UserSchema.index({email:1})
UserSchema.index({company:1})

const UserModel = (mongoose.models.User as mongoose.Model<User>)  || mongoose.model<User>('User', UserSchema);
export default UserModel;