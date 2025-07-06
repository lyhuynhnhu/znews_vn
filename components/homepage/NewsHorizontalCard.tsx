'use client';
import { Box, Divider } from '@mui/material';
import Link from 'next/link';
import { NewsFields } from '@/constants/news';
import CustomTypography from '@/components/ui/CustomTypography';
import ImageBox from '@/components/ui/ImageBox';

interface MainNewsCardProps extends NewsFields {
  isLast?: boolean;
}

const NewsHorizontalCard = ({ id, title, summary, image, isLast }: MainNewsCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          cursor: 'pointer'
        }}
      >
        <ImageBox
          src={image}
          alt={title}
          sx={{
            width: '35%',
            mr: 2
          }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <CustomTypography
            customvariant={summary ? 'title' : 'smallTitle'}
            colorvariant='textPrimary'
            sx={{
              mb: 1,
              '&:hover': {
                color: '#006BA0'
              }
            }}
          >
            {title}
          </CustomTypography>

          {summary && (
            <CustomTypography
              customvariant='smallTitle'
              colorvariant='textSecondary'
              maxLines={3}
              display={{ xs: 'none', sm: 'block' }}
              sx={{ fontWeight: 'normal' }}
            >
              {summary}
            </CustomTypography>
          )}
        </Box>
      </Box>
      {!isLast && <Divider sx={{ my: 2 }} />}
    </Link>
  );
};

export default NewsHorizontalCard;
