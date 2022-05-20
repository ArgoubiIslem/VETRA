import Abonnee from '../../../models/Abonnee'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const abonnees = await Abonnee.find({})
        res.status(200).json({ success: true, data: abonnees })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const abonnee = await Abonnee.create(req.body)

        res.status(200).json({ success: true, data: abonnee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
