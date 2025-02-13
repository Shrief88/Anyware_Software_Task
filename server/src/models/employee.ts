import mongoose, { Schema } from "mongoose";

enum Position {
  Instructor = 'Instructor',
  Employee = 'Employee'
}

enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export interface IEmployee extends mongoose.Document {
  firstName: string;
  lastName: string;
  position: Position;
  image: string;
  gender: Gender;
  updatedAt: Date;
  createdAt: Date;
}

const employerSchema = new Schema<IEmployee>({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    enum: Object.values(Position),
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: Object.values(Gender),
  },
}, {
  timestamps: true
});

export const EmployeeModel = mongoose.model<IEmployee>(
  "Employee",
  employerSchema
);
