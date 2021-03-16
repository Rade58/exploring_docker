const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send("Hello Staavros!")
})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})