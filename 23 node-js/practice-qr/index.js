import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type your text", name: "text" }])
  .then((answers) => {
    const url = answers.text;
    var generateimage = qr.image(url);
    generateimage.pipe(fs.createWriteStream("new_qr.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
