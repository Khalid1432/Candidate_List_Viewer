const express = require('express');
const cors = require('cors');

const path = require("path");

const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/api/candidates', candidateRoutes);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, " frontend", "build"))); 
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
