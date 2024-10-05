const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('the_second').collection('birds').find();
    result.toArray().then((birds) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(birds);
    })
}

const getOne = async (re, res) => {
    const birdId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('the_second').collection('birds').find({_id: birdId});
    result.toArray().then((birds) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(birds[0]);
    })
}

const createBird = async (req, res) => {
    const bird = {
        commonName: req.body.commonName,
        scientificName: req.body.scientificName,
        food: req.body.food,
        region: req.body.region
    };
    const response = await mongodb.getDatabase().db('the_second').collection('birds').insertOne({_id: birdId}, bird);
    if (response.acknowledged) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'An error occurred while updating a bird!')
    }
}

const updateBird = async (req, res) => {
    const birdId = new ObjectId(req.params.id);
    const bird = {
        commonName: req.body.commonName,
        scientificName: req.body.scientificName,
        food: req.body.food,
        region: req.body.region
    };
    const response = await mongodb.getDatabase().db('the_second').collection('birds').replaceOne({_id: birdId}, bird);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'An error occurred while updating a bird!')
    }
}

const deleteBird = async (req, res) => {
    const response = await mongodb.getDatabase().db('the_second').collection('birds').remove({_id: birdId}, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'An error occurred while deleting a bird!')
    }
}
module.exports = {getAll, getOne, createBird, updateBird, deleteBird}