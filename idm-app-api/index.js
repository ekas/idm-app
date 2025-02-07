const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

const allowedOrigins = process.env.WHITELIST_URLS.split(",");
console.log("Whitelisted URLS: ", allowedOrigins);
app.use(
  cors({
    origin: (origin, callback) => {
      console.log(origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express JS on Vercel");
});

// Create a classification entry for text
app.post("/classification", async (req, res) => {
  const { text, classifier } = req.body;
  const classification = await prisma.dataClassificaion.create({
    data: { text, classifier },
  });
  res.json(classification);
});

// Get all text classifications
app.get("/classifications", async (req, res) => {
  const classifications = await prisma.dataClassificaion.findMany();
  res.json(classifications);
});

// Start server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

module.exports = app;
