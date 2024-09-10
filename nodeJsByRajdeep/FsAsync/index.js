const fs = require("fs");

fs.writeFile("read.txt", "Today is Awesome", (err) => {
  console.log("file is created");
  console.log(err);
});

fs.appendFile("read.txt", " Please like and Share this Channel", (err) => {
  console.log("File Append Successfully");
  console.log(err);
});

fs.readFile("read.txt", "UTF-8", (err, res) => {
  console.log(res);
  console.log(err);
});

fs.writeFile("test.txt", "this is test file", (err, res) => {
  console.log("New file is created");
  console.log(res);
});

fs.appendFile("test.txt", " Hello this is append data", (err) => {
  console.log("File Append Successfully");
  console.log(err);
});

fs.readFile("test.txt", "UTF-8", (err, hello) => {
  console.log(hello);
  console.log(err);
});

fs.rename("FsAsync/test.txt", "FsAsync/rename.txt", (error) => {
  console.log(error);
  console.log("file name is changes");
});

const filePath = "test.txt";
if (fs.existsSync(filePath)) {
  fs.unlink(filePath, (error1) => {
    if (error1) {
      console.error("Error deleting file:", error1);
    } else {
      console.log("File deleted successfully");
    }
  });
} else {
  console.log("File does not exist");
}
