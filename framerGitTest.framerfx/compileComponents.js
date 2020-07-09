const path = require('path');
const fs = require('fs');
const prettier = require("prettier");
//joining path of directory 
const directoryPath = path.join(__dirname, './node_modules/FramerTest/code/');



fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        
        if (file.indexOf('tsx') > -1) {
            let output = ""
            output = 'import * as React from "react"; import { Frame, addPropertyControls, ControlType } from "framer"';
            let newFile = fs.createWriteStream("./code/external/" + file);
            let fileName = file.split(".tsx").join("")
            output += "\n//@ts-ignore\n"
            output += `; import { ${fileName} as _${fileName} } from "/FramerTest/code/${fileName}";`
            output += `; export function New${fileName}(props) {
                        return <_${fileName} {...props} />
                        };`
             output += "\n//@ts-ignore\n"
            output += `; New${fileName}.defaultProps = _${fileName}.defaultProps;`
             output += "\n//@ts-ignore\n"
            output += ` addPropertyControls(New${fileName}, _${fileName}.propertyControls)`
            newFile.write(prettier.format(output, {parser: "typescript"}))
            
        }
    });
});