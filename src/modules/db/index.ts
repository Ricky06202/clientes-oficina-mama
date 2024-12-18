import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection(process.env.DATABASE_URL!)
const db = drizzle(connection)
