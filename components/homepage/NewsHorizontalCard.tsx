"use client";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";

interface MainNewsCardProps {
  id: number;
  title: string;
  summary?: string;
  image: string;
  isLast?: boolean;
}

const NewsHorizontalCard = ({
  id,
  title,
  summary,
  image,
  isLast,
}: MainNewsCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          pb: 2,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "30%",
            height: "auto",
            objectFit: "cover",
            borderRadius: 1,
            mr: 2,
            flexShrink: 0,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography
            variant="h6"
            component="text"
            sx={{
              fontWeight: "600",
              fontSize: "0.9rem",
              lineHeight: 1.3,
              color: "#333",
              "&:hover": {
                color: "#006BA0",
              },
              mb: 1,
            }}
          >
            {title}
          </Typography>

          {summary && (
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                lineHeight: 1.5,
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
      </Box>
      {!isLast && <Divider />}
    </Link>
  );
};

export default NewsHorizontalCard;
