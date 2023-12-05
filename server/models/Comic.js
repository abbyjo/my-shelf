const { Schema, model } = require('mongoose');

const comicSchema = new Schema({
  // For v1.0 array of names, v2.0 can link to objectIDS/actual accounts
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  authorLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  homepage: {
    type: String,
    required: true,
  },
  // Array of links- other locations comic is posted
  mirrors: [
    {
      type: String
    }
  ],
  title: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true
    },
  ],
  tags: [
    {
      type: String
    }
  ],
  // Boolean value denotes if active or on hiatus
  status: {
    type: Boolean,
    default: true
  },
  rss: {
    type: String,
    required: true,
  }
});

const Comic = model('Comic', comicSchema);

module.exports = Comic;