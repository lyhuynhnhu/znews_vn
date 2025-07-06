'use client';
import { Box, Card, Divider } from '@mui/material';
import Link from 'next/link';
import { NewsFields } from '@/constants/news';
import CustomTypography from '@/components/ui/CustomTypography';
import ImageBox from '@/components/ui/ImageBox';

interface BusinessCardProps extends NewsFields {
  size: 'large' | 'medium' | 'small';
  isLast?: boolean;
}

const BusinessCard = ({ id, title, summary, image, size, isLast }: BusinessCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: 'none' }}>
      {size === 'large' && <LargeBusinessCard title={title} summary={summary} image={image} />}
      {size === 'medium' && <MediumBusinessCard title={title} image={image} />}
      {size === 'small' && <SmallBusinessCard title={title} image={image} isLast={isLast} />}
    </Link>
  );
};

const LargeBusinessCard = ({ title, summary, image }: Pick<BusinessCardProps, 'title' | 'summary' | 'image'>) => (
  <>
    <ImageBox src={image} alt={title} />

    <CustomTypography
      customvariant='title'
      colorvariant='textPrimary'
      sx={{
        py: 2,
        '&:hover': {
          color: '#006BA0'
        }
      }}
    >
      {title}
    </CustomTypography>

    {summary && (
      <CustomTypography customvariant='summary' colorvariant='textSecondary'>
        {summary}
      </CustomTypography>
    )}
  </>
);

const MediumBusinessCard = ({ title, image }: Pick<BusinessCardProps, 'title' | 'image'>) => (
  <Card
    sx={{
      cursor: 'pointer',
      border: 'none',
      boxShadow: 'none',
      height: '100%'
    }}
  >
    <ImageBox
      src={image}
      alt={title}
      sx={{
        mb: 1
      }}
    />
    <CustomTypography
      customvariant='mediumTitle'
      colorvariant='textPrimary'
      maxLines={{ xs: 'auto', sm: 3 }}
      sx={{
        pt: 1,
        '&:hover': {
          color: '#006BA0'
        }
      }}
    >
      {title}
    </CustomTypography>
  </Card>
);

const SmallBusinessCard = ({ title, image, isLast }: Pick<BusinessCardProps, 'title' | 'image' | 'isLast'>) => (
  <>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f5f5f5',
          borderRadius: 1,
          transition: 'all 0.3s ease'
        },
        px: 1
      }}
    >
      <CustomTypography
        customvariant='smallTitle'
        colorvariant='textPrimary'
        maxLines={3}
        sx={{
          flex: 1,
          '&:hover': {
            color: '#006BA0'
          }
        }}
      >
        {title}
      </CustomTypography>
      <ImageBox
        src={image}
        alt={title}
        sx={{
          width: 70,
          height: 70
        }}
      />
    </Box>
    {!isLast && <Divider sx={{ mt: 2 }} />}
  </>
);

export default BusinessCard;
