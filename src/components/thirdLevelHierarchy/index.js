import { Col } from "react-bootstrap";
import AddEmplyeeButton from "../addEmployeeButton";
import { useSelector, useDispatch } from 'react-redux';
import { deleteThirdEmployee } from "../../redux/states/eThirdLevel.state";
import { deleteEmployeesDepartment } from '../../redux/states/departments.state'

function ThirdLevelHierarchy(props) {
  const dispatch = useDispatch()
  const thirdLevel = useSelector((state) => state.thirdLevel);
  const employeesTypes = useSelector((state) => state.employees)[0];
  const thirdLevelEmployees = thirdLevel.filter((employee)=>{return employee.dad == props.data.id})

  const getEmployeeData = (type) => {
    return employeesTypes[type];
  } 
  
  const handleClick = (item) => {
    let payload = {
      id: item.target.id,
      expense: getEmployeeData(item.target.dataset.type),
      type: +item.target.dataset.type,
      dad: item.target.dataset.grandfather
    }
    dispatch(deleteThirdEmployee(item.target.id));
    dispatch(deleteEmployeesDepartment(payload));
  }
  
  const thirdLevelRender = thirdLevelEmployees.map( item => {
    return (
      <div key={item.type} className="node__item">
        {getEmployeeData(item.type).name}
        <i onClick={handleClick} id={item.id} data-grandfather={props.data.dad} data-dad={props.data.id} data-type={item.type} className="icon icon__trash fa-solid fa-trash"></i>
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
