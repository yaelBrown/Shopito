// mysql connection
const mysql = require('mysql2')
import CONSTANTS from '@/utils/constants'

const connection = mysql.createConnection({
  host: CONSTANTS.DB_HOST,
  user: CONSTANTS.DB_USER,
  password: CONSTANTS.DB_PASSWORD,
  database: CONSTANTS.DB_DATABASE
})

export default connection