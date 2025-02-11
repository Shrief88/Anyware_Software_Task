import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import env from "./config/validateEnv";
import allowedOrigins from "./config/allowedOrigins";
import dbConnection from "./config/dbConnection";
import errorMiddleware from "./middlewares/error";
import quizRouter from "./routes/quiz";
import employerRouter from "./routes/employer";
import announcementRouter from "./routes/announcement";

const app: Express = express();
const port = env.PORT || 5000;

const corsOptions = {
  credentials: true,
  origin: function (origin: string, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
} as cors.CorsOptions;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
if (env.isDevelopment) {
  app.use(morgan("dev"));
}

// Test route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Anyware Software Task API" });
});

// Routes
app.use("/api/v1/quizzes", quizRouter);
app.use("/api/v1/employers", employerRouter);
app.use("/api/v1/announcements", announcementRouter);

// Global error handler
app.use(errorMiddleware);

void dbConnection();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
