const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@learning.axf2sgn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffee');

    app.get('/coffee', async(req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/coffee/:id', async(req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });
   
    app.post('/coffee', async(req, res) => {
      const addCoffee = req.body;
      const result = await coffeeCollection.insertOne(addCoffee);
      res.send(result);
    });

    app.put('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const coffee = req.body;

      const updatedCoffee ={
        $set: {
          name: coffee.name,
          quantity: coffee.quantity,
          supplier: coffee.supplier,
          taste: coffee.taste,
          category: coffee.category,
          details: coffee.details
        }
      }

      const result = await coffeeCollection.updateOne(filter, updatedCoffee, options );
      res.send(result);
    });

    app.delete('/coffee/:id', async(req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, (req, res) => {
    console.log(`Coffee making server is running: ${port}`)
});