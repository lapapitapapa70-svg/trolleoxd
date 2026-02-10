const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Store for sound commands (in-memory)
let soundQueue = [];

// API: Send sound command
app.post('/api/send-sound', (req, res) => {
    const { sound } = req.body;
    
    if (!sound || sound < 1 || sound > 5) {
        return res.status(400).json({ error: 'Invalid sound number' });
    }
    
    soundQueue.push({
        sound: sound,
        timestamp: Date.now()
    });
    
    // Keep only last 10 commands
    if (soundQueue.length > 10) {
        soundQueue.shift();
    }
    
    res.json({ success: true });
});

// API: Poll for new sounds
app.get('/api/poll-sound', (req, res) => {
    const since = parseInt(req.query.since) || 0;
    
    // Find newest sound after the given timestamp
    const newSound = soundQueue
        .filter(s => s.timestamp > since)
        .sort((a, b) => b.timestamp - a.timestamp)[0];
    
    if (newSound) {
        res.json(newSound);
    } else {
        res.json({});
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`👉 Abre http://localhost:${PORT} en tu navegador`);
});
