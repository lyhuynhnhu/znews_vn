"use client";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import CustomTypography from "../ui/CustomTypography";

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
          <CustomTypography
            customvariant="smallTitle"
            colorvariant="textPrimary"
            sx={{
              "&:hover": {
                color: "#006BA0",
              },
              mb: 1,
            }}
          >
            {title}
          </CustomTypography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
