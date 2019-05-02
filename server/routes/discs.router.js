const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route discs
 */
router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT "disc_library"."id", 
    "disc_library"."name" as "name", 
    "disc_library"."speed" as "speed", 
    "disc_library"."glide" as "glide",
    "disc_library"."turn" as "turn",
    "disc_library"."fade" as "fade",
    "disc_library"."plastic" as "plastic",
    "disc_library"."disc_image" as "image",
    "disc_type"."name" as "type"
        FROM "disc_library"
        JOIN "disc_type" on "disc_library"."type_id"="disc_type"."id"
        ORDER BY "name";`;
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
        newDisc.type,
        newDisc.image,
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


router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM disc_library WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /discs', error);
        res.sendStatus(500);
    })
});


router.post('/myinventory', (req, res) => {

    const myNewDisc = req.body.id;
    const queryText = `INSERT INTO my_inventory ("user_id", "disc_id") VALUES ($1, $2);`;

    console.log('req user id:', req.user.id)
    console.log('newDisc id:', myNewDisc)

    pool.query(queryText, [req.user.id, myNewDisc])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error completing SELECT disc query', err);
            res.sendStatus(500);
        });
});


router.get('/myinventory', (req, res) => {
    // return all categories
    const queryText =
    `SELECT "my_inventory"."id" AS "inventory_id",
	"my_inventory"."user_id",
	"my_inventory"."disc_id",	
	"disc_library"."id",
    "disc_library"."name", 
    "disc_library"."speed", 
    "disc_library"."glide",
    "disc_library"."turn",
    "disc_library"."fade",
    "disc_library"."plastic",
    "disc_library"."type_id",
	"disc_library"."disc_image",
	"disc_type"."id" as "disc_type_id",
	"disc_type"."name" as "disc_type_name"
    FROM "my_inventory"
    JOIN "disc_library" ON "my_inventory"."disc_id" = "disc_library"."id"
    JOIN "disc_type" on "disc_library"."type_id"="disc_type"."id"
    ORDER BY "disc_library"."name";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error getting types data', err);
            res.sendStatus(500);
        });
});

router.delete('/myinventory/:id', (req, res) => {
    let id = req.params.id;
    console.log('id:', id);

    pool.query('DELETE FROM my_inventory WHERE id=$1', [id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /myinventory', error);
        res.sendStatus(500);
    })
});


module.exports = router;