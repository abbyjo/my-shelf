const connection = require('../config/connection');
const { Comic, Reader } = require('../models');

const comicData = require('./comicData.json');
const readerData = require('./readerData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
      // Delete the collections if they exist
      let comicCheck = await connection.db.listCollections({ name: 'comics' }).toArray();
      if (comicCheck.length) {
        await connection.dropCollection('comics');
      }
  
      let readerCheck = await connection.db.listCollections({ name: 'readers' }).toArray();
      if (readerCheck.length) {
        await connection.dropCollection('readers');
      }
  
    // Add students to the collection and await the results
    await Comic.insertMany(comicData);
    await Reader.collection.insertMany(readerData);
  
    // Log out the seed data to indicate what should appear in the database
    console.log('Seeding complete! 🌱');
    process.exit(0);
  });