const connexion = require('./conf');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('go to /products to see products')
});

app.post('/api/partagelink/add', (req, res) => {
    const formData = req.body;
    connexion.query('INSERT INTO partagelink SET ?', formData,  (err, results) => {
        if(err) {
            return res.status(500).send("Erreur lors de la sauvegarde");
        }else {
            return res.send('successfully')
        }
    });
});


app.post('/api/calendrier/youtube/add', (req, res) => {
    const formData = req.body;    
    connexion.query('INSERT INTO youtube (Link, Reponse) VALUES ?', [formData],  (err, results) => {
        if(err) {
            return res.status(500).send("Erreur lors de la sauvegarde");
        }else {
            return res.send('successfully added link')
        }
    });
});

/*app.get(`/api/partagelink`, (req, res) => {
    connexion.query(SELECT_ALL_PARTAGE_QUERY, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des employés');
          } else {
            res.json({data:results});
          }
    });
});*/

app.get(`/api/calendrier/youtube`, (req, res) => {
    const { ID_partagelink } = req.query;
    connexion.query(`SELECT Link, Reponse, ID_partagelink FROM youtube WHERE ID_partagelink = '${ID_partagelink}'`, (err, results) => {
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



