import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography, Divider
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import { useRouter } from 'next/router';
import { useDialog } from '../dialogs/context';
import { useState } from 'react';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

export const CustomerToolbar = ({ name, datetime, email }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#0038A4',
        m: 0
      }}
    >
      <Box sx={{ m: 1 }}>

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
          Email {email ?? '-'}
        </Typography>
      </Box>
    </Box>
  );
}
