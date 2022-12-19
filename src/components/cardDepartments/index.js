import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./cardDepartments.css"

function CardDepartments(props) {
  if(!props.data){
    return (
      <Card className='card__add' onClick={props.onClick}>
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
    const { name, allocation, id } = props.data
    const route = `/detail/${id}`
    return (
      <Link to={route} className='cardLink'>
        <Card className='card'>
          <Card.Body>
            <Card.Title>
              { name }
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Expense allocation
            </Card.Subtitle>
            <Card.Text>
              <b>${ allocation }</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    )
  }
}

export default CardDepartments;