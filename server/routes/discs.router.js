const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route discs
 */
router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT "disc_library"."id", "disc_library"."name" as "name", 
    "disc_library"."speed" as "speed", 
    "disc_library"."glide" as "glide",
    "disc_library"."turn" as "turn",
    "disc_library"."fade" as "fade",
    "disc_library"."plastic" as "plastic",
    "disc_library"."disc_image" as "image",
    "disc_type"."name" as "type"
        FROM "disc_library"
        JOIN "disc_type" on "disc_library"."type_id"="disc_type"."id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * GET route types
 */
router.get('/types', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM "disc_type" ORDER BY "id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error getting types data', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
    router.post('/', (req, res) => {
        const newDisc = req.body;
        const queryText = `INSERT INTO disc_library ("name", "speed", "glide", "turn", "fade", "plastic", "type_id", "disc_image")
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
        const queryValues = [
            newDisc.name,
            newDisc.speed,
            newDisc.glide,
            newDisc.turn,
            newDisc.fade,
            newDisc.plastic,
            newDisc.type_id,
            newDisc.disc_image,
        ];
        pool.query(queryText, queryValues)
            .then(() => {
                res.sendStatus(201);
            })
            .catch((err) => {
                console.log('Error completing SELECT disc query', err);
                res.sendStatus(500);
            });
    });

module.exports = router;