import React from 'react'

export default function SubscriberRatingCard({percentage,details}) {
    return (
        <div className='subscriber-rating-card'>
            <div className='rating_percentage'>
               {percentage}
            </div>
            <div className='rating_details'>
               <h4>{details}</h4>
            </div>
        </div>
    )
}
