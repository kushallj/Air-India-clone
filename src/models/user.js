const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    }
},{timestamps: true})
//pre -save is a trigger that gets a function and executes it before a user object is save
userSchema.pre('save', async function encryptPassword(next){
    const user = this;
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
})

userSchema.methods.isValidPassowrd = async function checkValidity(password) {
    const user = this;
    const compare = bcrypt.compare(password,user.password);
    return compare;
}

const User = mongoose.model('User',userSchema);

module.exports = User;
