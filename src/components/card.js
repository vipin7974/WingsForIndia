import React, { useEffect } from 'react';
import Ngo from '../assets/ngo.jpg'
import Grid from '@mui/material/Grid2'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const MIN = 0;

export default function Card(props) {

  useEffect(() => {
    console.log("props", props.data);
  }, [])

  const [data, setData] = React.useState(props.data);

  return (
    <Grid className="main-card">
      <div className='card-image-container'>
        <img src={data.image} alt="Banner" className='card-image' />
      </div>
      <div className='card-inner-box'>
        {data.label}
      </div>
      <div style={{ width: '90%', padding: '20px' }}>
        <Slider
          // marks={marks}
          step={10}
          value={data.fund}
          valueLabelDisplay="auto"
          disabled={true}
          min={MIN}
          max={data.max_fund}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer' }}
          >
            ₹{data.fund} raised
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer' }}
          >
            ₹{data.max_fund} target
          </Typography>
        </Box>
      </div>
      <div className='card-bottom-box'>
        <div className='card-button div-center'>Share</div>
        <div className='card-button div-center'>Donate</div>
      </div>
    </Grid>
  )
}
