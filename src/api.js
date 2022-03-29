

function cleanString (input){
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

function removeDuplicates (array){
return [...new Set(array)];
}

function findByIdIn (idArray, data){
        let res = []
    
        if(Array.isArray(idArray)){
                const sanitizedArray = idArray.map(item => cleanString(item))
        const noDupArray = removeDuplicates(sanitizedArray)
        noDupArray.forEach(i => {
            const id = cleanString(i)
            const item = data.find(i => id == i[0])
            res.push(item)
            
        })
            return res
        }
    }


module.exports = {
    cleanString ,
    removeDuplicates,
   findByIdIn 
}