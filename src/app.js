const express = require('express');
const app = express();
const routers = require('./routers/users');
require('dotenv').config();

const { auth } = require('express-openid-connect');
app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
    })
);
app.use("/", routers);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`istening on ${port}`);
});
