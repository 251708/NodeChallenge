/*
create a folder named it sakshi
create a file in it named bio.txt and data into it.
Add more data into the file at the end of the existing data.
Read the data without getting the buffer data at first.
Rename the file name to mybio.txt
now delete both the file and the folder
*/


const fs = require ("fs");
//fs.mkdirSync("sakshi");

//fs.writeFileSync("mybio.txt" , "welcome to the node js world");
fs.writeFileSync("mybio.txt" ,  "You are the beginner stage of learning node js");
const data = fs.readFileSync("mybio.txt" ,"utf-8");
console.log(data);
fs.renameSync("mybio.txt" , "bio.txt");
//fs.unlinkSync("bio.txt");
//fs.rmdirSync("sakshi");
fs.mkdirSync("sakshi");
fs.linkSync("bio.txt");





