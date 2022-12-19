import { Row, Col } from "react-bootstrap";
import ThirdLevelHierarchy from "../thirdLevelHierarchy";
import AddEmplyeeButton from "../addEmployeeButton";
import { useSelector } from 'react-redux';

function SecondLevelHierarchy(props) {

  const employeesTypes = useSelector((state) => state.employees)[0];

  const getEmployeeData = (type) => {
    return employeesTypes[type];
  }

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
          {getEmployeeData(props.data.type).name}
          <i className="icon icon__trash fa-solid fa-trash"></i>
          <hr />
          <b>${getEmployeeData(props.data.type).allocation}</b>
        </div>
        
      </Col>

      {props.data.type == 1 &&
        <ThirdLevelHierarchy {...props}/>
      }
    </Row>
  );
}

export default SecondLevelHierarchy;
