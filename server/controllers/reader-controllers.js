const { Reader, Comic } = require('../models');
const { signToken } = require('../utils/auth');

// Function to create new reader acct
async function createReader(req, res) {
    try {
        const newReader = await Reader.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            icon: req.body.icon
        })

        if (!newReader) {
        return res.status(400).json({ message: 'Something went wrong, please double check submitted info!' });
        }

        const token = signToken(newReader);
        res.status(200).json({ token, newReader });
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