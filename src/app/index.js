import express from "express";

import helper from "./helper.js";

const app = express();
console.log(helper.findFreePort())
// const port = helper.findFreePort();
// app.get('/', (req, res) => {
//     res.send("Hello template")
// })

// app.listen(port, (req, res) => {
//     console.info(`Listening on port ${port}`)
// })