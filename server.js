const express = requrie('express')
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`)
})