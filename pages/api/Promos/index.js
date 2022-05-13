import Promo from '../../../models/Promo'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const promos = await Promo.find({})
        res.status(200).json({ success: true, data: promos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const promo = await Promo.create(req.body)

        res.status(200).json({ success: true, data: promo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
