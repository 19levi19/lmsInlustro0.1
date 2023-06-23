import express from "express";
import Courses from "../mongodb/models/courses.js";


const createcourse = async (req, res) => {
  try {
    const {
      CourseId,
      course_name,
      courseDescription,
      instructorId,
      startDate,
      endDate,
      courseimg,
    } = req.body;

    // Create a new user object based on the provided data
    const newCourse = new Courses({
      CourseId,
      course_name,
      courseDescription,
      instructorId,
      startDate,
      endDate,
      courseimg,
    });

    // Save the new user to the database
    await newCourse.save();

    res.status(201).json(newCourse);
  } catch (err) {
    console.error(err);
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
    const courseId = req.params.id;

    // Find the course by ID
    const course = await Courses.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Update the course with new data
    course.name = req.body.name;
    course.description = req.body.description;
    // Update other fields as per your requirements

    // Save the updated course to the database
    const updatedCourse = await course.save();

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
    const courseId = req.params.id;

    // Find the course by ID
    const course = await course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error retrieving course:", error);
    res.status(500).json({ message: "Failed to retrieve course" });
  }
};
// const deletecourse = async (req, res) => {};
// const sutudentsenrolled = async (req, res) => {};
// const instructor = async (req, res) => {};

export {
  createcourse,
  getallcourse,
  updatecourse,
  getcoursebyid,
  //   deletecourse,
  //   sutudentsenrolled,
  //   instructor
};
