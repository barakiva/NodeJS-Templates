import express from "express";

import helper from "./helper.js";

const app = express();
let port;
await helper.findFreePort.then((res)=> port = res)
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello template")
})
app.get('/hello', (req,res)=> {
	res.json({msg: "Hello"})
})
app.listen(port, (req, res) => {
    console.info(`Listening on port ${port}`)
}) //
export {app}