import user from "../mongodb/models/user.js";
import Session from "../mongodb/models/sessions.js";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

const getAllusers = async (req,res) => {
    try {
        const foundusers = await user.find();
        res.send(foundusers);
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
        
};



const createuser = async (req,res) => {
    try {
        const { password, email} = req.body;
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        
        // Create a new user object based on the provided data
        const newuser = new user({
          password: hashedPassword,
          email,
        
          
        });
    
        // Save the new user to the database
        await newuser.save();
    
        res.status(201).json(newuser);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    };



const getbyusername = async (req,res) => {

    try {
        const email = req.params.email;
    
        // use parseInt if the column type is int
        const getuser = await user.findOne({ email:email});
    
        if (!getuser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json(getuser);

         } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).json({ message: "Failed to retrieve user" });
        }
};


const userlogin = async (req,res) => {
    try {
        const { username, password } = req.body;
    
        const loginuser = await user.findOne({ username });

        if (!loginuser) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
    
        
        const isPasswordValid = bcrypt.compare(password, loginuser.password);
    
       
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = uuidv4();

   
        const session = {
          userId: loginuser._id,
          tokenId: token
        };

        const newSession = new Session(session);
        await newSession.save();

    
       
        res.json({ message: 'Login successful' });
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    };


    const deleteuser = async (req,res) => {

        try{
          const email = req.params.email;
      
          const deleteuser= await user.findOneAndDelete({ email:email});
      
          if (!deleteuser){
            return res.status(404).json({message:"User not found"});
          }
      
          res.status(200).json(deleteuser);
      
        }catch(error){
          console.log("Error Deleting user",error);
          res.status(500).json({message:"failed to delete user"});
        }
      };

export{
    getAllusers,
    getbyusername,
    createuser,
    userlogin,
    deleteuser
}