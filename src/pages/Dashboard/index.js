import { Container, Row, Col } from 'react-bootstrap';
import CardDepartments from '../../components/cardDepartments';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { name,rol } = useSelector((state) => state.user)[0];

  const departments = [
    {
      id: 1,
      name: "Departamento 1",
      expense: 1000,
    },
    {
      id: 2,
      name: "Departamento 2",
      expense: 5000,
    },
  ];

  const departmentsItems = departments.map( item => 
    <Col key={item.id} md={3} className="mb-4">
      <CardDepartments data={item}/>
    </Col>
    )
  
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>Hi, {name}</h2>
        </Col>
        <Col md={{ span: 4, offset: 4 }} className="text-end">
          <h2>{rol}</h2>
        </Col>
      </Row>

      <Row className='mt-5'>
        
        { departmentsItems }

        <Col md={3}> 
          <CardDepartments/>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;