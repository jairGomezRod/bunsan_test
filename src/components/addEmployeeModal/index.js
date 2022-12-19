import { Modal, Button, Form } from "react-bootstrap";

function AddEmplyeeModal(props) {
  return (
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>Add employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select aria-label="Default select example">
          <option value="0">Select employee:</option>
          <option value="1">Manager</option>
          <option value="2">QA Tester</option>
          <option value="3">Developer</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmplyeeModal;
