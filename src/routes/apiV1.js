// const Router = require('express').Router;
const { Router } = require('express');

const router = Router();

router.post("/weiter", (req, res) => {
    res.send(req.body.namen)
})

router.get("/weiter", (req, res) => {
    res.send("JA WIR SIND WEITER!!!!!")
})

module.exports = router;

// module.exports = {
//     router
// };