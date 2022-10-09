import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import UserModel from './models/userModel.js'
import ProductModel from './models/productModel.js'
import OrderModel from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await ProductModel.deleteMany()
    await OrderModel.deleteMany()
    await UserModel.deleteMany()

    const createdUser = await UserModel.insertMany(users)
    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await ProductModel.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await ProductModel.deleteMany()
    await OrderModel.deleteMany()
    await UserModel.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
