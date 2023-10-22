import fs from "fs";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors()); // Allow requests from any IP

app.use(
  express.urlencoded({
    extended: false,
    limit: 10000,
    parameterLimit: 5,
  })
);

app.post("/submit-form", function (req, res) {
  console.log(req.body);

  // Create a JSON string from the form data

  /*
  const dataToWrite = JSON.stringify(fd);

  // Define the file path where you want to save the data
  const filePath = "./emails.txt";

  // Write the data to the file
  fs.appendFile(filePath, dataToWrite + "\n", (err) => {
    if (err) {
      console.error("Error writing to file: ", err);
      res.status(500).send("Error saving data.");
    } else {
      console.log("Data saved successfully.");
      res.status(200).send("Data saved successfully.");
    }
  });
  
*/
});

app.listen(3000);
