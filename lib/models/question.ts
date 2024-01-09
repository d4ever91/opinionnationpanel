import mongoose, { Schema, Document } from 'mongoose';

export enum QuestionType {
    TEXT = 1,
    RADIO = 2,
    DROPDOWN=3,
    CHECKBOX=4
}

export interface Question extends Document {
  name: String;
  isActive:Boolean,
  isDeleted:Boolean,
}

const QuestionSchema: Schema = new Schema({
  moduleKey: { type: String, default: 'question' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  questionName: { type: String, required: true },
  questionType:{
    type:Number,
    enum:[ QuestionType.TEXT ,QuestionType.RADIO,QuestionType.DROPDOWN,QuestionType.CHECKBOX ],
    default:QuestionType.TEXT
  },
  questionOption: [{
    optionId:{ type:String },
    title:{ type:String,  default:"" },
    enable:{ type:Boolean ,default:true },
  }],
  isActive: { type: Boolean , default: true },
  isDeleted: { type: Boolean ,  default: false },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
}
);

QuestionSchema.index({questionName:1})

const QuestionModel = (mongoose.models.Question as mongoose.Model<Question>)  || mongoose.model<Question>('Question', QuestionSchema);
export default QuestionModel;