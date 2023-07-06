import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseId: { 
    type: String , 
    unique: true
  },

  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },

  courseImg: {
    type: String,
    required: true,
  },

},
{timestamps:true});

const Courses = mongoose.model("Courses", courseSchema);

export default Courses;
