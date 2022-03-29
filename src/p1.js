function isAlphanumeric(char) {
  return char.length === 1 && char.match(/^[a-z0-9]+$/i);
}


function cleanString(input){
    let res = []
    if(typeof input == 'string'){
        let temp = input.toLowerCase()
        for(let x = 0; x <= temp.length; x++){
            const char = temp.charAt(x)
            if(!isNaN(char)){
               res.push(char)
            }
        }
        return res.join("")
    }
}


console.log(cleanString("7-623"))
console.log(cleanString("..2965a"))

module.exports = {
    p1: cleanString
}