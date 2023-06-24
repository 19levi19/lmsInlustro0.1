
import { get } from "mongoose";
import Courses from "../mongodb/models/courses.js";


const createcourse = async (req, res) => {
  try {
    const {
      courseId,
      courseName,
      courseDescription,
      startDate,
      endDate,
      courseImg

    } = req.body;

    // Create a new user object based on the provided data
    const newCourse = new Courses({
      courseId,
      courseName,
      courseDescription,
      startDate,
      endDate,
      courseImg,
    });

    // Save the new user to the database
    await newCourse.save();

    res.status(201).json(newCourse);
  } catch (err) {
    console.error('error in creating course',err);
    res.status(500).send("Internal Server Error");
  }
};

const getallcourse = async (req, res) => {
  try {
    const foundCourses = await Courses.find();
    res.send(foundCourses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const updatecourse = async (req, res) => {
  try {
    const courseId = req.params.courseId; // Assuming the name parameter is passed in the request

    // Find the course by name and update the fields
    const updatedCourse = await Courses.findOneAndUpdate(
      {courseId},
      {
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        courseImg: req.body.courseImg
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


const getcoursebyid = async (req, res) => {
  
  try {
    
    const Id = req.params.courseId;
    // Find the course by ID
    const getcourse = await Courses.findOne({ Id: Id });

    if (!getcourse) {

      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(getcourse);
  } catch (error) {
    console.error("Error retrieving course:", error);
    res.status(500).json({ message: "Failed to retrieve course" });
  }
};

export {
  createcourse,
  getallcourse,
   updatecourse,
  getcoursebyid,
  
};
