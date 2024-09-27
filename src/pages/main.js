import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import Ngo from '../assets/ngo.jpg'

export default function Main() {
  return (
    <Box flexGrow={1} className="main-div">
      <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center' flexDirection={'column'}>
          <div className='side-heading'>
            Medical Crowdfunding is the Best Way to Raise Money for Medical Expenses
          </div>
          <div className='donate-button'>
            Donate Now
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center div-sm-none'>
          <img src={Ngo} alt="Banner" width={500} height={500} className='ngo-image' />
        </Grid>
      </Grid>
    </Box>
  );
}
