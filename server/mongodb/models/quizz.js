import mongoose from 'mongoose';

const quizzschema =  new mongoose.Schema({
    quizz_id: String, // Unique identifier for the quiz
  title: String, // Title of the quiz
  description: String, // Description or instructions for the quiz
  courseId: {type: mongoose.Schema.Types.ObjectId,ref:'users'}, // ID of the course associated with the quiz
  questions: [
    {
      id: String, // Unique identifier for the question
      text: String, // The text of the question
      options: [
        {
          id: String, // Unique identifier for the option
          text: String, // The text of the option
          isCorrect: Boolean, // Indicates whether the option is correct or not
        },
      ]
    },
]
});

const quizz = mongoose.model("quizz",quizzschema)

export default quizz;