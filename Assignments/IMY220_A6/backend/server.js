// u23524121 Jamean Groenewald

import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import apiRoutes from './api';

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL; 
const publicPath = path.resolve('frontend', 'public'); 

app.use(express.static(publicPath));

app.use(express.json());

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

const client = new MongoClient(mongoUrl);

async function main() 
{
  try 
  {
    await client.connect();
    console.info("Connected to MongoDB");

    const database = client.db("IMY220A6");
    const postsCollection = database.collection("posts");

    app.locals.postsCollection = postsCollection;

    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  } 
  catch(e) 
  {
    console.error('Error connecting to MongoDB:', e);
  }
}

main().catch(console.error);
