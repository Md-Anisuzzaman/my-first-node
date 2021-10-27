const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); //body parser to get data by post 

app.get('/', (req, res) => {
    res.send('hello');
});

const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '015555564' },
    { id: 1, name: 'shabnur', email: 'shabnur@gmail.com', phone: '014445561' },
    { id: 2, name: 'sahana', email: 'sahana@gmail.com', phone: '016865568' },
    { id: 3, name: 'sabila', email: 'sabila@gmail.com', phone: '0156895569' },
    { id: 4, name: 'shahinur', email: 'shahinur@gmail.com', phone: '015696555' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(lilu => lilu.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);

    }
    res.send(users);
});


//app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hit hit hit',req.body);
    res.json(newUser);

});

//dynamic-Api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange', 'lemon']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy mango');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
