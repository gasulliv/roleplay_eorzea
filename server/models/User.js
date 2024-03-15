import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    characters: {type: String, required:false, unique: false}
})

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User }
export default UserModel