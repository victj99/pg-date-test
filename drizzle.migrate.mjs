import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import 'dotenv/config'

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`
const sql = postgres(process.env.NODE_ENV === 'production' ? (process.env.DATABASE_URL || '') : connectionString, { max: 1 })
const db = drizzle(sql)

async function main() {
  console.log('Iniciado migración...')
  try {
    await migrate(db, { migrationsFolder: 'drizzle' })
  } catch (error) {
    console.error('Error al realizar la migración', error)
  }
  console.log('Migracion terminada')
  process.exit()
}

main()
