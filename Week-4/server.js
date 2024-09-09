const express = require("express");
const app = express();
const cors = require("cors")
const port = 3000;

app.use(express.json());
app.use(cors());

//we use cors because Cross-Origin Resource Sharing (CORS): 
// If your frontend and backend are running on different ports 
// (e.g., frontend on localhost:5500 and backend on localhost:3000),
//  you'll need to enable CORS on your backend to allow requests from your 
//  frontend.

app.get("/ans", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = a + b;
    res.send(ans.toString());

})

app.get("/int", function (req, res) {
    const principal = parseInt(req.query.a);
    const time = parseInt(req.query.b);
    const amount = parseInt(req.query.c);
    const ans = principal + time + amount;
    res.send(ans.toString());

})

app.listen(port, function () {
    console.log('running');
});