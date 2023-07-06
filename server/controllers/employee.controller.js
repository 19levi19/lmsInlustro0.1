import Employee from "../mongodb/models/employee.js";

const getallemployee = async (req,res) => {
    try{
        const foundemployee = await Employee.find();
        res.send(foundemployee);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const createemployee = async (req,res)=>{
    try{
        const{
            employeeId,
            firstName,
            lastName,
            email,
            department,
            position,
            salary,
             hireDate,
            isActive }= req.body;

        const newemployee= new Employee ({
            employeeId,
            firstName,
            lastName,
            email,
            department,
            position,
            salary,
             hireDate,
            isActive
        })

        await newemployee.save();
        res.status(201).json(newemployee)
    }catch(error){
        console.error('error in adding employee',error);
    res.status(500).send("Internal Server Error");
    }
};

const updateemployee = async (req, res) => {
    try {
      const employeeId = req.params.employeeId; // Assuming the name parameter is passed in the request
  
      // Find the course by name and update the fields
      const updatedemployee= await Employee.findOneAndUpdate(
        { employeeId },
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          department: req.body.department,
          psoition: req.body.position,
          salary: req.body.salary,
          hireDate:req.body.hireDate,
          isActive:req.body.isActive

          // Update other fields as per your requirements
        },
        { new: true } // To return the updated course instead of the old one
      );
  
      if (!updatedemployee) {
  
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res
        .status(200)
        .json({ message: "Employee updated successfully", emplpoyee: updatedemployee });
    } catch (error) {
      console.error("Error updating Employee:", error);
      res.status(500).json({ message: "Failed to update employee" });
    }
  };


const getemployeebyId = async (req, res) => {

    try {
      const employeeId = req.params.employeeId;
  
      // use parseInt if the column type is int
      const getemployee = await Employee.findOne({ employeeId: employeeId });
  
      if (!getemployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(getemployee);
    } catch (error) {
      console.error("Error retrieving Employee:", error);
      res.status(500).json({ message: "Failed to retrieve employee" });
    }
  };


  const deleteemployee = async (req,res) => {

    try{
      const employeeId = req.params.employeeId;
  
      const deleteemployee= await quizz.findOneAndDelete({ employeeId:employeeId});
  
      if (!deleteemployee){
        return res.status(404).json({message:"Quizz not found"});
      }
  
      res.status(200).json(deleteemployee);
  
    }catch(error){
      console.log("Error Deleting Employee",error);
      res.status(500).json({message:"failed to delete Employee"});
    }
  };

export {
    getallemployee,
    createemployee,
    updateemployee,
    getemployeebyId,
    deleteemployee
};