const express = require('express'); 
const cors = require('cors'); 
const { db } = require('./db'); 

const app = express(); 
app.use(cors()) 
app.use(express.json()) 

const PORT = process.env.PORT || 5000; 

app.get('/api/forms', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM forms RETURNING *"); 
        res.status(200).json(result.rows)
    } catch(error) {
        res.sendStatus(500).json({error: "ERROR HAS OCCURED"}) 
    }
}) 

app.post('/api/forms', async (req, res) => {
    try {
        const { name, email, country } = req.body; 

        const result = await db.query("INSERT INTO forms(name, email, country) VALUES ($1, $2, $3) RETURNING *", [name, email, country]) 
        res.status(201).json(result.rows[0])
    } catch(error) {
        console.error(error); 
        res.status(500).json({error: "Error"});
    }
})

app.listen(PORT, () => {
    console.log(`\n---SERVER RUNNING = ${PORT}\n`) 
}); 