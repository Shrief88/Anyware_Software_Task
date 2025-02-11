import mongoose, { Schema } from "mongoose";

export interface IQuiz extends mongoose.Document {
  title: string;
  course: string;
  topic: string;
  due_to_day: string;
  due_to_hour: string;
}

export const quizSchema = new Schema<IQuiz>(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    due_to_day: {
      type: String,
      required: true,
      trim: true,
    },
    due_to_hour: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const QuizModel = mongoose.model<IQuiz>("Quiz", quizSchema);
