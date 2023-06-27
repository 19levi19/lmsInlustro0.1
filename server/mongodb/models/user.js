import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    password: { type: String ,require:true,unique: true },
    email: { type: String, unique: true },
  });

  const User = mongoose.model('User',usersSchema);

module.exports = User;