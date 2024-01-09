import mongoose, { Schema, Document } from 'mongoose';

export interface QualificationOption  {
    text: string;
    subText: string;
}

export interface Qualification extends Document {
    qualificationCode: number;
    qualificationName: string;
    qualificationOptions: QualificationOption[];
    min: number;
    max:number;
    isActive: boolean,
    isDeleted: boolean,
}

const QualificationSchema: Schema = new Schema({
    moduleKey: { type: String, default: 'qualification' },
    category: { type: String, ref: 'Category' },
    qualificationCode: { type: Number, required: true },
    qualificationName: { type: String, required: true },
    qualificationOptions: [{ text: { type: String }, subText: { type: String } }],
    min:{ type: Number, default: 0 },
    max:{ type: Number, default: 0 },
    isRange:{ type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
});

const QualificationModel = (mongoose.models.Qualification as mongoose.Model<Qualification>) || mongoose.model<Qualification>('Qualification', QualificationSchema);
export default QualificationModel;