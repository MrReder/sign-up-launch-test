import React from 'react';

export const GenderBox = ({icon, gender, alt}) => {
    return <div className="gender-box">
     <img src={icon} alt={alt}/>
      <span>{gender}</span>
    </div>
}