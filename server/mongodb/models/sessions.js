import mongoose from "mongoose";


const sessionSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tokenId: {
      type: String,
      required: true,
      unique: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: '7d' // Sessions will expire after 7 days
    }
  });
  
  const Session = mongoose.model('Session', sessionSchema);
  
  export default Session;