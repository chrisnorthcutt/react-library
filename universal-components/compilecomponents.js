const path = require("path");
const fs = require("fs");
const prettier = require("prettier");
//joining path of directory
const directoryPath = path.join(__dirname, "../src");

fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        if (file.indexOf("tsx") > -1) {
            let output = "";
            output =
                'import * as React from "react"; import { Frame, addPropertyControls, ControlType } from "framer"';
            let newFile = fs.createWriteStream("../../universal-prototypes/code/external/" + file);
            let fileName = file.split(".tsx").join("");
            output += "\n//@ts-ignore\n";
            output += `; import { ${fileName} as _${fileName} } from "src/${fileName}";`;
            output += `; export function ${fileName}(props) {
return <_${fileName} {...props} />
};`;
            output += "\n//@ts-ignore\n";
            output += `; ${fileName}.defaultProps = _${fileName}.defaultProps;`;
            output += "\n//@ts-ignore\n";
            output += ` addPropertyControls(${fileName}, _${fileName}.propertyControls)`;
            newFile.write(prettier.format(output, { parser: "typescript" }));
        }
    });
});
