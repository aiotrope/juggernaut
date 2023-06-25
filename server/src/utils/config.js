import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/testdb'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const config = {
  port: PORT,
  base_url: BASE_URL,
  mongo_url: MONGO_URL,
}

export default config
