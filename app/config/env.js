const env = {
  database: 'loizenaidb',
  username: 'postgres',
  password: '123',
  host: 'postgres-cluster-service',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;