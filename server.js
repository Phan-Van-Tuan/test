const Express = require('express');

const app = Express()
const port = 5100;

app.use('/', (req, res) => {
    res.json('hello, i am simple server')
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})