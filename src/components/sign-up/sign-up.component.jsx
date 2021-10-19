import React, { useState } from 'react';
import './sign-up.styles.scss';
import topIcon from '../../assets/topIcon.svg';
import inputIcon from '../../assets/inputIcon.svg';
import { GenderBox } from '../gender-box/gender-box.component';
import male from '../../assets/male1.svg';
import female from '../../assets/female1.svg';
import other from '../../assets/other.svg';


export const SignUp = () => {
  
  const [email, setEmail] = useState(' ');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [typePwd, setTypePwd] = useState('password');
  const [typePwdConfirm, setTypePwdConfirm] = useState('password');

  const handleEmail = (e) => {
      setEmail(e.target.value);
  }

  const handlePwd = (e) => {
    setPwd(e.target.value);
}

const handlePwdConfirm = (e) => {
    setPwdConfirm(e.target.value);
}

const isEmailValid = () => {
    const check = /\S+@\S+\.\S+/;
    return check.test(email.toLowerCase())
};
const isPwdValid = () => {
    const check = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return check.test(pwd);
};

const isPwdConfirmValid = () => {
   return pwd === pwdConfirm ? true : false
};

const showPwd = () => {
  typePwd === 'password' ? 
  setTypePwd('text') :
  setTypePwd('password')
}

const showPwdConfirm = () => {
  typePwdConfirm === 'password' ? 
  setTypePwdConfirm('text') :
  setTypePwdConfirm('password')
}
  
    return (
    <div className='sign-up-page-wrapper'>
      <form className='form-container'>
        <div className='form-header'>
          <img src={topIcon} alt="top-icon"/>
          <h1 className='main-title'>
           Sign Up with email
          </h1>
        </div>
        <div className='gender-container'>
        <h2 >Gender</h2>
        <div className="gender-boxes-wrapper">
         <GenderBox icon={male} gender={"Male"} alt='male'/>
         <GenderBox icon={female} gender={"Female"} alt='female'/>
         <GenderBox icon={other} gender={"Other"} alt='other'/>
        </div>
        </div>

        <div className='inputs-container'>
          <div className='input-wrapper'>
          <input
          className='input-item'
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={handleEmail}
          required
          />
          </div>
        
          <div className='input-wrapper'>
          <input
          className='input-item'
           type={typePwd}
           placeholder='Enter your password'
           value={pwd}
           src={inputIcon}
           onChange={handlePwd}
           required
          />
          <img 
          src={inputIcon}
          alt='input-icon'
          onClick={showPwd}
          />
          </div>
          
          <div className='input-wrapper'>
          <input
          className='input-item'
           type={typePwdConfirm}
           placeholder='Confirm your password'
           value={pwdConfirm}
           src={inputIcon}
           onChange={handlePwdConfirm}
           required
          />
          <img 
          src={inputIcon}
          alt='input-icon'
          onClick={showPwdConfirm}
          />
          </div>
         
        </div>

        <button className='sign-up-btn'>
         Sign Up
        </button>
        <div className='form-footer'>
         <h2 className='footer-title'>
           Allready have an account?
          <span className='title-additional-text'>
           Log in
          </span>
         </h2>
         <h2 className='footer-title'>
           Review privacy and disclosures
          <span className='title-additional-text'>
            here
          </span>
         </h2>
        </div>
      </form>
    </div>
)
}