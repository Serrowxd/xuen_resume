import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="navCol">
          <Col>
            <h4 className="top_logo">X</h4>
            <hr />
          </Col>
          <Col>
            <h4 className="nav_item bump"> H </h4>
            <h4 className="nav_item"> H </h4>
            <h4 className="nav_item"> H </h4>
            <h4 className="nav_item"> H </h4>
            <h4 className="nav_item"> H </h4>
          </Col>
          <Col>
            <h4 className="nav_item_social bump"> S </h4>
            <h4 className="nav_item_social"> S </h4>
            <h4 className="nav_item_social"> S </h4>
            <h4 className="nav_item_social"> S </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
