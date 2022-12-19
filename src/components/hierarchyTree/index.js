import "./hierarchyTree.css";
import { Row, Col, Stack} from "react-bootstrap";
import SecondLevelHierarchy from "../secondLevel";
import { useSelector } from 'react-redux';

function HierarchyTree(props) {
  const id = props.id;

  const departments = useSelector((state) => state.department);
  const secondLevel = useSelector((state) => state.secondLevel);
  const employeesTypes = useSelector((state) => state.employees)[0];
  const department = departments.filter((depto)=>{return depto.id == id})
  const secondLevelEmployees = secondLevel.filter((level)=>{return level.dad == id})
  
  const getEmployeeData = (type) => {
    return employeesTypes[type];
  }

  const firstLevelRender = department.map( item => {
    return (
      <div key={item.id} className="node__item">
        {getEmployeeData(item.type).name}
        <hr />
        <b>${getEmployeeData(item.type).allocation}</b>
      </div>
    )} 
  )


  const secondLevelRender = secondLevelEmployees.map( item => {
    return (
      <SecondLevelHierarchy key={item.id} data={item} {...props}/>
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
          <SecondLevelHierarchy {...props} dad={id} isEmpty/>
        </Stack>
      </Col>
    </Row>
  );
}

export default HierarchyTree;