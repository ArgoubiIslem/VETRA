import SousCategorie from '../../../models/SousCategorie'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const souscats = await SousCategorie.find({})
        res.status(200).json({ success: true, data: souscats })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const souscat = await SousCategorie.create(req.body)

        res.status(200).json({ success: true, data: souscat })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
