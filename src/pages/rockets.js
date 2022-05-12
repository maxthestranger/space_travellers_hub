import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  reserveRocket,
  cancelRocket,
  fetchRockets,
} from '../redux/rocket/rocket';
import RocketList from '../components/rocketList';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <>
      {/* TODO: Header here */}

      <Container className="px-5">
        <Row>
          <Col>
            <ul className="list-unstyled">
              {rockets.map((rocket) => (
                <RocketList
                  key={rocket.id}
                  rocketName={rocket.rocket_name}
                  description={rocket.description}
                  flckrImg={rocket.flickr_images[0]}
                  reserved={rocket.reserved}
                  reserve={() => dispatch(reserveRocket(rocket))}
                  cancel={() => dispatch(cancelRocket(rocket))}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rockets;
