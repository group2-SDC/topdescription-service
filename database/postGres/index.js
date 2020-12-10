const { Pool } = require('pg');

//use pool for multiple concurrent requests
const pool = new Pool({
    database: 'tripadvisorinfo'
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
