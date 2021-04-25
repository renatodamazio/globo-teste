const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('express');
const app = express();
const port = 3000;
const aws_url = 'https://run.mocky.io/v3/';

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let users = [
    {
        name: 'John Doe',
        email: 'usuariocomum@teste.com.br',
        accessLevel: '0',
        password: '123mudar',
    },
    {
        name: 'Lorem Ipsum',
        email: 'usarioadm@teste.com.br',
        accessLevel: '1',
        password: '123mudar',
    }
];


app.post('/login', async (req, res) => {
    const user = users.filter((user) => req.body.email === user.email);

    if (!user.length) {
        return res.json({
            success: false,
            message: 'Usuário não encontrado',
            resp: req.body
        })
    }


    if (user.length && user[0].password === req.body.password) {
        
        return res.json({
            success: true,
            message: 'Acesso garantido',
            resp: user
        })

    } else {
        return res.json({
            success: false,
            message: 'Usuário ou senha errados',
            resp: []
        })
    }
});

app.get('/get-cluster-status', async (req, res) => {
    await axios.get(`${aws_url}cab2791c-7c85-4461-b95c-86bc1a12dc72`)
    .then(({ data }) => {
        return res.json(data);
    })
    .catch((err) => {
        return res.json(err);
    })
})

app.get('/get-memory-use',  async (req, res) => {
    await axios.get(`${aws_url}d23c3262-967e-4567-b7f6-2fd263748811`)
    .then(({ data }) => { 
        return res.json(data); 
    })
    .catch((err) => { 
        return res.json(err); 
    })
});

app.get('/get-cpu-use', async (req, res) => {
    await axios.get(`${aws_url}b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f`)
    .then(({ data }) => { return res.json(data); })
    .catch((err) => { return res.json(err); })
});

app.get('/get-users', async (req, res) => {
    return await res.json(users);
});

app.post('/edit-user', async (req, res) => {
    users[req.body.id] = req.body;
    
    return res.json({
        success: true,
        message: 'Dados alterados com sucesso!',
        resp: req.body
    });
})

app.post('/register-user', (req, res) => {
    const currentUser = req.body.email;
    const existUser = users.filter((user) => user.email === currentUser);

    if (existUser.length) {
        return res.json({ message: 'Usuário já existe ', success: false, resp: [] })
    };

    let nextId = users[users.length - 1];

    if (nextId) {
        req.body.id = parseInt(nextId.id + 1);
    } else {
        req.body.id = 0;
    }

    users.push(req.body);
    return res.json({ message: 'Usuário salvo com sucesso', success: true, resp: req.body });
});

app.delete('/delete-user', (req, res) => {
    users.splice(req.params.id, 1);
    return res.json({ message: 'Usuário removido', success: true, resp: [req.params.id] });
});

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
})