import Fournisseur from '../../../models/Fournisseur'
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
        const fournisseur = await Fournisseur.findById(id)
        if (!fournisseur) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: fournisseur })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const fournisseur = await Fournisseur.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!fournisseur) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: fournisseur })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deleteFournisseur = await Fournisseur.deleteOne({ _id: id })
        if (!deleteFournisseur) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Fournisseur })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
