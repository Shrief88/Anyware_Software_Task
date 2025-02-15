import { Box, Button, Grid2, Skeleton, Typography } from "@mui/material";
import { IQuiz } from "../interfaces";

type Props = {
  quiz: IQuiz;
  isLoading: boolean;
};

const Quiz = ({ quiz, isLoading }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 0.5, flexDirection: "column" }}>
      {isLoading ? (
        <Skeleton
          data-testid="avatar-skeleton"
          variant="rectangular"
          width={100}
          height={10}
        />
      ) : (
        <Typography sx={{ fontSize: 14 }} variant="body1" fontWeight={700}>
          {quiz.title}
        </Typography>
      )}

      <Grid2 container>
        <Grid2 size={{ xs: 3, md: 2, lg: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Course:
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 9, md: 10, lg: 9 }}>
          {isLoading ? (
            <Skeleton
              data-testid="course-skeleton"
              variant="rectangular"
              width={100}
              height={10}
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {quiz.course}
            </Typography>
          )}
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 size={{ xs: 3, md: 2, lg: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Topic:
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 9, md: 10, lg: 9 }}>
          {isLoading ? (
            <Skeleton
              data-testid="topic-skeleton"
              variant="rectangular"
              width={100}
              height={10}
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {quiz.topic}
            </Typography>
          )}
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 size={{ xs: 3, md: 2, lg: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Due to:
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 9, md: 10, lg: 9 }}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={100} height={10} />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {quiz.due_to_day} - {quiz.due_to_hour} {Number(quiz.due_to_hour.split(":")[0]) > 12 ? "PM" : "AM"}
            </Typography>
          )}
        </Grid2>
      </Grid2>
      {isLoading ? (
        <Skeleton variant="rectangular" width={300} height={10} />
      ) : (
        <Button variant="outlined">
          <Typography sx={{ fontSize: 14 }} variant="body1" fontWeight={700}>
            Start Quiz
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default Quiz;
