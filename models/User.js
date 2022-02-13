const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    username :{
         type: String,
         required: true,
         lowercase: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        lowercase: true,
        

    },
    password : {
        type: String,
        required: true
       
        
    }
     
},{ timestamps: true}); 



userSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user){
     const auth = await bcrypt.compare(password, user.password);
     if(auth){
         return user;
     }
     throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


const User = mongoose.model('user', userSchema);

module.exports= User