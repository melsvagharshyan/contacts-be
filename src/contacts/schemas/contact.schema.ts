import { Schema, Document } from 'mongoose';

export const ContactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactDescription: { type: String, required: true },
});

// This is the interface for TypeScript to check data structure
export interface Contact extends Document {
  firstName: string;
  lastName: string;
  contactDescription: string;
}
