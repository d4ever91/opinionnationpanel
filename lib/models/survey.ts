import mongoose, { Schema, Document } from 'mongoose';

export enum SurveyStatusEnum {
  active = 1,
  paused = 2,
  draft = 3,
  closed = 4,
}

export interface Survey extends Document {
  surveyCode: Number;
  surveyName: String;
  loi: Number;
  conversion: Number;
  cpi: Number;
  cost: Number;
  user: String;
  country: String;
  createdBy: String;
  surveyStatus: Number;
  startDate: Date;
  endDate: Date;
  surveyLiveUrl: String;
  surveyTestUrl: String;
  isActive: Boolean,
  isDeleted: Boolean,
}

const SurveySchema: Schema = new Schema({
  moduleKey:{ type:String ,default:'survey'},
  surveyCode: { type: Number, required: true },
  surveyName: { type: String, required: true },
  loi: { type: Number, required: true },
  cpi: { type: Number, required: true },
  requiredCompletes:{ type: Number, required: true },
  cost: { type: Number, default: 0 },
  conversion: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  language: { type: Schema.Types.ObjectId, ref: 'Language' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  status: { type: Number, enum: [SurveyStatusEnum.active, SurveyStatusEnum.paused, SurveyStatusEnum.draft, SurveyStatusEnum.closed], default: SurveyStatusEnum.draft },
  quota: [{ name:{ type: Schema.Types.ObjectId ,ref:'Qualification' } ,value: [ { type: String,default:'' }] }],
  surveyLiveUrl: { type: String, required: false  ,default:''},
  surveyTestUrl: { type: String, required: false ,default:''},
  startDate: { type: Date, default: '' },
  endDate: { type: Date, default: '' },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
},
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

SurveySchema.index({ surveyCode: 1 })
SurveySchema.index({ surveyName: 1 })
SurveySchema.index({ user: 1 })
SurveySchema.index({ surveyStatus: 1 })
SurveySchema.index({ createdBy: 1 })


const SurveyModel = (mongoose.models.Survey as mongoose.Model<Survey>) || mongoose.model<Survey>('Survey', SurveySchema);
export default SurveyModel;