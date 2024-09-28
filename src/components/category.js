import Grid from '@mui/material/Grid2'
import React, { useEffect } from 'react'

export default function Category(props) {

    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <Grid class="campaigns-sectionContainer">
            <Grid class="section-title-heading">
                <div class="section-title-headingWrapper">
                    <h2>{props.name}</h2>
                </div>
                {/* <div class="section-title-link">
                    View All Campaigns
                </div> */}
            </Grid>
        </Grid>
    )
}
