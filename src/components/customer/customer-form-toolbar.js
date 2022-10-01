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

export const CustomerFormToolbar = ({ isNew }) => {
  const router = useRouter();
  const { showConfirmDialog } = useDialog();

  const cancelForm = () => {
    showConfirmDialog({
      title: `Cancel ${isNew ? 'Adding' : 'Editing'} Customer`,
      message: 'Are you sure to exit?',
      onConfirm: router.back
    })
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        mx: 3,
        my: 2,
      }}
    >
      <Typography variant='h5'>
        {isNew ? 'Add Customer' : 'Edit Customer'}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Button
          variant='contained'
          color='error'
          sx={{ width: 100 }}
          onClick={cancelForm}
        >
          Cancel
        </Button>
        <Button variant='contained'
          color='success'
          sx={{ width: 100, mx: 2 }}>
          Save
        </Button>
      </Box>
    </Box >
  );
}
