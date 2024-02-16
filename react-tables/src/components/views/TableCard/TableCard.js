import { Button, Card, Row, Col } from "react-bootstrap";
import styles from './TableCard.module.scss';

function TableCard() {
  return(
    <Card className="mb-3">
      <Card.Body>
        <Row className="justify-content-between">
          <Col>
            <div className= {styles.tableCard}>
              <span>Table 1 </span>
              <span>Status: </span>
            </div>
          </Col>
          <Col xs="auto" className="justify-content-end">
            <Button variant="primary">Show more</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TableCard;