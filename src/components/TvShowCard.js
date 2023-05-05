import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function TvShowCard({ show }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={show.show.image?.medium} alt={show.show.name} />
      <Card.Body>
        <Card.Title>{show.show.name}</Card.Title>
        <Card.Subtitle style={{ marginTop: "10px" }}>
          Type :{" "}
          <Badge pill bg="secondary">
            {show.show.type}
          </Badge>
        </Card.Subtitle>
        <Card.Subtitle style={{ marginTop: "10px" }}>
          Language :{" "}
          <Badge pill bg="secondary">
            {show.show.language}
          </Badge>
        </Card.Subtitle>
        <Card.Subtitle style={{ marginTop: "10px" }}>
          <Row lg={"4"} md={"4"} sm={"4"}>
            <Col>Genres</Col>
            {show.show.genres.map((genre) => (
              <Col>
                <Badge style={{ marginRight: "5px" }} pill bg="secondary">
                  {genre}
                </Badge>
              </Col>
            ))}
          </Row>
        </Card.Subtitle>

        <Link to={`/show/${show.show.id}`}>
          <Button style={{ marginTop: "10px" }} variant="primary">
            View Summary
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default TvShowCard;
