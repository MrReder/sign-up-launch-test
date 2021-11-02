import React from 'react';

import './gender-box.styles.scss';

export const GenderBox = ({icon, gender, gendercontainer, className, handleGender, alt}) => {
  
  console.log(className);

    return <div gendercontainer={gendercontainer}
    className={'gender-box ' + className}
    onClick={handleGender}
    >
     <img src={icon} alt={alt} className='gender-icon'/>
      <span className={'gender-text ' + className}>{gender}</span>
    </div>
}