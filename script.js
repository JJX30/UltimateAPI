const fs = require("fs");

const filePath = "./assets/fighter_z.csv";

const header =
  "firstname,lastname,nickname,height,weight,reach,stance,wins,losses,draws,belt";

const originalHeader =
  "web-scraper-order,web-scraper-start-url,First,Last,Nickname,Height,Weight,Reach,Stance,Wins,Losses,Draws,Belt";

//reads file
fs.readFile(filePath, "utf-8", (err, file) => {
  //error handler
  if (err) {
    console.log(err);
  }

  //make file text into an array to edit its values
  let csvArray = file.split("\n");

  //get the URL that we want to remove
  const unwantedValue = csvArray[1].split(",")[1] + ",";

  //traverse array and replaces first two columns with an empty string
  for (let i = 1; i < csvArray.length; i++) {
    if (csvArray[i].includes(unwantedValue)) {
      //gets the whole thing that we want to remove
      const originalValue = csvArray[i].substring(
        0,
        csvArray[i].indexOf(unwantedValue) + unwantedValue.length
      );

      //removes the two values
      csvArray[i] = csvArray[i].replace(originalValue, "");
    }
  }

  //replaces header with intended header
  csvArray[0] = csvArray[0].replace(originalHeader, header);

  //join the new array into a string
  let newFile = csvArray.join("\n");

  //write the new string onto the file
  fs.writeFile(filePath, newFile, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
