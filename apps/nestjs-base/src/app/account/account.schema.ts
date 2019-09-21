import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  authToken: String,
  role: String,
  displayIdentifier: String,
  email: String,
  password: String,
  inviteToken: String
});
