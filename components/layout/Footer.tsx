"use client";
import { Box, Container, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f8f9fa",
        borderTop: "1px solid #e0e0e0",
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 5 },
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                Tạp chí điện tử
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.6,
                }}
              >
                © Toàn bộ bản quyền thuộc Lý Huỳnh Như
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                Tòa soạn: Ho Chi Minh City
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.6,
                  mb: 1,
                }}
              >
                Hotline: 0859.181.879
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.6,
                }}
              >
                Liên hệ: lyhuynhnhu200699@mail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
