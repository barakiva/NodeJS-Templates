import express from "express";

import helper from "./helper.js";

const app = express();
let port;
await helper.findFreePort.then((res)=> port = res)

app.get('/', (req, res) => {
    res.send("Hello template")
})

app.listen(port, (req, res) => {
    console.info(`Listening on port ${port}`)
})