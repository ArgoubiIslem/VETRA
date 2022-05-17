import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(
      'mongodb+srv://ecommerce:ecommerce@ecommerce.2he8o.mongodb.net/ecommerce?retryWrites=true&w=majority'
    )
    console.log('connected!' + db.connection.host)
  } catch (error) {
    console.log(error + 'not connected')
  }
}

export default dbConnect
