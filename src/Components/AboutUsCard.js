import React from 'react'

export default function AboutUsCard({image,details}) {
    return (
        <div className='about_us_card'>
            <div className='image'><img src={image} alt='the pic of brands'></img></div>
            <div className='details'>{details}</div>
        </div>
    )
}
