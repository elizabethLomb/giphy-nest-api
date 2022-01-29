import { registerAs } from "@nestjs/config"

export default registerAs('database', () => ({
  connectionString: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
  databaseName: '',
  port: process.env.DATABASE_PORT || 5432
}))