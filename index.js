const {cleanString, removeDuplicates, findByIdIn} = require('./src/api')

const dataset = [[1381, "front-end web development"],
[8235, "data engineering"],
[3434, "API design"],
[7623, "security"],
[9153, "UX"]]

console.log("cleaned string", cleanString("7-636"))
console.log("no dups: ", removeDuplicates(["a", "b", "c", "a", "b", "d"]))
console.log(findByIdIn(["7-623", "8235", "8-235"], dataset))