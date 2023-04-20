const express = require('express');
const { default: connection } = require('./connection');

const app = express();
const port = 3000;

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar: ' + err.stack);
        return;
    }
    
    console.log('Conectado com sucesso como id ' + connection.threadId);
})

// cria a query de insert
const sql = `INSERT INTO people(name) VALUES
            ('Pedro'),
            ('Jimi Hendrix'),
            ('Kevin Parker'),
            ('Mick Jagger'),
            ('Buakaw');`;

connection.query(sql);

// rota inicial
app.get('/', (req, res) => {
    // Define um callback para usar o resultado da query
    function useResult(names)  {
        let ul = '<ul>';

        names.forEach((name) => {
            ul += `<li>${name}</li>`
        });

        ul += "</ul>"
    
        res.send(`<h1>Full Cycle Rocks!</h1>${ul}`)
    }

    // Executa a query e passa o callback como argumento
    connection.query('SELECT name FROM people', (err, result, fields) => {
        if (err) throw err;
        const string = JSON.stringify(result);
        const json = JSON.parse(string);
        const names = json.map((obj) => obj.name);

        // Chama o callback com o resultado da query
        useResult(names);
    })
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});
