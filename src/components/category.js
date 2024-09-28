import React, { useEffect } from 'react'

export default function Category(props) {

    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <div class="campaigns_sectionContainer">
            <div class="section-title_heading">
                <div class="section-title_headingWrapper">
                    <h2>{props.name}</h2>
                </div>
                {/* <div class="section-title_link">
                    View All Campaigns
                </div> */}
            </div>
        </div>
    )
}
