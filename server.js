const express = require("express");
const app = express();
// app.listen(8000);

app.get("/", function(req, res){
    res.send("<h1>Welcome to our Home Page</h1>")
})

app.listen(8000, function() {
    console.log("Server has started on port 8000");
});

// app.get() is  a route handler
// git add .
// git commit -m "commit message"
// git push origin main