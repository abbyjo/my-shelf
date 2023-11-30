const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const authorSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // Array of associated comics author has created/posted
    work: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comic'
      },
    ],
    // Array of similar comics author can rec to readers
    recs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comic'
      },
    ],
    links: [
      {
        type: String,
      }
    ],
    // Store file path for pre-made icons - chosen at sign-up
    icon: {
      type: String,
      required: true,
    },
  },
);

// Hashes password before saving to db
authorSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to check password against hashed db value
authorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Author = model('Author', authorSchema);

module.exports = Author;