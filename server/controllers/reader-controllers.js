const { Reader } = require('../models');
const { signToken } = require('../utils/auth');

// Function to create new reader acct
async function createReader({ body }, res) {
    try {
        const newReader = await Reader.create({
            username: body.username,
            email: body.email,
            password: body.password,
            icon: body.icon
        })

        if (!newReader) {
            return res.status(400).json({ message: 'Something went wrong, please double check submitted info!' });
        }

        const token = signToken(newReader);
        res.json({ token, newReader });

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to login user
async function login({ body }, res) {
    try {
        const myReader = await Reader.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!myReader) {
            return res.status(400).json({ message: "User not found :-(" });
        }

        const correctPw = await myReader.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(myReader);
        res.json({ message: "Login successfull! :-)", token, myReader });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to get all registered readers
async function getReaders(req, res) {
    try {
        const readers = await Reader.find();
        res.json(readers)
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to get single reader
async function getMyReader({ user = null, params }, res) {
    try {
        const myReader = await Reader.findOne({
            $or: [{ _id: user ? user._id : params.readerID }, { username: params.username }],
        });

        if (!myReader) {
            return res.status(400).json({ message: 'No users with this ID found :-(' });
        }

        res.json(myReader);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to edit reader account info in DB
async function editReader({ params, body }, res) {
    try {
        const myReader = await Reader.findOneAndUpdate(
            { _id: params.readerID },
            { $set: body },
            { runValidators: true, new: true }
        );
        if (!myReader) {
            return res.status(404).json({ message: 'No user with that ID found :-(' })
        }

        res.json({ message: "Reader info updated successfully!", myReader })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to save comic to reader's shelf
async function saveComic({ user, body }, res) {
    try {
        const updatedReader = await Reader.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: {savedComics: body }},
            { new: true, runValidators: true }
        );
        return res.json({ message: "Comic added to shelf successfully!", updatedReader })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// Function to remove comic from reader's shelf
async function removeComic({user, params}, res){
    try {
        const updatedReader = await Reader.findOneAndUpdate(
            { _id: user._id },
            { $pull: {savedComics: { _id: params.comicID } }},
            { new: true }
        );

        if(!updatedReader) {
            return res.status(404).json({ message: "No user with that ID found :-("})
        }
        return res.json({ message: "Comic removed from shelf!", updatedReader })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

module.exports = {
    createReader,
    getReaders,
    getMyReader,
    editReader,
    saveComic,
    removeComic,
    login
}