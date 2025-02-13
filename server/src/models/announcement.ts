import mongoose, { Schema } from "mongoose";

export interface IAnnouncement extends mongoose.Document {
  content: string;
  about: string;
  employee: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const announcementSchema = new Schema<IAnnouncement>(
  {
    content: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
      trim: true,
    },
    about: {
      type: String,
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
  },
  {
    timestamps: true,
  }
);

export const AnnouncementModel = mongoose.model<IAnnouncement>(
  "Announcement",
  announcementSchema
);
