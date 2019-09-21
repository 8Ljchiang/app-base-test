import * as mongoose from 'mongoose';

export const InviteTokenSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  assignedTo: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  token: String,
});
