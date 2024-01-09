import mongoose, { Schema, Document } from 'mongoose';

export enum SurveyStatus {
  Active = 1,
  Paused = 2,
  Draft = 3,
  Closed = 4,
}

export interface Survey extends Document {
  surveyCode: String;
  surveyName: String;
  loi: Number;
  conversion: Number;
  cpi: Number;
  cost: Number;
  user: String;s
  country: String;
  createdBy: String;
  surveyStatus: Number;
  startDate:Date;
  endDate:Date;
  surveyLiveUrl:String;
  surveyTestUrl:String;
  isActive: Boolean,
  isDeleted: Boolean,
}

const SurveySchema: Schema = new Schema({
  surveyCode: { type: String, required: true },
  surveyName: { type: String, required: true },
  loi: { type: Number, required: true },
  cpi: { type: Number, required: true },
  cost: { type: Number, required: true, },
  conversion: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
  surveyStatus: { type: String, enum: [ SurveyStatus.Active, SurveyStatus.Paused, SurveyStatus.Draft, SurveyStatus.Closed ], default: SurveyStatus.Draft },
  surveyLiveUrl:{ type: String, required: true },
  surveyTestUrl:{ type: String, required: true },
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