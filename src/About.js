import React from 'react';
import { Card } from 'react-bootstrap';


/*
Place information that you wish to share about interesting projects you have completed / working on, your
academic career, development interests, etc.
*/

function About(props) {
  return (
    <Card >
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          All about me - the developer. 
          More information coming soon!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default About;