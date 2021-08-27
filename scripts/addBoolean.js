const fs = require("fs");
const filePath = "./assets/fighter_p.csv";
let firstElement = true;
const newCsvArray = [
  "firstname,lastname,nickname,height,weight,reach,stance,wins,losses,draws,belt",
];
fs.readFile(filePath, "utf-8", (err, file) => {
  const csvArray = file.split("\n");
  csvArray.forEach((line) => {
    if (firstElement == false) {
      const lineArray = line.split(",");
      lineArray[lineArray.length - 1] = '"false"';
      const newLine = lineArray.join(",");
      newCsvArray.push(newLine);
    }
    firstElement = false;
  });

  const final = newCsvArray.join("\n");
  fs.writeFile(filePath, final, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
