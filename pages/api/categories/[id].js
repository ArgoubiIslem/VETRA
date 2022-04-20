import Categorie from '../../../models/categorie'
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
        const categorie = await Categorie.findById(id)
        if (!categorie) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: categorie })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const categorie = await Categorie.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!categorie) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: categorie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteCategorie = await Categorie.deleteOne({ _id: id })
        if (!deleteCategorie) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Categorie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
