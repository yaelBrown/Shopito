import connection from "@/config/connection"; 

export default function handler(req, res) {
  try {
    let out;
    connection.query(
      "SELECT id, message FROM status",
      function(err, response, fields) {
        res.status(200).json({ data: response[0].message })
        if (err) throw Error(err.message)
      }
    ) 
  } catch(err) {
    res.status(400).json(err)
  } 
}