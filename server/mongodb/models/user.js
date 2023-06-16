const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: { type: String,require:true, unique: true },
    password: { type: String ,require:true,unique: true },
    email: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    Role: { type: String, enum: ['student', 'instructor', 'admin'] },
    profile: { type: String }
  });

  const User = mongoose.model('User',usersSchema);

module.exports = User;