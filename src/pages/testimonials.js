import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid2'

export default function Testimonials(props) {

  useEffect(() => {
    console.log("props", props.data);
  }, []);

  const [data, setData] = React.useState(props.data);

  return (
    <Grid className="testimonials">
      <div className="testimonials-card">
        <div className="testimonials-img">
          <img src={data.image} alt="testimonial" />
        </div>
        <h4 className="testimonials-title">{data.name}</h4>
        <p className="testimonials-role">{data.role}</p>
        <div className="testimonials-body">
          <p className="testimonials-desc">
            {data.description}
          </p>
        </div>
      </div>
    </Grid>
  )
}
