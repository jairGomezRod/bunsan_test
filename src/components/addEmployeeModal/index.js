import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { newSecondEmployee } from '../../redux/states/eSecondLevel.state'
import { newThirdEmployee } from '../../redux/states/eThirdLevel.state'
import { updateEmployeesDepartment } from '../../redux/states/departments.state'


function AddEmplyeeModal(props) {
  const dispatch = useDispatch()
  const [optionType, setOptionType] = useState(0);
  const employeesTypes = useSelector((state) => state.employees)[0];

  const getEmployeeData = (type) => {
    return employeesTypes[type];
  } 
  
  const updateTree = () => {
    const payload = {
      type: +optionType,
      dad: props.data.target.dataset.dad
    }

    let payloadUpdate = {
      id:payload.dad,
      type:payload.type,
      expense: getEmployeeData(payload.type)
    }

    switch (props.data.target.id) {
      case "secondLevel":
        dispatch(newSecondEmployee(payload));
        
        break;
      case "thirdLevel":
        dispatch(newThirdEmployee(payload));
        payloadUpdate.id=props.data.target.dataset.grandfather;
        break;
      default:
        console.log("error");
        break;
    }

    dispatch(updateEmployeesDepartment(payloadUpdate))
    props.onHide();
  }

  const handleOption = (val) => {
    setOptionType(val);
  }
  return (
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>Add employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select aria-label="Default select example" onChange={(e) => handleOption(e.currentTarget.value)}>
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
        <Button disabled={optionType == 0} variant="primary" onClick={updateTree}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmplyeeModal;
