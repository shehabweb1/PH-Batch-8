const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Simple CURD is running ST')
});

app.listen(port, () =>{
    console.log(`Starting ${port}`);
});

/**
 *username: shehabweb1
 * password: gIqJ5A68xkWR2JSH
*/



const uri = "mongodb+srv://shehabweb1:gIqJ5A68xkWR2JSH@learning.axf2sgn.mongodb.net/?retryWrites=true&w=majority";

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

    // const database = client.db("insertDB");
    // const userConnection = database.collection("userConnection");

    const userConnection = client.db("insertDB").collection("userConnection");

    app.get('/users', async(req, res) => {
        const cursor = userConnection.find()
        const result = await cursor.toArray();
        res.send(result);
    })
    
    app.post('/users', async(req, res) => {
        const user = req.body;
        const result = await userConnection.insertOne(user);
        res.send(result);
    })

    app.delete('/users/:id', async(req, res) => {
        const id = req.params.id;
       const query = {_id: new ObjectId(id)}
       const result = await userConnection.deleteOne(query);
       res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
