const path = require("path");
console.log(path.dirname('C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js'));
console.log(path.extname('C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js'));
console.log(path.basename('C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js'));
console.log(path.parse('C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js'));

const myPath = path.parse("C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js");
console.log(myPath.name);

const mPath = path.parse("C:/Users/HARSH/nodejs/nodechallenge/PathModul/path.js");
console.log(myPath.root);