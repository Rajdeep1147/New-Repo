const fs = require("fs");
const http = require("http");

// fs.writeFile("input.txt", "This is Text File", (err) => {
//   console.log("file is created");
// });
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

const serve = http.createServer();
serve.on("request", (req, res) => {
  //   const fs = require("fs");
  //   fs.readFile("input.txt", function (data, err) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end(data.toString());
  //   });

  /**
   * 2nd way
   */
  // const rstream = fs.createReadStream("input.txt");
  // rstream.on("data", (chunkData) => {
  //   res.write(chunkData);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("File not Found");
  // });

  // 3rd way
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

serve.listen(2000, "127.0.0.1");
