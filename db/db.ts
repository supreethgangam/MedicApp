import mongoose = require('mongoose');

import UserDoc = require('./models/user.model')
import HospitalDoc = require('./models/hospital.model')

export const connectionString = 'mongodb+srv://supreeth:Gangam@5@cluster0.mhn6l.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const models = { UserDoc, HospitalDoc };
