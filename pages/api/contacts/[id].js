import Contact from '../../../models/Contact'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const contact = await Contact.findById(id)
        if (!contact) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: contact })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const contact = await Contact.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!contact) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: contact })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteContact = await Contact.deleteOne({ _id: id })
        if (!deleteContact) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Contact })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
