import express from 'express';
import quizz from '../mongodb/models/quizz.js';

const getallquizzes = async (req,res) => {
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
        const{quizz_id,
            title,
            description,
            courseId,
            name,
            Description,
            questions,
            options}= req.body

        const newquizz= new quizz ({
            quizz_id,
            title,
            description,
            courseId,
            name,
            Description,
            questions,
            options
        })

        await newquizz.save();
        res.status(201).json(newquizz)
    }catch(er){
        console.error(err);
    res.status(500).send("Internal Server Error");
    }
};

const updatequizz = (req, res) => {
    const quizId = req.params.quizId;
    const { title, description, courseId, questions } = req.body;
  
    Quizz.findOneAndUpdate(
      { quizz_id: quizId },
      { title, description, courseId, questions },
      { new: true }
    )
      .then((updatedQuiz) => {
        if (!updatedQuiz) {
          return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json(updatedQuiz);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to update quiz details' });
      });
  };




export {
    getallquizzes,
    createquizz,
    updatequizz,
};