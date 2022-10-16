import {
  Box,
  Button,
  Typography,
  Divider
} from '@mui/material';
import { useRouter } from 'next/router';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

export const ResultToolbar = ({ name, datetime, email }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#2A5f8B',
        m: 0
      }}>
      <Box sx={{ mx: 1 }}>

        <Button
          sx={{ color: '#FFF' }}
          disableRipple
          variant="text"
          startIcon={<ArrowBackIosNewRounded />}
          onClick={() => router.back()}
        >
          Back to List
        </Button>
      </Box>
      <Box sx={{
        mr: 5,
        display: 'flex',
        flexDirection: 'row',
        '& hr': {
          borderRightWidth: 2,
          mx: 2,
          my: 0.5,
        },
      }}>
        <Typography color='#FFF'>
          {name ?? '-'}
        </Typography>
        <Divider orientation='vertical' flexItem />
        <Typography color='#FFF'>
          Date: {datetime ?? '-'}
        </Typography >
        <Divider orientation='vertical' flexItem />
        <Typography color='#FFF'>
          Email: {email ?? '-'}
        </Typography>
      </Box>
    </Box>
  );
}
