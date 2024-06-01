const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('João')`
connection.query(sql)

app.get('/', (req,resp) => {
    // resp.send('<h1>Full Cycle Rocks1!</h1>')
    const getPeoples = `SELECT * FROM people`;
    connection.query(getPeoples, (err, results) => {
        if (err) throw err;

        let peoplesList = '<ul>';
        results.forEach(person => {
            peoplesList += `<li>${person.name} - ${person.id}</li>`;
        });
        peoplesList += '</ul>';

        resp.send(`
            <h1>Full Cycle Rocks!</h1>
            ${peoplesList}
        `);
    });
})


app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})