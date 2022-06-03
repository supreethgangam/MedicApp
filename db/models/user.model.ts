import mongoose from 'mongoose';
import collections from '../collections';
import { User } from '../interface/user.interface';
import { Hospital } from '../interface/hospital.interface';

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    }
  },
);

schema.set('toJSON', { virtuals: true });


// export default mongoose.model<Hospital>(collections.hospitals, schema);

export = mongoose.model<User>(collections.users, schema);
