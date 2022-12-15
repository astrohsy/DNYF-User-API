const express = require("express");
const app = express();
const routers = require("./routers/users");

require("dotenv").config();

app.use("/users", routers);

app.use(express.json());

const port = process.env.APP_PORT || 4103;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
