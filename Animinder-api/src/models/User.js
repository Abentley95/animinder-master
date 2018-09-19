import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


const userSchema = new mongoose.Schema({
    email: { 
                type: String,
                required: true, 
                lowercase: true, 
                index: true,
                unique: true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    confirmed: {type: Boolean, default: false},
    confirmationToken:  {type: String, default: '' },
    likedAnime: [
        {}
    ]
}, 
{
    timestamps: true
});

userSchema.methods.actionLikedAnime = function actionLikedAnime(result) {
    const index = this.likedAnime.find(obj => { 
        let findEquiAnime;
        if(obj && obj[result.title] && obj[result.title].title) {
            findEquiAnime = obj[result.title].title === result.title 
        }
        return findEquiAnime;
    });
    if(index === undefined) {
        this.likedAnime.push({[result.title]: result});
        this.save();
    } 
}

userSchema.methods.unlikeAnime = function unlikeAnime(result) {
    const index = this.likedAnime.find(obj => {
        let findEquiAnime;
        if(obj && obj[result.title] && obj[result.title].title) {
            findEquiAnime = obj[result.title].title === result.title
        }
        return findEquiAnime;
    });
    this.likedAnime.remove(index);
    this.save();
}

userSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
}

userSchema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
}

userSchema.methods.setConfirmationToken = function setConfirmationToken() {
    this.confirmationToken = this.generateJWT();
}

userSchema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
    return `${process.env.HOST}/confirmation/${this.confirmationToken}`
}

userSchema.methods.generateResetPasswordLink = function generateResetPasswordLink() {
    return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken() }`
}

userSchema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email,
        confirmed: this.confirmed
    }, process.env.JWT_SECRET)
}

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
userSchema.methods.generateResetPasswordToken = function generateResetPasswordToken() {
    return jwt.sign(
        {
            _id: this._id
        }, 
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}

userSchema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT(),
    }
}

userSchema.plugin(uniqueValidator, { message: "this email is already taken"});

export default mongoose.model('User', userSchema);