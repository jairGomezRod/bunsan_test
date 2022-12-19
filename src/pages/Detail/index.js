import { Container, Stack} from "react-bootstrap";
import HierarchyTree from "../../components/hierarchyTree";
import AddEmplyeeModal from "../../components/addEmployeeModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function Detail() {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const { id } = useParams();
  const departments = useSelector((state) => state.department);
  const department = departments.filter((depto)=>{return depto.id == id})[0];

  const createModal = event => {
    setModalData(event);
    setModalShow(true);
  }
  
  return (
    <Container className="departmentDetail">
      <Stack direction="horizontal" gap={3}>
        <div className="vr" />
        <div>
          <h5>{department.name}</h5>
        </div>
        <div className="ms-auto">
          <h5>
            Manager allocation should be: <b>${department.allocation}</b>
          </h5>
        </div>
      </Stack>

      <HierarchyTree id={id} onShowModal={(event) => createModal(event)}/> 

      <AddEmplyeeModal 
        data={modalData}
        show={modalShow} 
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Detail;