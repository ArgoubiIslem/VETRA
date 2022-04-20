const mongoose = require('mongoose')

const livraisonSchema = new mongoose.Schema({
  Commande: {
    type: mongoose.Types.ObjectId,
    ref: 'Commande',
  },
  date: { type: Date, required: true },
  description: { type: String, required: true },
})

const Livraison =
  mongoose.models.Livraison || mongoose.model('Livraison', livraisonSchema)

export default Livraison
