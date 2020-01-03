import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  skillsData: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model('Skills', skillsSchema);
