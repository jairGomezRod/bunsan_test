import { Col } from "react-bootstrap";
import AddEmplyeeButton from "../addEmployeeButton";
import { useSelector } from 'react-redux';

function ThirdLevelHierarchy(props) {
  
  const thirdLevel = useSelector((state) => state.thirdLevel);
  const employeesTypes = useSelector((state) => state.employees)[0];

  const thirdLevelEmployees = thirdLevel.filter((employee)=>{return employee.dad == props.data.id})

  const getEmployeeData = (type) => {
    return employeesTypes[type];
  } 
  
  const thirdLevelRender = thirdLevelEmployees.map( item => {
    return (
      <div key={item.type} className="node__item">
        {getEmployeeData(item.type).name}
        <i className="icon icon__edit fa-regular fa-pen-to-square"></i>
        <i className="icon icon__trash fa-solid fa-trash"></i>
        <hr />
        <b>${getEmployeeData(item.type).allocation}</b>
      </div>
    )} 
  )

  return (
    <Col md={6} className="borderNode">
      {thirdLevelRender}
      <AddEmplyeeButton {...props} grandfather={props.data.dad} dad={props.data.id} id="thirdLevel"/>
    </Col>
  );
}

export default ThirdLevelHierarchy;
