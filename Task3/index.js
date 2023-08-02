/*
Task 3: Asynchronous File Handling
Create a Node.js script that reads a text
file named "data.txt" and counts the number of 
words in it. The script should print the total
word count to the console
*/

const fs = require("fs");

function countWords(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const wordArray = data.split(/\s+/).filter((word) => word !== "");
    const wordCount = wordArray.length;
    console.log(`Total word count in ${filePath}: ${wordCount}`);
  });
}

const filePath = "data.txt";
countWords(filePath);
