import { Container, Typography, Box, Chip } from "@mui/material";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import BASE_URL from "@/constants/host";

async function getNewsById(id: string) {
  const res = await fetch(`${BASE_URL}/api/news/${id}`, { cache: "no-store" });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const article = await getNewsById(id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={article.category}
            sx={{
              bgcolor: "#ff6b35",
              color: "white",
              mb: 2,
            }}
          />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          {article.title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {article.summary}
        </Typography>

        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{
            width: "100%",
            height: "auto",
            mb: 3,
            borderRadius: 1,
          }}
        />

        {article.details?.map((detail: string, index: number) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ lineHeight: 1.8, mb: 2 }}
          >
            {detail}
          </Typography>
        ))}
      </Container>
    </>
  );
};

export default NewsDetailPage;
