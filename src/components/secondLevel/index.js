import { Row, Col } from "react-bootstrap";
import ThirdLevelHierarchy from "../thirdLevelHierarchy";
import AddEmplyeeButton from "../addEmployeeButton";

function SecondLevelHierarchy(props) {

  if(props.isEmpty){
    return(
      <Row className="node__item">
        <Col md={6} className=" borderNode">
          <AddEmplyeeButton {...props} id="secondLevel"/>
        </Col>
      </Row>

    )
  }
  return (
    
    <Row className="node__item">
      <Col md={6} className=" borderNode">
        <div className="node__item">
          Manager B<i className="icon icon__edit fa-regular fa-pen-to-square"></i>
          <i className="icon icon__trash fa-solid fa-trash"></i>
          <hr />
          <b>$300</b>
        </div>
        
        <AddEmplyeeButton {...props} id="secondLevel"/>
      </Col>

      <ThirdLevelHierarchy {...props}/>
    </Row>
  );
}

export default SecondLevelHierarchy;
