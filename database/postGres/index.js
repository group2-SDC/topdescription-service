const { Pool } = require('pg');

//use pool for multiple concurrent requests
const pool = new Pool({
    user: 'postgres',
    host: '52.89.253.13',
    database: 'tripadvisorinfo',
    password: process.env.postgrespw,
    port: '5432'
});

pool.connect(); 


const getListingInfo = (query, callback) => {
pool
  .query(query)
  .then((res) => {
      callback(res.rows);
  })
  .catch(e=> {
      console.log(e);
  })
};

module.exports = {
    getListingInfo
};
