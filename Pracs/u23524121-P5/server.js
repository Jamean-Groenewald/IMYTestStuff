//u23524121 Jamean Groenewald 

const { MongoClient } = require('mongodb');

const url = "mongodb+srv://jameangroenewald:bjO3XO9MqQnLVHkc@imy220.0n3k2.mongodb.net/?retryWrites=true&w=majority&appName=IMY220" //"mongodb+srv://<username>:<password>@imy220.gwjv2.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

const client = new MongoClient(url);

async function main() 
{
    try 
    {
        // Create Connection
        await client.connect();
        console.info("Connected to MongoDB");

        // Set Database
        const db = client.db("IMY220Prac5");
        const collection = db.collection("events");
        
        const query = 
        {
            locations: {
              $elemMatch: {

                area: 'Brooklyn',
                
                capacity: { $gt: 20 },
                
                date: { $gt: '2022/10/08', $lt: '2022/10/26' }

              }
            }
        };

        const projection = {
            _id: 0, 
            name: 1, 
            description: 1 
        };
      
        //const cursor = collection.find(query).project(projection);

        // await cursor.forEach(event => {
        //     console.log(`Name: ${event.name}, Description: ${event.description}`);
        // });

        const events = await collection.find(query).project(projection).toArray();

        console.log(events);     
    } 
    catch(e) 
    {
        console.error(e);
    } 
    finally 
    {
        await client.close();
    }
}

main().catch(console.error);