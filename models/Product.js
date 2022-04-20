const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  image: { type: String, required: true },
  prix: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
  categorie: { type: String, required: true },
  sousCategorie: { type: String, required: true },
  statut: { type: String, required: true },
  marque: { type: String, required: true },
})

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
