const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = 3000;

// MongoDB connection
const MONGO_URL = "mongodb://mongodb:27017/dockerpractice";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Schema
const Message = mongoose.model("Message", {
  text: String
});

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Node.js + MongoDB Docker Compose</h1>
    <p>Node.js container is running successfully!</p>
    <p>MongoDB container is connected.</p>
  `);
});

// Add message
app.post("/message", async (req, res) => {
  const message = new Message({
    text: req.body.text
  });

  await message.save();

  res.json({
    message: "Data saved successfully!",
    data: message
  });
});

// Get messages
app.get("/messages", async (req, res) => {
  const messages = await Message.find();

  res.json(messages);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js server running on port ${PORT}`);
});
