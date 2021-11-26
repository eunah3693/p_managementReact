const express = require("express");
const app = express();
const api = require("./routes/index");

app.use("/api",api);
const port=3000;
app.listen(port,()=>console.log(`listening ${port}`));

