const env = require("dotenv").config(),
    app = require("./app"),
    port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor esta corriendo http://localhost:${port}/`)
    } else { console.log(`el servidor no esta corriendo`); }
});