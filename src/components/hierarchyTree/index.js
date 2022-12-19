import "./hierarchyTree.css";
import { Row, Col, Stack} from "react-bootstrap";
import SecondLevelHierarchy from "../secondLevel";

function HierarchyTree(props) {
  return (
    <Row className="mt-5 justify-content-md-center">
      <Col md={3} className="node ">
        <div className="node__item">
          Manager A 
          <i className="icon icon__edit fa-regular fa-pen-to-square"></i>
          <hr />
          <b>$300</b>
        </div>
      </Col>

      <Col md={6} className="node ">
        <Stack>
          
          <SecondLevelHierarchy {...props}/>
          <SecondLevelHierarchy {...props} isEmpty/>

        </Stack>
      </Col>
    </Row>
  );
}

export default HierarchyTree;