"use client";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../ui/CustomTypography";
import VideoItem from "./VideoItem";

interface VideoPlayerProps {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  videoUrl: string;
}

interface VideoSectionProps {
  featured: VideoPlayerProps;
  related: VideoPlayerProps[];
}

const VideoSection = ({ featured, related }: VideoSectionProps) => {
  return (
    <Box sx={{ p: { xs: 1, md: 4 } }}>
      <CustomTypography
        customvariant="title"
        colorvariant="textPrimary"
        sx={{
          color: "black",
          "&::before": {
            content: '"/"',
            color: "#ff6b35",
            marginRight: 1,
            fontSize: "1em",
            fontWeight: "bold",
          },
          mb: 3,
        }}
      >
        VIDEO
      </CustomTypography>

      <Grid container spacing={4}>
        {/* Main Video Player - Left Side */}
        <Grid size={{ xs: 12, md: 8 }}>
          <VideoItem
            thumbnail={featured.thumbnail}
            title={featured.title}
            videoUrl={featured.videoUrl}
            isRelated={false}
          />
        </Grid>

        {/* Related Videos - Right Side */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              maxHeight: 450,
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {related.map((video) => (
              <VideoItem key={video.id} {...video} isRelated />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoSection;
