import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../api/axios";
import { IAnnouncement, IQuiz } from "../interfaces";
import Announcement from "../components/Announcement";
import Quiz from "../components/Quiz";

const Dashboard = () => {
  const { data: announcementData, isLoading: isLoadingAnnouncements } =
    useQuery<IAnnouncement[]>({
      queryKey: ["announcements"],
      queryFn: async () => {
        const announcement = await axiosClient.get("/announcements");
        return announcement.data;
      },
    });

  const { data: quizData, isLoading: isLoadingQuizzes } = useQuery<IQuiz[]>({
    queryKey: ["quizzes"],
    queryFn: async () => {
      const quiz = await axiosClient.get("/quizzes");
      return quiz.data;
    },
  });

  return (
    <Box px={3} mt={4}>
      <Paper
        elevation={4}
        sx={{
          py: 3,
          px: { xs: 3, md: 5 },
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            color="primary"
          >
            EXAMS TIME
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: { xs: "100%", md: "60%" }, mb: 2 }}
          >
            Here we are, Are you ready to fight? Don't worry, we prepared some
            tips to be ready for your exams.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic", mb: 2 }}
          >
            "Nothing happens until something moves" - Albert Einstein
          </Typography>
          <Button
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: 700,
            })}
          >
            View exams tips
          </Button>
        </Box>
      </Paper>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, lg: 9 }}>
          <Paper
            elevation={4}
            sx={{
              py: 2,
              px: 2,
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 2,
            }}
          >
            <Box width={"100%"}>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Announcements
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Announcements about exams
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  {isLoadingAnnouncements
                    ? [1, 2, 3].map((item) => (
                        <Announcement
                          key={item}
                          announcement={{} as IAnnouncement}
                          isLoading={isLoadingAnnouncements}
                        />
                      ))
                    : announcementData?.map((announcement) => (
                        <Announcement
                          key={announcement._id}
                          announcement={announcement}
                          isLoading={isLoadingAnnouncements}
                        />
                      ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 3 }}>
          <Paper
            elevation={4}
            sx={{
              py: 2,
              px: 2,
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  What is due
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exams are due soon
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {isLoadingQuizzes
                  ? [1, 2, 3].map((item) => (
                      <Quiz
                        key={item}
                        quiz={{} as IQuiz}
                        isLoading={isLoadingQuizzes}
                      />
                    ))
                  : quizData?.map((quiz) => (
                      <Quiz
                        key={quiz._id}
                        quiz={quiz}
                        isLoading={isLoadingQuizzes}
                      />
                    ))}
              </Box>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
