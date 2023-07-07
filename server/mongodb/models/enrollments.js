import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    
  },
  courseId: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required : true,
    
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
