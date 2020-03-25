import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Mermaid Tinder</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
