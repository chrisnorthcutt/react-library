const fs = require("fs");
const path = require("path");

fs.readdir("../universal-prototypes/", function(err, files) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        // Check if file extension is framerfx
        if (file.indexOf("framerfx") > -1) {
            // Get Framer Name
            const framerfile = file.split(".framerfx").join("");

            // Set Link Target
            const target =
                "../universal-prototypes/" +
                framerfile +
                ".framerfx" +
                "/node_modules/ufcore";

            // Set Link Source
            const source = __dirname + "/src";

            // Create symlink to base components to all framer files
            fs.symlink(source, target, (err) => {
                if (err) console.log(err);
                else {
                    console.log("Symlink created");
                    console.log(
                        "Symlink is a directory:",
                        fs.statSync(source).isDirectory()
                    );
                }
            });
        }
    });
});
