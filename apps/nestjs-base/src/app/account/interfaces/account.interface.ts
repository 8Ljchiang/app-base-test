import { Document } from 'mongoose';

export interface Account extends Document {
  readonly displayIdentifier: string;
  readonly email: string;
  readonly authToken: string;
  readonly role: string;
  readonly inviteToken: string;
  // readonly friends: Friend[];
  // readonly accessIdentifier: String,
}
