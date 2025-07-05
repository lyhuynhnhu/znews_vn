"use client";
import { Typography, Box } from "@mui/material";
import Link from "next/link";

interface NewsCardProps {
  id: number;
  title: string;
  summary?: string;
  image: string;
  category?: string;
  publishedAt?: string;
  featured?: boolean;
}

const NewsVerticalCard = ({
  id,
  title,
  summary,
  image,
  featured = false,
}: NewsCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: featured ? 320 : 180,
            objectFit: "cover",
            borderRadius: 1,
            flexShrink: 0,
          }}
        />

        <Typography
          variant={featured ? "h5" : "inherit"}
          component="h3"
          sx={{
            color: "#333",
            "&:hover": {
              color: "#006BA0",
            },
            fontWeight: "bold",
            lineHeight: 1.3,
            mt: featured ? 2 : 1,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: featured ? 3 : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        {featured && summary && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {summary}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default NewsVerticalCard;
