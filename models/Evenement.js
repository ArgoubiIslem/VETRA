const mongoose = require('mongoose')

const evenementSchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
})

const Evenement =
  mongoose.models.Evenement || mongoose.model('Evenement', evenementSchema)

export default Evenement
