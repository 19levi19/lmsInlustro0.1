import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  enrollmentId: {
    type: String,
    
      },
  studentId: {
    type: String,
    
  },
  courseId: {
    type : String,
    
  },
  enrollmentStatus: {
    type: String,
    enum: ['active', 'dropped', 'completed'],
  
  },
 
},
{timestamps:true}
);

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
