import express from "express";
import pool from "./db.js";
const port = 1337

const app = express();
app.use(express.json());

// Implementa los siguientes endpoints:

// GET /sets: Lista todos los sets.
app.get('/sets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM set');
        res.status(200).send(result.rows);
        // res.json(result.rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

// GET /sets/:id/cards: Lista todas las cartas de un set específico.
app.get('/sets/:id/cards', async (req, res) => {
    try {
        const set_id = [req.params.id];
        const result = await pool.query('SELECT * FROM card INNER JOIN set ON card.set_id = set.id WHERE set.id = $1 limit 4', set_id);

        // to fix: after 404, server stops
        if (result.rows.length===0) {
            res.status(404).send('Set id not found');
        }
        res.status(200).send(result.rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});


// (Opcional) GET /cards/:id: Devuelve información detallada de una carta.



//start server 
// const PORT = process.env.PORT || 3000;   ... implementar dotenv var .env
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});