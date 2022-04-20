import Evenement from '../../../models/Evenement'
import dbConnect from '../../../utils/db'

dbConnect()
export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const evenements = await Evenement.find({})
        res.status(200).json({ success: true, data: evenements })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const evenement = await Evenement.create(req.body)

        res.status(200).json({ success: true, data: evenement })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
