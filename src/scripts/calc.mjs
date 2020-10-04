import fs from "fs";
import * as config from "../config.json";
import shell from "shelljs";
import dayjs from "dayjs";

const nodeModules = "node_modules";
const results = [];
const resultsFile = "src/results.json";
const tmpDir = "tmp";

const writeJSONToFile = (data, path) => {
  const json = JSON.stringify(data, null, 2);
  fs.writeFile(path, json, err => {
    if (err) {
      console.log("Failed to write file due to error", err);
    }
  });
};

fs.mkdir(tmpDir, err => {
  if (err && err.code !== "EEXIST") {
    console.log("Failed to create temp dir");
  }
});

config.default.map(entry => {
  const gzippedFile = tmpDir + "/" + entry.name.replace(" ", "-") + ".gz";
  const standardFile = nodeModules + entry.standardFile;
  const minifiedFile = nodeModules + entry.minifiedFile;

  if (shell.exec("gzip -c " + minifiedFile + " > " + gzippedFile).code !== 0) {
    console.log("Failed to gzip file", gzippedFile);
    shell.exit(1);
  }

  const result = {
    name: entry.name,
    repoURL: entry.repoURL,
    standardSize: fs.statSync(standardFile).size / 1000.0,
    minifiedSize: fs.statSync(minifiedFile).size / 1000.0,
    gzippedSize: fs.statSync(gzippedFile).size / 1000.0,
  };

  results.push(result);
});

const generatedData = {
  createdAt: dayjs().format(),
  results: results,
};

writeJSONToFile(generatedData, resultsFile);
