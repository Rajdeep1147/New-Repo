const fs = require("fs");

// // fs.writeFileSync("Rajdeep.txt", "bye, Rajdeep Text File");

// // fs.appendFileSync("Rajdeep.txt", "This is Appended structure");

// const buf_data = fs.readFileSync("Rajdeep.txt");
// const org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("Rajdeep.txt", "Rocky.txt");

fs.writeFileSync("crude.txt", "This is crud file");
fs.appendFileSync("crude.txt", "This is append function");

fs.renameSync("crude.txt", "test.txt");
const fileData = fs.readFileSync("test.txt", "utf8");
console.log(fileData);
const filePath = "test.txt";
// f
file.unlink(filePath, (unlinkErr) => {
  if (unlinkErr) {
    console.error("Error deleting file:", unlinkErr);
    return;
  }
  console.log("File deleted successfully");
});
