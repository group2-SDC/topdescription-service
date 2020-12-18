const newrelic = require('newrelic');
const express = require('express');
const db = require('../database/postGres/index.js');
const app = express();
const port = 3001;
const path = require('path');
const { Pool } = require('pg');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use('/', express.static(PUBLIC_DIR));

app.get('/loaderio-f8fd8ba1a45b0ca3d1f36fc5e3847a66.txt', (req, res) => {
    res.send('loaderio-f8fd8ba1a45b0ca3d1f36fc5e3847a66')
});

app.use('/:listing_id', express.static(PUBLIC_DIR));

app.get('/api/listings/:listing_id/carousel', (req, res) => {
    const id = req.params.listing_id; 
    const query = `select listing.*, g.imageUrl from listing left join lateral (select array_agg(imageUrl) as imageUrl from gallery where listing_id = listing.id group by listing.id) g on true where listing.id = ${id}`;

    db.getListingInfo(query, (result) => {
        res.send(result);
    })
});

app.listen(port, () => console.log(`listening on port ${port}`)); 
