import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  course_name: { type: String, required: true },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseDescription: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});
const Courses = mongoose.model("Courses", coursesSchema);

export default Courses;
