import React from 'react'
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <div className="bottom-footer-wrapper">
      <Grid container className='bottom-footer'>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} class="bottom-footer-impactSection">
          <form>
            <p class="subscribe-us-sectionTitle">Subscribe Us</p>
            <div class="subscribe-us-inputWrapper">
              <input type="email" class="subscribe-us-input" placeholder="Email ID" name="email" value="" />
              <button type="submit" class="button-gradient-btn  subscribe-us-btn button-gradient-gradient" id="subscribeNowBtn">
                Subscribe
              </button>
            </div>
          </form>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid>
      </Grid>
    </div>
  )
}
