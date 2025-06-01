import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use Railway's env var
    ssl: process.env.PGSSLMODE === "disable" ? false : { rejectUnauthorized: false }
});

// Create table if not exists
await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    interest TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`);

app.post("/api/contact", async (req, res) => {
    const { name, email, interest, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const result = await pool.query(
            `INSERT INTO contacts (name, email, interest, message) VALUES ($1, $2, $3, $4) RETURNING id`,
            [name, email, interest, message]
        );
        res.json({ success: true, id: result.rows[0].id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
