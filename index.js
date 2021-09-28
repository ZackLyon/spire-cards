require('dotenv').config();

const port = process.env.PORT || 3000;
const { app } = require('./app.js');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

console.log("hello world");