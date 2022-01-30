const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('get genre in router', req.query);

  const selectQuery = `
  SELECT
    movies.id,
    movies.title,
    ARRAY_AGG(mg.genre_id) AS genre_id,
    ARRAY_AGG(genres.name) AS genre_name
FROM movies
JOIN movies_genres mg
    ON movies.id = mg.movie_id
JOIN genres
    ON mg.genre_id = genres.id
GROUP BY movies.id
ORDER BY movies.id;
  `;

  pool.query(selectQuery)
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