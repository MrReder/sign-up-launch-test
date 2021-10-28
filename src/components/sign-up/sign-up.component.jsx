import React, { useState } from 'react';
import './sign-up.styles.scss';
import topIcon from '../../assets/topIcon.svg';
import inputIcon from '../../assets/inputIcon.svg';
import { GenderBox } from '../gender-box/gender-box.component';
import male from '../../assets/male1.svg';
import maleClicked from '../../assets/male1Clicked.svg';
import female from '../../assets/female1.svg';
import femaleClicked from '../../assets/female1clicked.svg';
import other from '../../assets/other.svg';


export const SignUp = () => {
  
  const [gender, setGender] = useState(' ')
  const [email, setEmail] = useState(' ');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [typePwd, setTypePwd] = useState('password');
  const [typePwdConfirm, setTypePwdConfirm] = useState('password');
  const [newMaleIcon, setNewMaleIcon] = useState(male);
  const [pushColor, setPushColor] = useState('')

const handleGenderMale = () => {
  console.log(gender, 'hello');
  setGender('male');
 
}

const handleMaleColor = () => {
  setNewMaleIcon(maleClicked);
}

const handleGenderFemale = () => {
  setGender('female')
}

const handleGenderOther = () => {
  setGender('other')
}

  const handleEmail = (e) => {
      setEmail(e.target.value);
  }

  const handlePwd = (e) => {
    setPwd(e.target.value);
}

const handlePwdConfirm = (e) => {
    setPwdConfirm(e.target.value);
}

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

const isEmailValid = () => {
  const check = /\S+@\S+\.\S+/;
  return check.test(email.toLowerCase())
};
const isPwdValid = () => {
  const check = /[a-zA-Z0-9]{6,50}/;
  return check.test(pwd);
};

const isPwdConfirmValid = () => {
 return pwd === pwdConfirm ? true : false
};

const showAlert = () => {
  if(isEmailValid() && isPwdValid() && isPwdConfirmValid()){
    return alert(`
    You signed up!
    Your gender: ${gender}
    Your email: ${email}
    Your password: ${pwd}
    `)
  } else if (!isEmailValid() || !isPwdValid() || !isPwdConfirmValid()){
    return alert(`
    Please fill input fields correct or/and gender selection.
    `)
  }

}

const setPushedBtn = () => {
  setPushColor('pushed');
}

const setUnPushedBtn = () => {
  setPushColor('unpushed');
}
  
    return (
    <div className='sign-up-page-wrapper'>
      <form className='form-container'>
        <div className='form-header'>
          <img src={topIcon} alt="top-icon" className='top-icon'/>
          <h1 className='main-title'>
           Sign Up with email
          </h1>
        </div>
        <div className='gender-container'>
        <h2 className='secondary-title'
        style={{marginLeft: '0'}}>
        Gender</h2>
        <div className="gender-boxes-wrapper">
         <GenderBox icon={handleGenderMale ? male : maleClicked} 
         gender={"Male"} 
         alt='male'
         value={gender} 
         handleGender={handleGenderMale}
         />

         <GenderBox icon={female} 
         gender={"Female"}
          alt='female'
         value={gender} 
         handleGender={handleGenderFemale}/>

         <GenderBox icon={other} 
         gender={"Other"} 
         alt='other'
         value={gender} 
         handleGender={handleGenderOther}/>
        </div>
        </div>

        <div className='inputs-container'>
          <div className='input-wrapper'>
          <h2 className='secondary-title'>Email</h2>
          <input
          className={`${isEmailValid() ? 'valid' : 'invalid'} input-item`}
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={handleEmail}
          required
          />
          {
            isEmailValid
             ? 
             <span></span> :
             <span className='invalid'>Wrong email</span> 
          }
          </div>
        
          <div className='input-wrapper'>
          <h2 className='secondary-title'>Password</h2>
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
          className='input-icon'
          />
          </div>
          
          <div className='input-wrapper'>
          <h2 className='secondary-title'>Confirm password</h2>
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
          className='input-icon'
          />
          </div>
         
        </div>

        <button 
        className={`${pushColor} sign-up-btn`}
        onClick={showAlert}
        onMouseDown={setPushedBtn}
        onMouseUp={setUnPushedBtn}
        >
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