import Abonnee from '../../../models/Abonnee'
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
        const abonnee = await Abonnee.findById(id)
        if (!abonnee) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: abonnee })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const abonnee = await Abonnee.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!abonnee) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: abonnee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteAbonnee = await Abonnee.deleteOne({ _id: id })
        if (!deleteAbonnee) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Abonnee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
