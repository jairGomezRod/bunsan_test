import "./hierarchyTree.css";
import { Row, Col, Stack} from "react-bootstrap";
import SecondLevelHierarchy from "../secondLevel";
import { useSelector } from 'react-redux';

function HierarchyTree(props) {
  const id = props.id;
  const departments = useSelector((state) => state.department);
  const department = departments.filter((depto)=>{return depto.id == id})[0]
  const departmentEmployees = department.employees;
  const employees = useSelector((state) => state.employees)[0];

  const getEmployeeData = (type) => {
    return employees[type];
  }

  const firstLevelRender = departmentEmployees.map( item => {
    return (
      <div key={item.type} className="node__item">
        {getEmployeeData(item.type).name}
        <i className="icon icon__edit fa-regular fa-pen-to-square"></i>
        <hr />
        <b>${getEmployeeData(item.type).allocation}</b>
      </div>
    )} 
  )

  let child = departmentEmployees[0].childrens;

  const secondLevelRender = child.map( item => {
    return (
      <SecondLevelHierarchy data={item} {...props}/>
    )} 
  )

  return (
    <Row className="main-row mt-5 justify-content-md-center">
      <Col md={3} className="node ">
        { firstLevelRender }
      </Col>

      <Col md={6} className="node ">
        <Stack>
          {secondLevelRender}
          <SecondLevelHierarchy {...props} isEmpty/>
        </Stack>
      </Col>
    </Row>
  );
}

export default HierarchyTree;