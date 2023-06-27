
import quizz from '../mongodb/models/quizz.js';

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
            quizzId,
            title,
            description,
            courseId,
            questions,
            options}= req.body;

        const newquizz= new quizz ({
            quizzId,
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

const updatequizz = async (req, res) => {
    try {
      const quizzId = req.params.quizzId; // Assuming the name parameter is passed in the request
  
      // Find the course by name and update the fields
      const updatedCourse = await Courses.findOneAndUpdate(
        { quizzId },
        {
          title: req.body.title,
          description: req.body.description,
          courseId: req.body.courseId,
          questions: req.body.questions,
          options: req.body.options,
          // Update other fields as per your requirements
        },
        { new: true } // To return the updated course instead of the old one
      );
  
      if (!updatedCourse) {
  
        return res.status(404).json({ message: "Course not found" });
      }
  
      res
        .status(200)
        .json({ message: "Course updated successfully", course: updatedCourse });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ message: "Failed to update course" });
    }
  };


const getquizzbyId = async (req, res) => {

    try {
      const quizzId = req.params.quizzId;
  
      // use parseInt if the column type is int
      const getquizz = await quizz.findOne({ quizzId: quizzId });
  
      if (!getquizz) {
        return res.status(404).json({ message: "Quizz not found" });
      }
  
      res.status(200).json(getquizz);
    } catch (error) {
      console.error("Error retrieving quizz:", error);
      res.status(500).json({ message: "Failed to retrieve quizz" });
    }
  };


  const deletequizzId = async (req,res) => {

    try{
      const quizzId = req.params.quizzId;
  
      const deletequizz= await quizz.findOneAndDelete({ quizzId:quizzId});
  
      if (!deletequizz){
        return res.status(404).json({message:"Quizz not found"});
      }
  
      res.status(200).json(deletequizz);
  
    }catch(error){
      console.log("Error Deleting quizz",error);
      res.status(500).json({message:"failed to delete quizz"});
    }
  }

export {
    getallquizz,
    createquizz,
    // updatequizz,
    getquizzbyId,
    deletequizzId
};