"use client";
import { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import BookCard from "./BookCard";
import CustomTypography from "../ui/CustomTypography";

interface Book {
  id: number;
  title: string;
  image: string;
  author: string;
}

interface BooksSectionProps {
  books: Book[];
}

const BooksSection = ({ books }: BooksSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ px: 4, mb: 4 }}>
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
        }}
      >
        BOOKS
      </CustomTypography>

      {/* Slider Container */}
      <Box sx={{ position: "relative", my: 3 }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            border: "1px solid #e0e0e0",
            boxShadow: 2,
            width: 40,
            height: 40,
            "&:hover": {
              bgcolor: "#f5f5f5",
              boxShadow: 3,
            },
            display: { xs: "none", md: "flex" },
          }}
        >
          <ChevronLeft />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            border: "1px solid #e0e0e0",
            boxShadow: 2,
            width: 40,
            height: 40,
            "&:hover": {
              bgcolor: "#f5f5f5",
              boxShadow: 3,
            },
            display: { xs: "none", md: "flex" },
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Books Carousel */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BooksSection;
