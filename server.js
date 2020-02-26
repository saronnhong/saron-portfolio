if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();

const cors = require('cors'); //needed to disable sendgrid security

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.RADHARD_API_KEY);

app.post("/send-email", function (req, res) {

  const msg = {
    to: req.body.email.sender,
    from: req.body.email.recipient,
    subject: req.body.email.subject + " has sent you a message",
    html: "MESSAGE: " + req.body.email.text + "<br><br> FROM: " + req.body.email.from,
  };
  sgMail.send(msg)
    .then((msg) => {
      console.log(msg);
      res.send("Email has been sent.");
    });
  

})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
