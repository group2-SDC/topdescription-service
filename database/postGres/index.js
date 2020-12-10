const { Pool } = require('pg');

//use pool for multiple concurrent requests
const pool = new Pool();


getListingInfo = (id, callback) => {

var query = `select listing.*, g.imageUrl from listing left join lateral (select array_agg(imageUrl) as imageUrl from gallery where listing_id = listing.id group by listing.id) g on true where listing.id = ${id}`;

pool.query(query, (err, res) => {
  if (err) {
      console.log(err);
      res.status(404);
  }
  callback(err, res)
  pool.end();
});
};

module.exports = {
    getListingInfo
}

//not used for now