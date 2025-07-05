"use client";
import Link from "next/link";
import { Box, Typography, Grid } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CustomTypography from "../ui/CustomTypography";

const multimediaContent = {
  VIDEO: {
    featured: {
      id: 1,
      title:
        "Trên tay Pura 80 Ultra: smartphone Huawei đắt hơn iPhone 16 Pro Max",
      summary:
        "Mặt tiền ở thị trường toàn cầu, Huawei vẫn là thế lực ở Trung Quốc. Không có Android hay chip đời mới, hãng này bán chiếc Pura 80 Ultra đắt hơn cả iPhone 16 Pro Max.",
      image: "/placeholder.svg?height=300&width=500",
    },
    grid: [
      {
        id: 2,
        title: "Sơn Tùng cơ bắp khó nhận ra ở tuổi 31",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📹",
      },
      {
        id: 3,
        title: "Mần nhận cảnh cá voi săn mồi dưới ánh bình minh ở Gia Lai",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📹",
      },
      {
        id: 4,
        title: "Khoảnh khắc xúc động ở FIFA Club World Cup",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📹",
      },
      {
        id: 5,
        title: "Thí sinh bất xa, hát mưa, giành suất vào đại học",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📹",
      },
    ],
  },
  PODCAST: {
    featured: {
      id: 6,
      title: "Podcast kinh tế tuần này: Thị trường chứng khoán biến động",
      summary:
        "Phân tích sâu về những diễn biến mới nhất của thị trường chứng khoán Việt Nam và tác động đến nền kinh tế.",
      image: "/placeholder.svg?height=300&width=500",
    },
    grid: [
      {
        id: 7,
        title: "Chuyện công nghệ: AI và tương lai",
        image: "/placeholder.svg?height=200&width=300",
        icon: "🎧",
      },
      {
        id: 8,
        title: "Tâm sự đêm khuya với MC nổi tiếng",
        image: "/placeholder.svg?height=200&width=300",
        icon: "🎧",
      },
      {
        id: 9,
        title: "Khởi nghiệp từ con số 0",
        image: "/placeholder.svg?height=200&width=300",
        icon: "🎧",
      },
      {
        id: 10,
        title: "Sức khỏe tinh thần trong thời đại số",
        image: "/placeholder.svg?height=200&width=300",
        icon: "🎧",
      },
    ],
  },
  LONGFORM: {
    featured: {
      id: 11,
      title: "Hành trình 30 năm xây dựng thương hiệu Việt",
      summary:
        "Câu chuyện về những doanh nghiệp Việt Nam đã vượt qua khó khăn để trở thành thương hiệu quốc tế.",
      image: "/placeholder.svg?height=300&width=500",
    },
    grid: [
      {
        id: 12,
        title: "Bí mật đằng sau thành công của startup",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📄",
      },
      {
        id: 13,
        title: "Cuộc sống sau đại dịch",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📄",
      },
      {
        id: 14,
        title: "Tương lai của giáo dục Việt Nam",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📄",
      },
      {
        id: 15,
        title: "Môi trường và phát triển bền vững",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📄",
      },
    ],
  },
  STORY: {
    featured: {
      id: 16,
      title: "Câu chuyện về người thầy vùng cao",
      summary:
        "Hành trình 20 năm cống hiến của cô giáo miền núi, mang ánh sáng tri thức đến với trẻ em vùng khó khăn.",
      image: "/placeholder.svg?height=300&width=500",
    },
    grid: [
      {
        id: 17,
        title: "Người mẹ đơn thân nuôi 5 con thành tài",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📖",
      },
      {
        id: 18,
        title: "Chàng trai khuyết tật chinh phục Everest",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📖",
      },
      {
        id: 19,
        title: "Làng nghề truyền thống giữa lòng Hà Nội",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📖",
      },
      {
        id: 20,
        title: "Hành trình tìm lại gia đình sau 30 năm",
        image: "/placeholder.svg?height=200&width=300",
        icon: "📖",
      },
    ],
  },
  QUIZZ: {
    featured: {
      id: 21,
      title: "Thử thách kiến thức lịch sử Việt Nam",
      summary:
        "Bạn có thực sự hiểu về lịch sử dân tộc? Hãy thử sức với những câu hỏi thú vị về các sự kiện lịch sử quan trọng.",
      image: "/placeholder.svg?height=300&width=500",
    },
    grid: [
      {
        id: 22,
        title: "Quiz về văn hóa các dân tộc Việt Nam",
        image: "/placeholder.svg?height=200&width=300",
        icon: "❓",
      },
      {
        id: 23,
        title: "Thử thách IQ với toán học",
        image: "/placeholder.svg?height=200&width=300",
        icon: "❓",
      },
      {
        id: 24,
        title: "Bạn biết gì về khoa học tự nhiên?",
        image: "/placeholder.svg?height=200&width=300",
        icon: "❓",
      },
      {
        id: 25,
        title: "Quiz tiếng Anh cho người Việt",
        image: "/placeholder.svg?height=200&width=300",
        icon: "❓",
      },
    ],
  },
};

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
    icon: string;
  }[];
}

interface MultimediaSectionProps {
  multiMedia: MultimediaContent;
}
const MultimediaSection = ({ multiMedia }: MultimediaSectionProps) => {
  const tabs = ["VIDEO", "PODCAST", "LONGFORM", "STORY", "QUIZZ"];

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
              color: "#ff6b35",
              marginRight: 1,
              fontSize: "1em",
              fontWeight: "bold",
            },
          }}
        >
          MULTIMEDIA
        </CustomTypography>

        {tabs.map((tab, index) => (
          <CustomTypography
            key={index}
            customvariant="smallTitle"
            colorvariant="textPrimary"
            sx={{
              ml: 5,
              cursor: "pointer",
              "&:hover": {
                color: "#006BA0",
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
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Link
            href={`/news/${multiMedia.featured.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box
                component="img"
                src={multiMedia.featured.image}
                alt={multiMedia.featured.title}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  mb: 1,
                }}
              >
                <ImageIcon sx={{ color: "#666", fontSize: 20, mt: 0.5 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    color: "#333",
                    fontSize: "1.3rem",
                    fontStyle: "",
                  }}
                >
                  {multiMedia.featured.title}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  lineHeight: 1.5,
                  fontSize: "0.95rem",
                }}
              >
                {multiMedia.featured.summary}
              </Typography>
            </Box>
          </Link>
        </Grid>

        {/* Right Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {multiMedia.grid.map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                <Link
                  href={`/news/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: 150,
                        objectFit: "cover",
                        borderRadius: 1,
                        mb: 1,
                      }}
                    />

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <ImageIcon sx={{ color: "#666", fontSize: 16 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          lineHeight: 1.3,
                          color: "#333",
                          fontSize: "0.9rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
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
