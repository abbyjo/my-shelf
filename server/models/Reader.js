const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const readerSchema = new Schema(
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
    savedComics: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comic'
      },
    ],
    // Store file path for pre-made icons- chosen at sign-up
    icon: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtual - gets total amount of stories in reader's collection
readerSchema.virtual('comicCount').get(function () {
  return this.savedComics.length;
});

// Hashes password before saving to db
readerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to check password against hashed db value
readerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Reader = model('Reader', readerSchema);

module.exports = Reader;