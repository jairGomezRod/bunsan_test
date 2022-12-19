import { Col } from "react-bootstrap";
import AddEmplyeeButton from "../addEmployeeButton";

function ThirdLevelHierarchy(props) {
  return (
    <Col md={6} className="borderNode">
      <div className="node__item">
        QA Tester
        <i className="icon icon__edit fa-regular fa-pen-to-square"></i>
        <i className="icon icon__trash fa-solid fa-trash"></i>
        <hr />
        <b>$500</b>
      </div>
      <AddEmplyeeButton {...props} id="thirdLevel"/>
    </Col>
  );
}

export default ThirdLevelHierarchy;
