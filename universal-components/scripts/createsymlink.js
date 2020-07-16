const fs = require("fs");
var path = require("path");

fs.readdir(__dirname + "/prototypes/", function(err, files) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        if (file.indexOf("framerfx") > -1) {
            let framerfile = file.split(".framerfx").join("");
            const target =
                __dirname +
                "/prototypes/" +
                framerfile +
                ".framerfx" +
                "/code/src";
            const source = __dirname + "/src";
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
