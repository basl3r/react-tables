import { Button, Card, Row, Col } from "react-bootstrap";
import styles from './TableCard.module.scss';
import { getAllTables } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shortid from 'shortid';

function TableCard() {

  const tables = useSelector(getAllTables);
  console.log('tables', tables);

  return(
    <div>

      {tables.map(table => 
      <Card key={shortid()} className="mb-3">
        <Card.Body>
          <Row className="justify-content-between">
            <Col>
              <div className= {styles.tableCard}>
                <span>Table {table.id} </span>
                <span>Status: {table.status} </span>
              </div>
            </Col>
            <Col xs="auto" className="justify-content-end">
              <Link key={table.id} to={`/table/${table.id}`}>
                <Button variant="primary">Show more</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      )}

    </div>
  );
};

export default TableCard;