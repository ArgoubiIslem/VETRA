const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  tel: { type: Number, required: true },
  adresse: { type: String, required: true },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
