import mongoose from "mongoose";
import { EmployerModel } from "../models/employer";
import { AnnouncementModel } from "../models/announcement";
import { QuizModel } from "../models/quiz";
import env from "../config/validateEnv";

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(env.DATABASE_URL);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Promise.all([
      EmployerModel.deleteMany({}),
      AnnouncementModel.deleteMany({}),
      QuizModel.deleteMany({}),
    ]);
    console.log("Cleared existing data");

    // Create employers
    const employers = await EmployerModel.create([
      {
        firstName: "John",
        lastName: "Doe",
        position: "Instructor",
        image: "john-doe.jpg",
        gender: "Male",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        position: "Employee",
        image: "jane-smith.jpg",
        gender: "Female",
      },
      {
        firstName: "Robert",
        lastName: "Johnson",
        position: "Instructor",
        image: "robert-johnson.jpg",
        gender: "Male",
      },
    ]);
    console.log("Created employers");

    // Create announcements
    await AnnouncementModel.create([
      {
        content: "Welcome to our new learning platform! We are excited to introduce you to our state-of-the-art educational system designed to enhance your learning experience. The platform features interactive courses, real-time progress tracking, and personalized learning paths. Take some time to explore the various features and don't hesitate to reach out if you need any assistance.",
        about: "Platform Launch",
        employer: employers[0]._id,
      },
      {
        content: "We are thrilled to announce the launch of new web development courses! Our curriculum now includes comprehensive modules on React.js, Node.js, and MongoDB. These courses are designed with hands-on projects and real-world applications. Early enrollment is now open with special discounts for existing students. Check out the course catalog for detailed syllabus and learning outcomes.",
        about: "Course Update",
        employer: employers[0]._id,
      },
      {
        content: "Important notice regarding system maintenance: Our platform will undergo scheduled maintenance this weekend to improve performance and add new features. The maintenance window is scheduled for Saturday, 15th February, from 2 AM to 6 AM EST. During this time, the platform will be temporarily unavailable. We apologize for any inconvenience and appreciate your understanding as we work to enhance your learning experience.",
        about: "Maintenance",
        employer: employers[1]._id,
      },
      {
        content: "Exciting news! We're organizing a Web Development Workshop next month. This hands-on workshop will cover the latest trends in frontend and backend development, including modern JavaScript frameworks, API design, and deployment strategies. The workshop will be conducted by industry experts with years of practical experience. Limited seats available - register now to secure your spot!",
        about: "Workshop Announcement",
        employer: employers[2]._id,
      },
    ]);
    console.log("Created announcements");

    // Create quizzes
    await QuizModel.create([
      {
        title: "JavaScript Fundamentals Quiz",
        course: "Web Development",
        topic: "JavaScript",
        due_to_day: "2025-02-18",  // One week from now
        due_to_hour: "14:00",
      },
      {
        title: "React Basics Assessment",
        course: "Frontend Development",
        topic: "React",
        due_to_day: "2025-02-20",
        due_to_hour: "15:30",
      },
      {
        title: "Database Design Quiz",
        course: "Backend Development",
        topic: "Databases",
        due_to_day: "2025-02-25",
        due_to_hour: "16:00",
      },
    ]);
    console.log("Created quizzes");

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
