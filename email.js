const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submit-form", (req, res) => {
  // Get the email input from the form
  const userEmail = req.body.email;

  // Write the email to a .txt file
  fs.appendFile("emails.txt", userEmail + "\n", (err) => {
    if (err) {
      console.error("Error writing to file: " + err);
      res.status(500).send("Error writing to file");
    } else {
      console.log("Email saved: " + userEmail);
      res.status(200).send("Email submitted successfully!");
    }
  });
});
