const mongoose = require('mongoose')

const marqueSchema = new mongoose.Schema({
  marqueLib: { type: String, required: true },
  description: { type: String, required: true },
})

const Marque = mongoose.models.Marque || mongoose.model('Marque', marqueSchema)

export default Marque
