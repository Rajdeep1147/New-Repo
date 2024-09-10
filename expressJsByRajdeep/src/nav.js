const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.write("This is Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is About Page");
});

app.get("/contact", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Rajdeep",
    },
    {
      id: 2,
      name: "Rocky",
    },
    {
      id: 3,
      name: "Tanu",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listing to the port number ${port}`);
});
