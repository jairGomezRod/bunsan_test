import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./cardDepartments.css"

function CardDepartments(props) {
  if(!props.data){
    return (
      <Card className='card__add'>
        <Card.Body>
          <Card.Text>
            <i className="card__add--icon fa-regular fa-plus"></i>
            <br/>
            <b>Add more</b>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  } else {
    const { name, expense } = props.data
    return (
      <Link to="/detail" className='cardLink'>
        <Card className='card'>
          <Card.Body>
            <Card.Title>
              { name }
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Expense allocation
            </Card.Subtitle>
            <Card.Text>
              <b>${ expense }</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    )
  }
}

export default CardDepartments;