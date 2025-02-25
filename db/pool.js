const { Pool } = require('pg');

module.exports = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'myFirstDB',
    password: 'Saksham@123',
    port: 5432
});