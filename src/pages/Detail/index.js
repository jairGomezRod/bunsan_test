import { Container, Stack} from "react-bootstrap";
import HierarchyTree from "../../components/hierarchyTree";
import AddEmplyeeModal from "../../components/addEmployeeModal";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  return (
    <Container className="departmentDetail">
      <Stack direction="horizontal" gap={3}>
        <div className="vr" />
        <div>
          <h5>Departamento {id}</h5>
        </div>
        <div className="ms-auto">
          <h5>
            PRESUPUESTO TOTAL: <b>$2500</b>{" "}
          </h5>
        </div>
      </Stack>

      <HierarchyTree onShowModal={() => setModalShow(true)}/> 

      <AddEmplyeeModal 
        show={modalShow} 
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Detail;