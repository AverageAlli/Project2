import { query } from '../../lib/databaseConnect';

export default async (req, res) => {
    if (req.method === 'GET') {
        const result = await query('SELECT * FROM cards ORDER BY id');
        res.status(200).json(result.rows);
    } else if (req.method === 'POST') {
        const { prompt, answer } = req.body;
        const result = await query(
            'INSERT INTO cards (prompt, answer, amount_understood, next_view) VALUES ($1, $2, 0, NOW()) RETURNING *',
            [prompt, answer]
        );
        res.status(201).json(result.rows[0]);
    }
};