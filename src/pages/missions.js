import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import Menubar from '../components/Menu';

const Missions = () => (
  <>
    <Menubar />
    <Container className="px-5">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  Mission
                </th>
                <th>
                  Description
                </th>
                <th>
                  Status
                </th>
                <th>
                  Acton
                </th>
              </tr>
            </thead>
            <tbody />
          </Table>
        </Col>
      </Row>
    </Container>
  </>
);

export default Missions;
