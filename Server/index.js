const connexion = require('./conf');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const SELECT_ALL_USER_QUERY = 'SELECT * from user';
/*const SELECT_MOVIES_NAMES_QUERY = 'SELECT name from movie';*/

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('go to /products to see products')
});

app.post('/calendrier/add', (req, res) => {
    console.log(req.body);
    const formData = req.body;
    const INSERT_USER_QUERY = 'INSERT INTO user SET ?';
    connexion.query(INSERT_USER_QUERY, formData,  (err, results) => {
        if(err) {
            return res.status(500).send("Erreur lors de la sauvegarde");
        }else {
            return res.send('successfully added user')
        }
    });
});

app.get(`/calendrier`, (req, res) => {
    connexion.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des employés');
          } else {
            res.json({data:results});
          }
    });
});


app.listen(4000, () => {
    console.log(`Products server listening on port 4000`)
})

