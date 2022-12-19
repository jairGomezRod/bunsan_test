import { Col } from "react-bootstrap";
import AddEmplyeeButton from "../addEmployeeButton";
import { useSelector } from 'react-redux';

function ThirdLevelHierarchy(props) {
  const employees = useSelector((state) => state.employees)[0];

  const getEmployeeData = (type) => {
    return employees[type];
  } 

  let thirdLevelRender;
  if(props.data.childrens){
    thirdLevelRender = props.data.childrens.map( item => {
      return (
        <div key={item} className="node__item">
          {getEmployeeData(item).name}
          <i className="icon icon__edit fa-regular fa-pen-to-square"></i>
          <i className="icon icon__trash fa-solid fa-trash"></i>
          <hr />
          <b>${getEmployeeData(item).allocation}</b>
        </div>
      )} 
    )
  }

  return (
    <Col md={6} className="borderNode">
      {thirdLevelRender}
      <AddEmplyeeButton {...props} id="thirdLevel"/>
    </Col>
  );
}

export default ThirdLevelHierarchy;
