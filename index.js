const express = require("express");
const app = express();

const PORT = 3003;

app.get("/", (req, res) => {
    res.send("Hello! This is running from a server.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
