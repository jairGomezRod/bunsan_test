import './Login.css';
import { Button, Form, Figure } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const signin = event => {
    event.preventDefault();
    navigate("/dashboard");
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
          <Form.Control className='login__form--control' type="email" placeholder="Email Address" required/>
        </Form.Group>
        <Form.Group controlId='emailField'>
          <Form.Control className='login__form--control' type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;