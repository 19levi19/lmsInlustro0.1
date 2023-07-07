import mongoose from "mongoose";

const relationSchema = new mongoose.Schema({
     userId :{ type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        path: '_id',
        required: true},
     enrollmentId: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        path:'_id',
        required: true}
  },
  {timestamps:true});

  const relation = mongoose.model('relation',relationSchema);