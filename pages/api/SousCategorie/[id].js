import SousCategorie from '../../../models/SousCategorie'
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
        const souscat = await SousCategorie.findById(id)
        if (!souscat) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: souscat })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const souscat = await SousCategorie.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!souscat) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: souscat })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteSouscat = await SousCategorie.deleteOne({ _id: id })
        if (!deleteSouscat) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: SousCategorie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
