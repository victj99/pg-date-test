import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export function databaseConnection() {
  return postgres(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`)
}

const connection = databaseConnection()

const db = drizzle(connection, {
  logger: process.env.NODE_ENV !== 'production',
})

export default db
