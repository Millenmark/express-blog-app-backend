import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
    if (err && err.code == "ENOENT") {
      //file doesn't exist
      console.log(`File ${filename} doesn't exist.`);
    } else if (err) {
      console.log(`An error occurred while trying to remove file ${filename}`);
    } else {
      console.log(`${filename} successfully removed.`);
    }
  });
};

export default fileRemover;
