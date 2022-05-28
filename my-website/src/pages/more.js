import React, {useEffect} from "react";
import { Container } from "react-bootstrap";

function More() {
  useEffect(() => {
    document.title = "Daniel | More"
  }, []);

  return (
    <div className="More">
      <div className="section center-centric">
        <Container>
          <h1>Under Construction</h1>
        </Container>
      </div>
    </div>
  )
}

export default More;