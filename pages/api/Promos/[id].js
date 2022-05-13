import Promo from '../../../models/Promo'
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
        const promo = await Promo.findById(id)
        if (!promo) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json({ success: true, data: promo })
      } catch (error) {
        return res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const product = await Promo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: promo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deletePromo = await Promo.deleteOne({ _id: id })
        if (!deletePromo) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: Promo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
