import express from "express";
import pool from "./db.js";
import cors from "cors";

const port = 1337
const app = express();

app.use(express.json());
app.use(cors());

// GET /sets: Lista todos los sets.
app.get('/sets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM set');
        if (result.rows.length === 0) {
            res.status(404).send('Sets data not found');
        }
        else {
            res.status(200).json(result.rows);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

// GET /sets/:id/cards: Lista todas las cartas de un set específico.
app.get('/sets/:id/cards', async (req, res) => {
    try {
        const set_id = [req.params.id];
        const result = await pool.query(`SELECT * FROM card INNER JOIN image ON card.id = image.card_id WHERE card.set_id =$1 and image.type='small' limit 24`, set_id);
        if (result.rows.length === 0) {
            res.status(404).send('Set id not found');
        } else {
            res.status(200).json(result.rows);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});


// (Opcional) GET /cards/:id: Devuelve información detallada de una carta.
app.get('/cards/:id', async (req, res) => {
    try {
        const card_id = [req.params.id];
        // const result = await pool.query(`SELECT card.*, image.url as image_url, image.type as image_type, market.url as market_url, market.market
        //     FROM card
        //     INNER JOIN image ON card.id = image.card_id
        //     INNER JOIN market ON card.id = market.card_id
        //     WHERE card.id = $1 and image.type = 'large' limit 10`, card_id);

        const result = await pool.query(`SELECT card.*, image.url as image_url, image.type as image_type
                FROM card
                INNER JOIN image ON card.id = image.card_id
                WHERE card.id = $1 and image.type = 'large'`, card_id);

        if (result.rows.length === 0) {
            res.status(404).send('Card id not found');
        } else {
            res.status(200).json(result.rows);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});


//start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});