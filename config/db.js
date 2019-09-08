const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const Connect_DB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('Connected to MongoDB successfuly...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = Connect_DB