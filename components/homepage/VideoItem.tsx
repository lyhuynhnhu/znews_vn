'use client';
import { Box } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import CustomTypography from '@/components/ui/CustomTypography';
import ImageBox from '@/components/ui/ImageBox';

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  videoUrl: string;
  category?: string;
  isRelated: boolean;
}

const VideoItem = ({ thumbnail, title, videoUrl, category, isRelated }: VideoPlayerProps) => {
  return isRelated ? (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
        cursor: 'pointer'
      }}
    >
      <ImageBox
        src={thumbnail}
        alt={title}
        sx={{
          width: 100,
          height: 70,
          flexShrink: 0,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            width: 28,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PlayArrow sx={{ color: 'white', fontSize: 16 }} />
        </Box>
      </ImageBox>
      <Box sx={{ flex: 1 }}>
        <CustomTypography customvariant='subTitle' colorvariant='textPrimary' maxLines={3}>
          {title}
        </CustomTypography>
        <CustomTypography
          customvariant='subTitle'
          colorvariant='textSecondary'
          maxLines={1}
          sx={{
            mt: 1,
            fontSize: '0.7rem'
          }}
        >
          {category}
        </CustomTypography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 400 },
        cursor: 'pointer',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <video width='100%' height='100%' autoPlay muted controls poster={thumbnail} style={{ objectFit: 'cover' }}>
        {videoUrl && <source src={videoUrl} type='video/mp4' />}
      </video>
    </Box>
  );
};

export default VideoItem;
