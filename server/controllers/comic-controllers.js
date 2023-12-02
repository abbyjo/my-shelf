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
async function createComic(req, res) {
    try {  
        const newComic = await Comic.create({
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.desc,
            cover:req.body.cover,
            mirrors: req.body.mirrors, //not REQ
            genre: req.body.genre,
            tags: req.body.tags, //not REQ
            status: req.body.status, //not REQ - default true
            rss: req.body.rss,  
            homepage: req.body.homepage
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