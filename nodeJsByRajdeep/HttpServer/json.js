const fs = require("fs");

const data = {
  name: "Rajdeep",
  age: 18,
  programming: "Php",
};

const JsonData = JSON.stringify(data);

fs.writeFile("jsonFile.json", JsonData, (err) => {
  console.log(err);
  console.log("File Has been created");
});

fs.readFile("jsonFile.json", "utf-8", (err, data) => {
  console.log(data);
  const OriginalData = JSON.parse(data);
  console.log(OriginalData);
});
