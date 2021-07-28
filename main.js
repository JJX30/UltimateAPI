const csvParser = require("csv-parser");
const fs = require("fs");

const filepath = "./assets/fighter_x.csv";

fs.createReadStream(filepath)
  .on("error", () => {
    console.log("Didn't work");
  })
  .pipe(csvParser())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {});
