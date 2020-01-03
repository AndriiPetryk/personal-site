import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const interestsSchema = new Schema({
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

export default mongoose.model('Interests', interestsSchema);
