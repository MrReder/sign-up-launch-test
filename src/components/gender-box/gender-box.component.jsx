import React from 'react';

import './gender-box.styles.scss';

export const GenderBox = ({icon, gender, gendercontainer, handleGender, alt}) => {
  
    return <div gendercontainer={gendercontainer}
    className={`${handleGender() ? 'gender-choosen' : ''} gender-box`}
    onClick={handleGender}
    >
     <img src={icon} alt={alt} className='gender-icon'/>
      <span className='gender-text'>{gender}</span>
    </div>
}