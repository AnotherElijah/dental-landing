import React from 'react';

export function RateStars(props) {
    let rateStars = (rate) => {
        let stars = [];
        for (let i = 1; i <= 5; i++){
            if(i<=rate){
                stars.push(<i className="fa fa-star text-warning"/>)
            }else{
                stars.push(<i className="fa fa-star"/>)
            }
        }
        return stars
    };
    return rateStars(Number(props.rate))
}
