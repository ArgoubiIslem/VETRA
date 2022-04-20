import Fournisseur from '../../../models/Fournisseur'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const fournisseurs = await Fournisseur.find({})
        res.status(200).json({ success: true, data: fournisseurs })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const fournisseur = await Fournisseur.create(req.body)

        res.status(200).json({ success: true, data: fournisseur })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
