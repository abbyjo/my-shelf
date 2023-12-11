const connection = require('../config/connection');
const { Comic } = require('../models');

const comicData = require('./comicData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let comicCheck = await connection.db.listCollections({ name: 'comics' }).toArray();
  if (comicCheck.length) {
    await connection.dropCollection('comics');
  }

  // Add comics to the collection and await the results
  await Comic.insertMany(comicData);

  // Log out the seed data to indicate what should appear in the database
  console.log('Seeding complete! 🌱');
  process.exit(0);
});