require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Fact } = require('./models');

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());

// Get all facts
app.get('/api/facts', async (req, res) => {
    try {
        const facts = await Fact.findAll();
        res.json(facts);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Create a new fact
app.post('/api/facts', async (req, res) => {
    try {
        const { factText, category, longitude, latitude } = req.body;
        const newFact = await Fact.create({ factText, category, longitude, latitude });
        res.json(newFact);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create fact' });
    }
});

// Update a fact
app.put('/api/facts/:id', async (req, res) => {
    try {
        const fact = await Fact.findByPk(req.params.id);
        if (!fact) return res.status(404).json({ error: 'Fact not found' });

        const { factText, category, longitude, latitude } = req.body;
        await fact.update({ factText, category, longitude, latitude });
        res.json(fact);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update fact' });
    }
});

// Delete a fact
app.delete('/api/facts/:id', async (req, res) => {
    try {
        const fact = await Fact.findByPk(req.params.id);
        if (!fact) return res.status(404).json({ error: 'Fact not found' });

        await fact.destroy();
        res.json({ message: 'Fact deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete fact' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});