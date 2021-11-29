const express = require('express');
const cors = require('cors');

const db = [
    {
        id: 1,
        title: 'The Lord of the Rings'
    }
]

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hi There')
});

app.get('/get', (req, res) => {
    res.send(db)
})

app.listen('3001', () => {
    console.log('Server is running on port 3001')
 })