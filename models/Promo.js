const mongoose = require('mongoose')

const promoSchema = new mongoose.Schema({
  Product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  remise: { type: Number, required: true },
})

const Promo = mongoose.models.Promo || mongoose.model('Promo', promoSchema)

export default Promo
