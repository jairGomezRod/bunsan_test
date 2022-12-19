import { Button } from "react-bootstrap";

function AddEmplyeeButton(props) {
  return (
    <div className="node__item">
      <Button 
        variant="outline-dark" 
        onClick={props.onShowModal}
        id={props.id}
        data-dad={props.dad}
        data-grandfather={props.grandfather}
      >
        Add employee
      </Button>
    </div>
  );
}

export default AddEmplyeeButton;
