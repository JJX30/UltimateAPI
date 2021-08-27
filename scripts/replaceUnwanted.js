const fs = require("fs");
const filePath = "./assets/fighter_o.csv";

fs.readFile(filePath, "utf-8", (err, file) => {
  const csvArray = file.split("\n");
  if (csvArray[csvArray.length - 1] == "") {
    csvArray.pop();
  }
  //   console.log();
  csvArray.forEach((fighterInfo) => {
    if (fighterInfo.includes(`"null"`)) {
      const replaceInd = csvArray.indexOf(fighterInfo);
      csvArray.splice(replaceInd, 1);
    }
  });
  const newCsvArray = [];
  csvArray.forEach((fighterInfo) => {
    const fighterArray = fighterInfo.split(",");
    fighterArray.forEach((index) => {
      if (index.includes("--")) {
        const replaceInd = fighterArray.indexOf(index);
        fighterArray[replaceInd] = `""`;
      }
    });
    const fixedFighterArray = fighterArray.join(",");
    newCsvArray.push(fixedFighterArray);
  });
  const result = newCsvArray.join("\n");
  fs.writeFile(filePath, result, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
