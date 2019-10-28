const express = require("express");
var cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static("public"));
app.use("*", express.static("public"));

app.post("/sendmail", async (req, res) => {
  let { email, message, title } = req.body;

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: "exelokontakt@gmail.com", // generated ethereal user
      pass: "FirmaExelo2019" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${email}`, // sender address
    to: "firma.exelo@gmail.com", // list of receivers
    subject: `${title}`, // Subject line
    html: `<p> Wiadomość od ${email} <br /> <br /> Wiadomość: : <br /> <b> ${message} </b></p>` // html body
  });

  if (!info)
    return res
      .status(500)
      .json({ msg: "Nie udało się wysłać wiadomości, spróbuj później" });

  return res.status(200).json({ msg: "Pomyślnie wysłano wiadomość" });
});

app.get("/*", function(req, res) {
  return res.sendFile(path.join(__dirname + "public/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err, __dirname, "public/index.html");
    }
  });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
