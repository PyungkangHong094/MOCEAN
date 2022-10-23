import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import { useRouter } from 'next/router';
import { useDialog } from '../dialogs/context';
import { useState } from 'react';

export const CustomerListToolbar = (props) => {
  const router = useRouter();
  const { showAlertDialog } = useDialog();

  const [input, setInput] = useState('')
  const [isSearchFocused, setFocus] = useState(false)

  const searchInput = () => {
    showAlertDialog({
      title: 'Search Value',
      message: `You searched '${input}'!`
    })
  }

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Customers
        </Typography>
        <Box sx={{ m: 1 }}>

          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/customers/form')
            }
          >
            Add Customers
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant={isSearchFocused ? 'contained' : 'text'}
                        disabled={!isSearchFocused}
                        aria-label="search"
                        onClick={searchInput}
                        onMouseDown={(event) => { event.preventDefault(); }}
                        edge="end"
                      >
                        <Typography>
                          Search
                        </Typography>
                      </Button>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
                value={input}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => setInput(e.target.value ?? '')}
                onKeyPress={(e) => {
                  console.log(e);
                  if (e.key === 'Enter' || e.code === 'Enter') {
                    searchInput()
                  }
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
