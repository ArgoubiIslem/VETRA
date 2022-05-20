const mongoose = require('mongoose')

const abonneeSchema = new mongoose.Schema({
  email: { type: String, required: true },
})

const Abonnee =
  mongoose.models.Abonnee || mongoose.model('Abonnee', abonneeSchema)

export default Abonnee
