import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/mydatabase",
    ssl: {
        rejectUnauthorized: false
    }
});
// Create table if not exists
db.run(`
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    interest TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

// API endpoint
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
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log("API server running on http://localhost:3001");
});
