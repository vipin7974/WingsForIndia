import Grid from '@mui/material/Grid2'
import React from 'react';
import Ngo from '../assets/ngo.jpg'

export default function Card() {
  return (
    <Grid className="main-card">
      <div className='card-image-container'>
        <img src={Ngo} alt="Banner" className='card-image' />
      </div>
      <div className='card-inner-box'>
        Help Afreen Who Can’t Talk Or Swallow A Morsel Of Food Because Of A Rare Condition
      </div>
      <div className='card-bottom-box'>
        <div className='card-button div-center'>Share</div>
        <div className='card-button div-center'>Donate</div>
      </div>
    </Grid>
  )
}
