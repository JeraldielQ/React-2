import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

function ItemList({ items, basePath }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">Menu</CardTitle>
          <ListGroup>
            {items.map((item) => (
              <Link to={`${basePath}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemList;
