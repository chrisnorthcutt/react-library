const fs = require("fs");
const file = fs.readFileSync("./style-data.json");
const data = JSON.parse(file);
const colorsList = data.list.colors;
const logger = fs.createWriteStream("./code/_tokens.scss", {});
const prettier = require("prettier");
let output = "";

output += "$colors: ("
colorsList.map((color) => {
    output += `${color.name.toLowerCase()}: (`;
    color.colors.forEach((element) => {
        output += `${element.name.split(" ").join("-")}: ${element.value},`;
    });
    output += "),"
});
output += ");"

logger.write(prettier.format(output, {parser: "scss"}))
