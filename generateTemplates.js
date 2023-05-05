#!/usr/bin/env node
const { htmlTemplate } = require("./templates/html-template");
const { jsTemplate } = require("./templates/js-template");
const { cssTemplate } = require("./templates/css-template");

const fs = require("fs");
const path = require("path");

const createFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(`Error creating ${fileName}:`, err);
      return;
    }
    console.log(`${fileName} created successfully!`);
  });
};

createFile("index.html", htmlTemplate);
createFile("script.js", jsTemplate);
createFile("styles.css", cssTemplate);
