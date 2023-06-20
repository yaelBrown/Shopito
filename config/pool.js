import { Pool } from "pg"
import CONSTANTS from "@/utils/constants"

const pool = new Pool({
  user: CONSTANTS.DB_USER,
  host: CONSTANTS.DB_HOST,
  database: CONSTANTS.DB_DATABASE,
  password: CONSTANTS.DB_PASSWORD,
  port: "5432"
})

export default pool