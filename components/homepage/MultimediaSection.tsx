"use client";
import Link from "next/link";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CustomTypography from "../ui/CustomTypography";
import ImageBox from "../ui/ImageBox";

interface MultimediaContent {
  featured: {
    id: number;
    title: string;
    summary: string;
    image: string;
  };
  grid: {
    id: number;
    title: string;
    image: string;
  }[];
}

interface MultimediaSectionProps {
  multiMedia: MultimediaContent;
}

const tabs = ["VIDEO", "PODCAST", "LONGFORM", "STORY", "QUIZZ"];

const MultimediaSection = ({ multiMedia }: MultimediaSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#ffde76",
        borderRadius: 2,
        p: 4,
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <CustomTypography
          customvariant="title"
          colorvariant="textPrimary"
          sx={{
            color: "black",
            "&::before": {
              content: '"/"',
              color: theme.palette.primary.main,
              marginRight: 1,
              fontSize: "1em",
              fontWeight: "bold",
            },
          }}
        >
          MULTIMEDIA
        </CustomTypography>

        {!isMobile &&
          tabs.map((tab, index) => (
            <CustomTypography
              key={index}
              customvariant="smallTitle"
              colorvariant="textPrimary"
              sx={{
                ml: 5,
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={() => {}}
            >
              {tab}
            </CustomTypography>
          ))}
      </Box>

      {/* Content Grid */}
      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Link
            href={`/news/${multiMedia.featured.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box>
              <ImageBox
                src={multiMedia.featured.image}
                alt={multiMedia.featured.title}
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 350, md: 300 },
                  mb: 2,
                }}
              />

              <CustomTypography
                customvariant="title"
                colorvariant="textPrimary"
                sx={{
                  mb: 1,
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <ImageIcon sx={{ color: "#666", fontSize: 20, mr: 1 }} />
                {multiMedia.featured.title}
              </CustomTypography>

              <CustomTypography
                customvariant="smallTitle"
                colorvariant="secondary"
                sx={{
                  fontWeight: "normal",
                }}
              >
                {multiMedia.featured.summary}
              </CustomTypography>
            </Box>
          </Link>
        </Grid>

        {/* Side Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {multiMedia.grid.map((item) => (
              <Grid size={6} key={item.id}>
                <Link
                  href={`/news/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box>
                    <ImageBox
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: { xs: 100, md: 150 },
                        mb: 1,
                      }}
                    />

                    <CustomTypography
                      customvariant="smallTitle"
                      colorvariant="textPrimary"
                      maxLines={3}
                      sx={{
                        "&:hover": {
                          color: theme.palette.secondary.main,
                        },
                      }}
                    >
                      <ImageIcon sx={{ color: "#666", fontSize: 16, mr: 1 }} />
                      {item.title}
                    </CustomTypography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MultimediaSection;
