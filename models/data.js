const mongoose=require('mongoose');
const {Schema}=mongoose;
const dataSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    id:{
        type:Number,
    },
    points:{},
    user:{},
    time:{
        type:Number,
        required:true
    },
    time_ago:{
        type:String,
        required:true
    },
    comments_count:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        default:'link'
    },
    url:{
        type:String,
        required:true
    },
    domain:{
        type:String
        
    }
    
})


module.exports=mongoose.model('TestData',dataSchema)