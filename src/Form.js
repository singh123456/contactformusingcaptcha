import React,{ useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
 function  Form() {
    const [captchaResponse, setCaptchaResponse] = useState('');

    const handleCaptchaChange = (value) => {
      setCaptchaResponse(value);
    };
  
  return (
    <div>
        <form action="">
        <div>

            Name: <input type="text"placeholder='Enter Your Name' className='input1'/>
        </div>
        <div>

            Email: <input type="email" name="" className='input2' placeholder='Enter Your Email'/>
        </div>
        <div>

            Password: <input type="password" className='input3'placeholder='Enter Your Password'/>
        </div>
        <div>
           <label htmlFor="message">Message:</label>
           <textarea name="message" id="message" cols="2" rows="2"></textarea>
        </div>
        <div>
      <ReCAPTCHA
        sitekey="6Lebe7MlAAAAAK4mX7oOM5cIsT3AFowQNOISAVl8"
        onChange={handleCaptchaChange}
      />
    </div>
       <button type="submit"className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}
export default Form;
