import nc from 'next-connect'
import Product from '../../models/Product'
import dbConnect from '../../utils/db'
import data from '../../utils/data'
import User from '../../models/User'

const handler = nc()

handler.get(async (req, res) => {
  await dbConnect.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await Product.deleteMany()
  await Product.insertMany(data.products)
  await dbConnect.disconnect()
  res.send({ message: 'seeded successfully' })
})

export default handler
