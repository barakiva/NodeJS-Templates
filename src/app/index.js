import express from "express";
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send("Hello template")
})

app.listen(port, (req, res) => {
    console.info(`Listening on port ${port}`)
})