import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "paciente"],
        require: true
    }
})

//hast password beforce to save the password
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

//compare password


userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model("User", userSchema)