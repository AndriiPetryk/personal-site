import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  email: {
    type: String,
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

export default mongoose.model('About', aboutSchema);
