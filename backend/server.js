import express from "express";

const app = express()

app.get("/", function(req, res) {
  res.send("Backend")
})

app.listen(4000, (e) => {
  console.log("\n \u001b[1;33m 🗄️  Backend listening on port 4000 \n" );
})