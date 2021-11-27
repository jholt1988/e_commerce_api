const express = require('express');
const app = express();

async function startServer (){


    app.listen(3000, () => {
        console.log(`server listening on PORT 3000`)
    })
}
startServer();