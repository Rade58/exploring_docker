const express = require("express")

const app = express()

app.get('/', (req, res) => {
  // UMESTO OVOGA
  // res.send("Hello Staavros!")
  // NAPISACU OVO
  res.send("Nick Mullen Likes Culen");

})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})