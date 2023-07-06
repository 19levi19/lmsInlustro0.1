import mongoose from 'mongoose';

const quizzschema =  new mongoose.Schema({
  quizzId: { 
    type: String,
    unique: true,
    required:true
   }, 

  title: {
    type: String
  }, 

  description:{ 
    text: String
  },

  courseId:{ 
    type: String,
    required : true
  }, 

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
},
{timestamps:true});



const quizz = mongoose.model("quizz",quizzschema)

export default quizz;