const fs = require("fs");

const biodata = {
    name: "sakshi",
    age: 22,
    channel: "conceptual padhai",
}

//console.log(biodata.channel);

//conversion of object to json
const jsonData = JSON.stringify(biodata);
//console.log(jsonData);

//conversion of json to object
const objData = JSON.parse(jsonData);
console.log(objData);

fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});


fs.readFile("json1.json" , "utf-8" , (err,data) => {
   
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
