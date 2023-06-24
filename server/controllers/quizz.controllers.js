import express from 'express';
import quizz from '../mongodb/models/quizz.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const getallquizz = async (req,res) => {
    try{
        const foundquizz = await quizz.find();
        res.send(foundquizz);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const createquizz = async (req,res)=>{
    try{
        const{
            QuizzId,
            title,
            description,
            courseId,
            questions,
            options}= req.body;

        const newquizz= new quizz ({
            QuizzId,
            title,
            description,
            courseId,
            questions,
            options
        })

        await newquizz.save();
        res.status(201).json(newquizz)
    }catch(error){
        console.error('error in creating quizz',error);
    res.status(500).send("Internal Server Error");
    }
};

const updatequizz = (req, res) => {
    const Quizzid = req.params._id; // Assuming you're extracting it from request parameters
    const objectId = new ObjectId(Quizzid);
    const updatedquizz = req.body ;

    quizz.findByIdAndUpdate(objectId, updatedquizz, { new: true })
  .then(updatedquizz => {
    // Handle the updated quiz response
    console.log(updatedquizz);
    res.json(updatedquizz);
  })
  .catch(error => {
    // Handle any error that occurred during the update
    res.status(500).json({ error: 'An error occurred while updating the quiz' });
  });


  };




export {
    getallquizz,
    createquizz,
    updatequizz,
};