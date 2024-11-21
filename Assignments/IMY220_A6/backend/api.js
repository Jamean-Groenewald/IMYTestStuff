//u23524121 Jamean Groenewald

const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();  
const url = process.env.MONGO_URL; 
const dbName = 'IMY220A6';

router.get('/posts', async (req, res) => 
{
  const client = new MongoClient(url);
  
  try 
  {
    await client.connect();

    const db = client.db(dbName);

    const posts = await db.collection('posts').find({}).toArray();  

    res.json(posts);
  } 
  catch(error) 
  {
    res.status(500).send('Error fetching posts');
  }
  finally 
  {
    await client.close();
  }
});

router.delete('/posts/:id', async (req, res) => 
{
  const client = new MongoClient(url);
  
  try 
  {
    await client.connect();

    const db = client.db(dbName);

    const postId = req.params.id; 

    const result = await db.collection('posts').deleteOne({ id: postId });
    
    if(result.deletedCount === 1) 
    {
      res.send(`Post with id ${postId} deleted successfully`);
    } 
    else 
    {
      res.status(404).send('Post not found');
    }
  } 
  catch(error) 
  {
    res.status(500).send('Error deleting post');
  } 
  finally 
  {
    await client.close();
  }
});

router.put('/posts/:id', express.json(), async (req, res) => 
{
  const client = new MongoClient(url);
  
  try 
  {
    await client.connect();

    const db = client.db(dbName);

    const postId = req.params.id;  
    const updatedPost = req.body;  
    
    const result = await db.collection('posts').updateOne(
      { id: postId }, 
      { $set: updatedPost }
    );
    
    if(result.matchedCount === 1) 
    {
      res.send(`Post with id ${postId} updated successfully`);
    } 
    else 
    {
      res.status(404).send('Post not found');
    }
  } 
  catch(error) 
  {
    res.status(500).send('Error updating post');
  } 
  finally 
  {
    await client.close();
  }
});

module.exports = router;
