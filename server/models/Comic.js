const { Schema, model } = require('mongoose');

const comicSchema = new Schema({
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  ],
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
    default: 'true'
  },
  rss: {
    type: String,
    required: true,
  }
});

const Comic = model('Comic', comicSchema);

module.exports = Comic;