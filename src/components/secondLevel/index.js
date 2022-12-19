import { Row, Col } from "react-bootstrap";
import ThirdLevelHierarchy from "../thirdLevelHierarchy";
import AddEmplyeeButton from "../addEmployeeButton";
import { useSelector, useDispatch } from 'react-redux';
import { deleteSecondEmployee } from "../../redux/states/eSecondLevel.state";
import { deleteEmployeesDepartment } from '../../redux/states/departments.state'

function SecondLevelHierarchy(props) {
  const dispatch = useDispatch()
  const employeesTypes = useSelector((state) => state.employees)[0];
  const thirdLevel = useSelector((state) => state.thirdLevel);

  const getEmployeeData = (type) => {
    return employeesTypes[type];
  }

  const handleClick = (item) => {
    
    let payload = {
      id: item.target.id,
      expense: getEmployeeData(item.target.dataset.type),
      type: +item.target.dataset.type,
      dad: item.target.dataset.dad
    }
    dispatch(deleteSecondEmployee(item.target.id));
    dispatch(deleteEmployeesDepartment(payload));
    
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
  
  const hasInheritance = thirdLevel.filter((employee)=>{return employee.dad == props.data.id});
  
  let deleteButton;
  if(!hasInheritance.length || props.data.type != 1){
    deleteButton = <i 
        onClick={handleClick} 
        id={props.data.id} 
        data-dad={props.data.dad} 
        data-type={props.data.type} 
        className="icon icon__trash fa-solid fa-trash"
      ></i>
  }
  return (
    
    <Row className="node__item">
      <Col md={6} className=" borderNode">
        <div className="node__item">
          {getEmployeeData(props.data.type).name}
          {deleteButton}
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
