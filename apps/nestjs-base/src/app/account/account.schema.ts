import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  authToken: String,
  accountRole: String,
});