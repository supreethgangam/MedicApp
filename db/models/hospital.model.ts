import mongoose from 'mongoose';
import collections from '../collections';
import { Hospital } from '../interface/hospital.interface';

const schema = new mongoose.Schema(
    {
      Name: {
        type: String,
      },
      address: {
        type: String,
        unique: true
      },
      rating: {
        type: String,
      },
      contact: {
        type: String,
        unique: true
      }
    },
  );
  
schema.set('toJSON', { virtuals: true });
  
export = mongoose.model<Hospital>(collections.hospitals, schema);
  
  