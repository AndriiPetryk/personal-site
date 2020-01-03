import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  universityName: {
    type: String,
    required: true
  },
  scienceDegree: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model('Education', educationSchema);
