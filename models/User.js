const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nomP: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
