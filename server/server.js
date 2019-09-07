const express = require("express");
var cors = require("cors");

const app = express();
const port = 8080;
const resultRepository = require("./repositories/resultRepository");
resultRepository.init();

app.use(cors());

app.use("/", express.static("build"));

app.get("/api/v1/results/:source", (req, res) => {
  var source = req.param("source");

  res.json(resultRepository.getResults(source));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
