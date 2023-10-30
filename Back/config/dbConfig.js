const { Sequelize } = require('sequelize');

const connect = new Sequelize('hagriecom_astuif', 'hagriecom_abraham', '}$sbYc2nv9:J]_b', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

(async () => {
  try {
    await connect.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = connect;
