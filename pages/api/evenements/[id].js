import Evenement from '../../../models/Evenement'
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
        const evenement = await Evenement.findById(id)
        if (!evenement) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: evenement })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const evenement = await Evenement.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!evenement) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: evenement })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteEvenement = await Evenement.deleteOne({ _id: id })
        if (!deleteEvenement) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Evenement })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
