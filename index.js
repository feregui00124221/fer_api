const express = require("express")
const axios = require("axios")

const PORT = process.env.PORT || 5000
const app = express()

app.get("/", (req, res) => {
  res.send("Hello world from Fernando's API")
})

app.get("/users", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json("Error occured!")
  })
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})