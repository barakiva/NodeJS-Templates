import express from "express";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(join(__dirname, 'public')))

const port = 3002;
app.get('/', (req, res) => {
    res.sendFile("/index.html")
})

app.listen(port, (req, res) => {
    console.info(`Listening on port port`)
})


