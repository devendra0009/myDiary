const connectToMongo = require("./db.js");
connectToMongo(); //to connecct to our mongodb database

const cors=require('cors')
const express = require("express");
const app = express();
const port = 5000;

//to use cors
app.use(cors())

//middleware used to populate req.body() can be express.json() or express.urlencoded()
// For parsing application/json-> express.json() used
//// For parsing application/x-www-form-urlencoded-> express.urlencoded() used
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Dev!");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`myDiary backend listening on port ${port}`);
});
