import Enrollment from "../mongodb/models/enrollments.js";

const createEnrollment = async (req, res) => {
    try {
      const { enrollmentId,studentId, courseId, enrollmentDate, enrollmentStatus } = req.body;
  
      // Create a new enrollment object
      const enrollment = new Enrollment({
        enrollmentId,
        studentId,
        courseId,
        enrollmentDate,
        enrollmentStatus,
      });
  
      // Save the enrollment in the database
      const savedEnrollment = await enrollment.save();
  
      res.json(savedEnrollment);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Controller function to get all enrollments
  const getAllEnrollments = async (req, res) => {
    try {
      const enrollments = await Enrollment.find();
      res.json(enrollments);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
 
const getenrollmentbyId = async (req, res) => {

  try {
    const enrollmentId = req.params.enrollmentId;

    // use parseInt if the column type is int
    const getenrollment = await Enrollment.findOne({ enrollmentId: enrollmentId });

    if (!getenrollment) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(getenrollment);
  } catch (error) {
    console.error("Error retrieving enrollment :", error);
    res.status(500).json({ message: "Failed to retrieve enrollment" });
  }
};
  
  // Controller function to update an enrollment
  const updateEnrollment = async (req, res) => {
    try {
      const enrollmentId = req.params.enrollmentId; // Assuming the name parameter is passed in the request
  
      // Find the course by name and update the fields
      const updatedenrollment = await Enrollment.findOneAndUpdate(
        { enrollmentId },
        {
          courseId: req.body.courseId,
          studentId: req.body.studentId,
          startDate: req.body.startDate,
          enrollmentDate: req.body.enrollementDate,
          enrollmentStatus: req.body.enrollmentStatus,
          // Update other fields as per your requirements
        },
        { new: true } // To return the updated course instead of the old one
      );
  
      if (!updatedenrollment) {
  
        return res.status(404).json({ message: "enrollment not found" });
      }
  
      res
        .status(200)
        .json({ message: "Enrollment updated successfully", enrollment: updatedenrollment });
    } catch (error) {
      console.error("Error updating enrollment:", error);
      res.status(500).json({ message: "Failed to update Enrollment" });
    }
  };
  
  // controller function to delete an enrollment 
  const deleteEnrollment = async (req,res) => {

    try{
      const enrollmentId = req.params.enrollmentId;
  
      const deleteenrollment= await Enrollmentx.findOneAndDelete({enrollmentId: enrollmentId});
  
      if (!deleteenrollment){
        return res.status(404).json({message:"Course not found"});
      }
  
      res.status(200).json(deleteenrollment);
  
    }catch(error){
      console.log("Error Deleting enrollment",error);
      res.status(500).json({message:"failed to delete enrollment "});
    }
  };
  
  
  
  export {
    createEnrollment,
    getAllEnrollments,
    getenrollmentbyId,
    updateEnrollment,
    deleteEnrollment,
  };