const { strictEqual } = require("assert");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const screensFileDirectory = path.join(__dirname, "../../client/src/screens/");

// fs.readdir(screensFileDirectory, (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });

// const readScreensDirectory = () => {
//   fs.readdir(screensFileDirectory, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       data.forEach((item) => {
//         if (item.slice(-3) == ".js") {
//           fs.readFile(
//             path.join(screensFileDirectory, item),
//             "utf-8",
//             (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(data);
//               }
//             }
//           );
//         } else {
//           console.log("Looks like a dir...");

//         }
//       });
//     }
//   });
// };

// readScreensDirectory();

const readDir = (dirName, fileContentString = "") => {
  console.log(fileContentString);
  fileContentString = fs.readdir(dirName, (err, data) => {
    data.forEach((item) => {
      if (item.slice(-3) === ".js") {
        fs.readFile(path.join(dirName, item), "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            fileContentString = fileContentString + data;
          }
        });
      } else {
        readDir(path.join(dirName, item), "hello");
      }
    });
  });
  return fileContentString;
};

readDir(screensFileDirectory);
console.log(readDir(screensFileDirectory));
