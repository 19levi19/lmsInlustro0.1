import mongoose from 'mongoose';

const quizzschema =  new mongoose.Schema({
  QuizzId: { 
    type: String , 
    required: true,
    unique: true
   }, 
  title: String, 
  description:{ text: String}, 
  courseId: String, 
  questions: [
    {
      q_id: String,
      text: String,
      options: [
        {
          o_id: String, 
          text: String, 
          isCorrect: Boolean, 
        },
      ]
    },
]
});



const quizz = mongoose.model("quizz",quizzschema)

export default quizz;