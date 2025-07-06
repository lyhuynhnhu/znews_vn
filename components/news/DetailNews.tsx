'use client';
import { Box, Chip, Container } from '@mui/material';
import { NewsFields } from '@/constants/news';
import Header from '@/components/layout/Header';
import ImageBox from '@/components/ui/ImageBox';
import CustomTypography from '@/components/ui/CustomTypography';

interface DetailNewsProps {
  news: NewsFields;
}

const DetailNews = ({ news }: DetailNewsProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='md' sx={{ py: 4, mt: '70px' }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={news.category}
            sx={{
              bgcolor: '#ff6b35',
              color: 'white',
              mb: 2
            }}
          />
        </Box>

        <CustomTypography customvariant='title' sx={{ fontSize: '2.5rem', mb: 3 }}>
          {news.title}
        </CustomTypography>
        <CustomTypography colorvariant='secondary' customvariant='summary' sx={{ mb: 2 }}>
          {news.summary}
        </CustomTypography>

        <ImageBox
          src={news.image}
          alt={news.title}
          sx={{
            width: '100%',
            height: 'auto',
            mb: 3
          }}
        />

        {news.details?.map((detail: string, index: number) => (
          <CustomTypography key={index} customvariant='summary' sx={{ lineHeight: 1.8, mb: 2 }}>
            {detail}
          </CustomTypography>
        ))}
      </Container>
    </>
  );
};

export default DetailNews;
