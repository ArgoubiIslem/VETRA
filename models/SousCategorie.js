const mongoose = require('mongoose')

const souscategorieSchema = new mongoose.Schema({
  Categorie: { type: String, required: true },
  SousCatLib: { type: String, required: true },
})

const SousCategorie =
  mongoose.models.SousCategorie ||
  mongoose.model('SousCategorie', souscategorieSchema)

export default SousCategorie
