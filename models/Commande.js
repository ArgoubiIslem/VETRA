const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema({
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  address: { type: String, required: true },
  total: { type: Number, required: true },
  paymentId: { type: Number, required: true },
  delivered: { type: Boolean, default: false },
  paid: { type: Boolean, default: false },
  dateOfPayment: { type: Date, required: true },
})

const Commande =
  mongoose.models.Commande || mongoose.model('Commande', commandeSchema)

export default Commande
