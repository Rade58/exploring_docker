const express = require("express")

const app = express()

app.get('/', (req, res) => {
  // UMESTO OVOGA
  // res.send("Nick Mullen Likes Culen");
  // DEFINISEM OVO

  res.send("Adam Friedland is such a cool Adam")

})

app.listen(8080, () => {
  console.log("app listening on: http://localhost:8080")
})