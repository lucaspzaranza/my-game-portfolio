import React from 'react';
import './carousel-arrow.css'

export const CarouselArrow = ({isLeft, handleArrow}) => {
    return (
        (isLeft) ?
        (
            <div className='carousel-left-arrow' onClick={handleArrow}>
                &lt;
            </div>
        )
        :
        (
            <div className='carousel-right-arrow' onClick={handleArrow}>
                &gt;
            </div>
        )
    )
}