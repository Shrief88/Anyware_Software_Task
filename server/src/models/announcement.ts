import mongoose, { Schema } from "mongoose";

export interface IAnnouncement extends mongoose.Document {
  content: string;
  about: string;
  employer: Schema.Types.ObjectId;
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
    employer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employer",
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
