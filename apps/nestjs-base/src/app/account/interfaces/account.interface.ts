import { Document } from 'mongoose';

export interface Account extends Document {
  readonly username: string;
  readonly email: string;
  readonly inviteToken: string;
  // readonly friends: Friend[];
  // readonly accessIdentifier: String,
}
