const express = require("express");

const app = express();
const PORT = 3000;

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.use(express.static("public"));

app.get("/api", async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Backend connection error:", error);
        res.status(500).json({
            error: "Unable to connect to Flask backend"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express frontend running on port ${PORT}`);
    console.log(`Backend URL: ${BACKEND_URL}`);
});