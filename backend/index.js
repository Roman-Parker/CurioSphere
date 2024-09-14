require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const bodyParser = require('body-parser'); // For parsing JSON
const cors = require('cors');
const { sequelize, Fact } = require('./models'); // Import sequelize and Fact model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// Get all facts
app.get('/api/facts', async (req, res) => {
    try {
        const facts = ['hej', '222'] //await Fact.findAll();
        res.json(facts);
    } catch (error) {
        console.error('Error fetching facts:', error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Create a new fact
app.post('/api/facts', async (req, res) => {
    try {
        const { factText, category, longitude, latitude } = req.body;
        const newFact = await Fact.create({ factText, category, longitude, latitude });
        res.status(201).json(newFact); // Return 201 status for created resource
    } catch (error) {
        console.error('Error creating fact:', error);
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
        console.error('Error updating fact:', error);
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
        console.error('Error deleting fact:', error);
        res.status(500).json({ error: 'Failed to delete fact' });
    }
});

// Sync database and start the server
sequelize.authenticate() // Check database connection
    .then(() => {
        console.log('Database connected successfully.');
        return sequelize.sync(); // Sync models to the database
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
