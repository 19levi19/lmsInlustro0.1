import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    password: { type: String ,require:true,unique: true },
    email: { 
      type: String, 
      unique: true 
    },
  },
  {timestamps:true});

  const user = mongoose.model('user',usersSchema);

export default user;