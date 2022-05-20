const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  nomP: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true, default: 0 },
  msg: { type: String, required: true },
})

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact
