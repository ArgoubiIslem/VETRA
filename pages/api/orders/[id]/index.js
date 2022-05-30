import nc from 'next-connect'
import Order from '../../../../models/Order'
import dbConnect from '../../../../utils/db'
import { isAuth } from '../../../../utils/auth'

const handler = nc()

handler.use(isAuth)
handler.get(async (req, res) => {
  await dbConnect()
  const order = await Order.findById(req.query.id)
  await dbConnect()
  res.send(order)
})

export default handler
