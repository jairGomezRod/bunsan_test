import './Login.css';
import { useState } from 'react';
import { Button, Form, Figure } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useEmailValidation from '../../hooks/useEmailValidation';
import usePasswordValidation from '../../hooks/usePasswordValidation';

function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  let email, password;
  if(user){
    email = user[0].email;
    password = user[0].password;
  }
  
  const [showError, setShowError] = useState(false);
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');

  const isEmailValid = useEmailValidation(inputEmail);
  const isPasswordValid = usePasswordValidation(inputPassword);
  const isFormValid = isEmailValid && isPasswordValid;

  const handleEmail = event => {
    setEmail(event.target.value);
  }

  const handlePassword = event => {
    setPassword(event.target.value);
  }

  const signin = event => {
    event.preventDefault();
    const isUserEmail = inputEmail == email;
    const isUserPassword = inputPassword == password;
    
    if(!isUserEmail || !isUserPassword) {
      return setShowError(true);
    }  

    setLocalStorageItem();

    navigate("/dashboard");
  }

  const setLocalStorageItem = () => {
    localStorage.setItem("authenticated", true);
  }

  return (
    <div className="login">
      <Form className='login__form' onSubmit={signin}>
        <Figure>
          <Figure.Image 
            width={150}
            height={150}
            alt="Bunsan"
            src="https://uploads-ssl.webflow.com/61f0644c39beaff7c11ed2d3/61f1bdb7b683c8dda256acc1_logotype.svg"
          />
          <Figure.Caption>
            Please sign in
          </Figure.Caption>
        </Figure>
        
        <Form.Group controlId='emailField'>
          <Form.Control 
            className='login__form--control' 
            type="email" 
            placeholder="Email Address" 
            required
            onChange={handleEmail}
            value={inputEmail}
          />
        </Form.Group>
        <Form.Group controlId='emailField'>
          <Form.Control 
            className='login__form--control' 
            type="password" 
            placeholder="Password" 
            required
            onChange={handlePassword}
            value={inputPassword}
          />
        </Form.Group>
        {showError && (
          <p data-testid="error-message" className='login__form--error'>Incorrect login, check that the email and password are correct</p>
        )}
        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;