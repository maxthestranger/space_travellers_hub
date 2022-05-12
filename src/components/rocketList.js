import { PropTypes } from 'prop-types';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';

const RocketList = ({
  rocketName,
  description,
  flckrImg,
  reserved,
  reserve,
  cancel,
}) => (
  <li className="py-3 my-3">
    <Container>
      <Row>
        <Col xs lg={3}>
          <Image
            src={flckrImg}
            width="100%"
            height="auto"
            rounded
            alt="image"
          />
        </Col>
        <Col>
          <h2>{rocketName}</h2>
          <p>{description}</p>
          <Button
            variant={reserved ? 'light' : 'primary'}
            onClick={reserved ? cancel : reserve}
          >
            {reserved ? 'Cancel Rocket' : 'Reserve Rocket'}
          </Button>
        </Col>
      </Row>
    </Container>
  </li>
);

RocketList.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flckrImg: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  reserve: PropTypes.func,
  cancel: PropTypes.func,
};

RocketList.defaultProps = {
  reserve: null,
  cancel: null,
  reserved: false,
};

export default RocketList;
