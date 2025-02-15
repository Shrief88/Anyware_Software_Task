import { Avatar, Box, Typography, Grid2, Skeleton } from "@mui/material";
import { IAnnouncement } from "../interfaces";

interface Props {
  announcement: IAnnouncement;
  isLoading: boolean;
}

const Announcement = ({ announcement, isLoading }: Props) => {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, lg: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isLoading ? (
            <Skeleton
              data-testid="avatar-skeleton"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt={
                announcement.employee.firstName +
                " " +
                announcement.employee.lastName
              }
              src={announcement.employee.image}
            />
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {isLoading ? (
              <>
                <Skeleton
                  data-testid="name-skeleton"
                  variant="rectangular"
                  width={100}
                  height={10}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  data-testid="subtitle-skeleton"
                  variant="rectangular"
                  width={100}
                  height={10}
                />
              </>
            ) : (
              <>
                <Typography variant="body1" fontWeight={700}>
                  {announcement.employee.firstName +
                    " " +
                    announcement.employee.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {announcement.about}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 9.5 }}>
        <Box
          sx={{
            borderLeft: { lg: "2px solid #eee" },
            px: { lg: 2 },
            py: { xs: 2, lg: 0 },
          }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" width={"100%"} height={60} />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {announcement.content}
            </Typography>
          )}
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Announcement;
