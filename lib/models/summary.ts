import mongoose, { Schema, Document } from 'mongoose';

export interface Summary extends Document {
  name: string;
  label: string;
  icon: string;
  route:string;
  isActive:boolean,
  isDeleted:boolean,
}
const SummarySchema: Schema = new Schema({
        survey:{
            type: Schema.Types.ObjectId,
            ref: 'Survey'
        },
        projectCpi:{
            type:String,
            default:''
        },
        supplierCpi:{
            type:String,
            default:''
        },
        respondedMeta:{
            type:Object,
            default:{}
        },
        surveyMeta:{
            type:Object,
            default:{}
        },
        supplierIdentifier:{
            type:String,
            default:''
        },
        userIdentifier:{
            type:String,
            default:''
        },
        ipAddress:{
            type:String,
            default:''
        },    
        browserDetail:{
            type:String,
            default:''
        },
        isProxy:{
            type:Boolean,
            default:false
        },
        country:{
            type:String,
            default:''
        },
        region:{
            type:String,
            default:''
        },
        city:{
            type:String,
            default:''
        },
        zipCode:{
            type:String,
            default:''
        },
        risk:{
            type:Number,
            default:0
        },
        latitude:{
            type:Number,
            default:0
        },
        longitude:{
            type:Number,
            default:0
        },
        osName:{
            type:String,
            default:'' 
        },
        // deviceType:{
        //     type:Number,
        //     enum:[ constants.DEVICE_TYPE.MOBILE , constants.DEVICE_TYPE.TABLET ,  constants.DEVICE_TYPE.DESKTOP ],
        // },
        startTime:{
            type:Date,
            default:''
        },
        duration:{
            type:Number,
            default:null
        },
        endTime:{
            type:Date,
            default:''
        },
        isPreScreenValid:{
            type:Boolean,
            default:true
        },
        isProgress:{
            type:Boolean,
            default:true
        },
        prescreenStart:{
            type:Boolean,
            default:false
        },
        questionCount:{
            type:Number,
            default:0
        },
        isSurveyDone:{
            type:Boolean,
            default:false
        },
        lastPageSeen:{
            type:String,
            default:''
        },
        liveLink:{
            type:String,
            default:''
        },
        // status:{
        //     type:String,
        //     enum:[
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_DROP_OUT.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_COMPLETE.value, 
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_ACTIVE.value, 
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_INACTIVE.value , 
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_DROP_OUT.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_TERMINATE.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_OVER_QUOTA.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_QUALITY_TERMINATE.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_TERMINATE.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_CLOSE.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_REJECTED.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_APPROVED.value,
        //           constants.PROJECT_REDIRECT_STATUS.SURVEY_SPEEDER_TERMINATE.value,
        //           constants.PROJECT_REDIRECT_STATUS.SUVERY_MULTILINK_ALLOCATED.value,
        //         ],
        //     default:constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_DROP_OUT.value,
        // },
        isApproved:{
            type:Number,
            enum:[ 1,2,3 ],
            default:1
        },
        isSupplierApproved:{
            type:Number,
            enum:[ 1,2,3 ],
            default:1
        },
        statusDescription:{
            type:String,
            default:''
        },
        isDeleted: {
          type: Boolean,
          default: false,
        },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
}
);

const SummaryModel = (mongoose.models.Summary as mongoose.Model<Summary>)  || mongoose.model<Summary>('Summary',SummarySchema);
export default SummaryModel;