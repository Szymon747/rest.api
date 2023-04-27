const { Console } = require("console");
const controller = require("./controller.js")
const utils = require("./utils.js")
const data = require("./../arrayData.js")
const logger = require('tracer').colorConsole();




const router = async (request, response) => {

    let send = controller.getall()
    let id = (request.url.slice(11, request.url.length))
    let gotdata = await getRequestData(request);
    if (request.url == "/api/tasks" && request.method == "GET") {
        response.end(JSON.stringify(send))
    }
    if (request.url.match(/\/api\/tasks\/([0-9]+)/) && request.method == "GET") {
        response.end(JSON.stringify(send))
    }
    if (request.url.match(/\/api\/tasks\/([0-9]+)/) && request.method == "PATCH") {
        console.log("patch jest robiony")
        controller.editone(id,gotdata)
    }
    if (request.url.match(/\/api\/tasks\/([0-9]+)/) && request.method == "DELETE") {
        controller.delete(id)
    }
    if (request.url == "/api/tasks" && request.method == "POST") {
        controller.add(gotdata)
    }

}
module.exports = router
