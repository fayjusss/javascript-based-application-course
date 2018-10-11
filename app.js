const express = require('express');
const app = express();

app.get('/', (req, res) => {
    debugger;
    res.send('Hey. It worked.');
});

app.listen(3003, () => console.log('Server is up. !!'));