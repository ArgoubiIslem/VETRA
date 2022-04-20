const mongoose = require('mongoose')

const categorieSchema = new mongoose.Schema({
  categorieLib: { type: String, required: true },
  description: { type: String, required: true },
})

const Categorie =
  mongoose.models.Categorie || mongoose.model('Categorie', categorieSchema)

export default Categorie
