import { Button } from "react-bootstrap";

function AddEmplyeeButton(props) {
  return (
    <div className="node__item">
      <Button 
        variant="outline-dark" 
        onClick={props.onShowModal}
        id={props.id}
      >
        Add employee
      </Button>
    </div>
  );
}

export default AddEmplyeeButton;
