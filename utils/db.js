import mongoose from 'mongoose'

// const connection = {};

// async function dbConnect() {
//     if (connection.isConnected) {
//         return;
//     }

//     const db = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex:true
//     });

//     connection.isConnected = db.connections[0].readyState;
// }

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
