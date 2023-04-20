const mysql = require('mysql');

const config = {
    host: "db", // nome do serviço criado no docker-compose para o banco de dados
    user: "root",
    password: "root",
    database: "nodedb"
};

// configura o mysql
const connection = mysql.createConnection(config);

exports.default = connection;