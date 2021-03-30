const express = require("express");

const app = express()
const port = 3030;

const apiV1 = require("./routes/apiV1");

app.use(express.json());

app.use("/v1", apiV1);
// app.use("/v1", apiV1.router);

app.get("/", (req, res) => {
    res.send("<h1>Hallo Welt</h1>")
})

app.get("/parmeter/:par", (req, res) => {
    const { par } = req.params
    // req.params
    // req.query
    // req.body
    if (req.query.alter < 14) {
        // datanbank speichern... und und und
        res.json({
            message: "du bist zu klein!"
        })
    } else {
        res.send(`<h1>Hallo Welt ${par}, ${req.params.par}, ${req.query.name}</h1>`)
    }
})

app.listen(port, () => {
    console.log(`localhost:${port}`);
})