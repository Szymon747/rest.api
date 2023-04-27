const data = require("./model.js")
let zadankaArray = data.zadankaArray


module.exports = {
    add: (gotdata) => {
        console.log("---", JSON.parse(gotdata))
        console.log(zadankaArray)
        zadankaArray.push(JSON.parse(gotdata))
    },
    delete: (id) => {
        zadankaArray.splice(id,1);
    },
    readone: (id) => {
        console.log(zadankaArray[id])
        return zadankaArray[id]
    },
    getall: () => {
        return zadankaArray
    },
    editone: (id,data) => {
        zadankaArray[id]=JSON.parse(data)
    }
}