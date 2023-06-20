import pool from "@/config/pool";


export default function handler(req, res) {
  try {
    pool.query('SELECT * FROM status', (error, results) => {
      if (error) {
        throw Error(error.message)
        return
      }
      res.status(200).json({ data: results.rows[0].message })
    })
  } catch(err) {
    res.status(500).json(err)
  }
}