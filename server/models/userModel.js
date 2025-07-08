import mongoos from 'mongoose'

const userSchema = new mongoos.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    creditBalance: {type: Number, default: 5},
})

const userModel = mongoos.models.user || mongoos.model("user", userSchema)

export default userModel;