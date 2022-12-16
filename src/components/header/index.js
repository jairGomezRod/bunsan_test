import { Figure, Button } from 'react-bootstrap';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const signOut = event => {
    event.preventDefault();
    
    navigate("/");
  }

  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="https://www.bunsan.io/" target="_blank" className="navbar-brand d-flex align-items-center">
            <Figure>
              <Figure.Image 
                width={90}
                height={90}
                alt="Bunsan"
                src="https://uploads-ssl.webflow.com/61f0644c39beaff7c11ed2d3/61f1bdb7b683c8dda256acc1_logotype.svg"
              />
              <Figure.Caption>
                Contable App
              </Figure.Caption>
            </Figure>
          </a>
          <Button
            onClick={signOut}
            variant="outline-light"
            type="button"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
