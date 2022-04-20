import dbConnect from '../../utils/db'

dbConnect()
export default async (req, res) => {
  res.json({ test: 'test' })
}
