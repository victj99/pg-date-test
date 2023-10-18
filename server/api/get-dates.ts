import db from "../lib/db"
import { dateTestModel } from "../models/dates_test"

export default defineEventHandler((event) => {
  return db.select().from(dateTestModel)
})
