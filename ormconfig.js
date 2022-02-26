const devEnv = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: '5432',
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    logging: true,
    synchronize: false,
};

module.exports = devEnv;