import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import TvShowCard from "./TvShowCard";
import Container from 'react-bootstrap/Container';


function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
      const fetchShows = async () => {
        const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(data);
      };
      fetchShows();
  }, []);

  return (
    <Container style={{marginTop: "35px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Row>
        {shows.map((show) => (
          <Col style={{marginBottom: "35px"}} key={show.id} sm={12} md={6} lg={4}>
            <TvShowCard show={show} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
