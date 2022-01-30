const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('get genre in router', req.query);

  const selectQuery = `
  SELECT
      "movies"."title",
      ARRAY_AGG("genres"."name")
    FROM "movies"
    JOIN "movies_genres"
      ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres"
      ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."id" = $1 
    GROUP BY "movies"."title";
  `;


  let queryParams = [
    req.query.movieID
  ];

  pool.query(selectQuery, queryParams)
  .then(results => {
    console.log('results, ',  results);
    res.send(results.rows);
  })

  .catch(err => {
    console.log('get movie detail err', err);
  res.sendStatus(500)
  })
});

module.exports = router;