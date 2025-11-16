const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection URL
const url = 'mongodb+srv://grajesh2907_db_user:9FFJKfZP9kTl6zul@testing.fijvbte.mongodb.net/?retryWrites=true&w=majority&appName=testing';
const dbName = 'userDB';
const client = new MongoClient(url);

let db;
let usersCollection;

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log('✅ Connected successfully to MongoDB');
    db = client.db(dbName);
    usersCollection = db.collection('users');
  })
  .catch(err => console.error('❌ Failed to connect to MongoDB', err));

// --- API Routes ---

// SEED dummy users
app.post('/seed', async (req, res) => {
  try {
    const dummyUsers = [
      { name: "Alice Johnson", email: "alice@example.com", age: 25, role: "Admin" },
      { name: "Bob Smith", email: "bob@example.com", age: 30, role: "User" },
      { name: "Charlie Brown", email: "charlie@example.com", age: 22, role: "User" },
      { name: "Diana Prince", email: "diana@example.com", age: 28, role: "Moderator" },
      { name: "Ethan Hunt", email: "ethan@example.com", age: 35, role: "Admin" }
    ];

    const result = await usersCollection.insertMany(dummyUsers);
    res.status(201).send({ message: "Dummy users inserted successfully", result });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


// CREATE a new user
app.post('/users', async (req, res) => {
  try {
    const result = await usersCollection.insertOne(req.body);
    res.status(201).send({ message: "User created successfully", result });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// READ all users
app.get('/users', async (req, res) => {
  try {
    const users = await usersCollection.find({}).toArray();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// READ a single user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await usersCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// UPDATE a user by ID
app.patch('/users/:id', async (req, res) => {
  try {
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User updated successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// DELETE a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const result = await usersCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
