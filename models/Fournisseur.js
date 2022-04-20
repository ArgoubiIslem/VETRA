const mongoose = require('mongoose')

const fournisseurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  adresse: { type: String, required: true },
})

const Fournisseur =
  mongoose.models.Fournisseur ||
  mongoose.model('Fournisseur', fournisseurSchema)

export default Fournisseur
