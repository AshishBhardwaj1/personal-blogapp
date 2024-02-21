const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
   
})

const blogmodel = mongoose.models.blog || mongoose.model('blog' ,Schema)
export default blogmodel