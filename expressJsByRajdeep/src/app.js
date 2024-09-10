const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const staticPath = path.join(__dirname, "../public");
const temPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const sendMail = require("../Controllers/sendMail");
const nodemailer = require("nodemailer");
module.exports = sendMail;

// app.use(express.static(staticPath));

app.get("/test-mail", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "warren.buckridge54@ethereal.email",
        pass: "TTrn6EgyGBZG3c8C7b",
      },
    });

    let info = await transporter.sendMail({
      from: '"Rajdeep 👻" <rajdeep@lawsikho.in>', // sender address
      to: "warren.buckridge54@ethereal.email, rajdeeprangra@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello from Rajdeep</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

//To set the partials
hbs.registerPartials(partialsPath);

//To set the view as hbs
app.set("view engine", "hbs");

//to change the view file to other file name
app.set("views", temPath);

//Template Emgine Route

app.get("/", (req, res) => {
  res.render("index", {
    channelName: "Rajdeep",
  });
});

app.get("/mail", sendMail);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcomment: "This About Us Page Could Not Found ",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "Page Not Found",
  });
});

app.listen(9000);
