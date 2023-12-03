const { Comic } = require('../models');

// Function to get all comics
async function getComics(req, res) {
    try {
        const allComics = await Comic.find();
        res.json(allComics)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to get one comic
async function getMyComic(req, res) {
    try {
        const myComic = await Comic.findOne({ _id: req.params.comicID })

        if(!myComic) {
            return res.status(404).json({ message: 'No comic with that ID found :-(' })
        }
        res.json(myComic);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to create new comic 
async function createComic({body}, res) {
    try {  
        const newComic = await Comic.create({
            title: body.title,
            authors: body.authors,
            description: body.desc,
            cover:body.cover,
            mirrors: body.mirrors, //not REQ
            genre: body.genre,
            tags: body.tags, //not REQ
            status: body.status, //not REQ - default true
            rss: body.rss,  
            homepage: body.homepage
        })
        res.json({ message: "New comic added~" , newComic})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to update existing comic info in database
async function editComic(req, res) {
    try {
        const myComic = await Comic.findOneAndUpdate(
            { _id: req.params.comicID },
            { $set: req.body },
            { runValidators: true, new: true }
        )

        if (!myComic) {
            res.statys(404).json({ message: "No comic with that ID found, please try again!"})
        }

        res.json({message: "Comic updated successfully!", myComic})
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
};

// Function to remove comic from database by id
async function removeComic(req, res) {
    try {
        const myComic = await Comic.findOneAndDelete({ _id: req.params.comicID })

        if(!myComic) {
            return res.status(404).json({ message: "No comic with that ID found :-("})
        }

        res.json({ message: 'Comic has been removed!', myComic })
    } catch (err) {
       res.status(500).json(err);
       console.log(err);
    }
};

module.exports = {
    createComic,
    getComics,
    getMyComic,
    editComic,
    removeComic
}