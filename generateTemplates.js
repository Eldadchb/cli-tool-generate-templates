#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const htmlTemplate = `<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>A Basic HTML5 Template</title>
  <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="A Basic HTML5 Template">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
  <meta property="og:description" content="A simple HTML5 Template for new projects.">
  <meta property="og:image" content="image.png">

  <link rel="icon" href="/favicon.ico">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <!-- your content here... -->
  <script src="scripts.js"></script>
</body>
</html>;`;

const jsTemplate = `document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
});`;

const cssTemplate = `/* Your CSS styles here */`;

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
