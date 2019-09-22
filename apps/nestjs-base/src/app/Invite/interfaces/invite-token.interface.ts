import { Document } from 'mongoose';

export interface InviteToken extends Document {
  // readonly createdBy: string;
  readonly token: string;
  // readonly assignedTo?: string | null;
}
