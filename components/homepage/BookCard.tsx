"use client";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";

interface BookCardProps {
  id: number;
  title: string;
  image: string;
}

const BookCard = ({ id, title, image }: BookCardProps) => {
  return (
    <Link
      href={`/books/${id}`}
      style={{ textDecoration: "none", minWidth: "calc(20% - 14px)" }}
    >
      <Card
        variant="outlined"
        sx={{
          cursor: "pointer",
          height: "100%",
        }}
      >
        <CardMedia component="img" height={250} image={image} alt={title} />
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.3,
              color: "#333",
              fontSize: "0.9rem",
              "&:hover": {
                color: "#006BA0",
              },
              mb: 1,
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
