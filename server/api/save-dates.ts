import db from "../lib/db"
import { dateTestModel } from "../models/dates_test"

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    dateTest: string
    timestampTest: string
  }>(event)

  const insert = db.insert(dateTestModel).values({
    dateTest: body.dateTest,
    timestampTest: body.timestampTest
  })

  console.log('INSERT SQL: ', insert.toSQL())

  await insert.execute()
  return 200
})
