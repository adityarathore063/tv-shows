import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function ShowSummary() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [bookingFormValues, setBookingFormValues] = useState({
    movieName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.log(error));
      
  }, [id]);

  useEffect(() => {
    const storedBookingFormValues = JSON.parse(localStorage.getItem('bookingFormValues'));
    if (storedBookingFormValues) {
      setBookingFormValues(storedBookingFormValues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookingFormValues', JSON.stringify(bookingFormValues));
  }, [bookingFormValues]);

  const handleBookingFormSubmit = event => {
    event.preventDefault();
    alert('Form submitted');
  };
  return (
    <div>
      <Container style={{ marginTop: "35px"}}>
        <Card>
          <Card.Title style={{marginTop: "20px", marginBottom: "20px", textAlign: "center"}}>{show.name}</Card.Title>
          <Card.Img
            style={{ height: "35rem" }}
            variant="top"
            src={show.image?.original}
            alt={show.name}
          />
          <Card.Body>
            <Card.Text> {show.summary} </Card.Text>
          </Card.Body>
          <Button style={{ marginTop: "15px",marginBottom:"15px",alignSelf:"center", width:"13rem"}} variant="primary" onClick={() => setBookingFormVisible(true)}>Book a ticket</Button>
        </Card>
      </Container>
      <Container style={{alignItems:"center",justifyContent:"center"}}>
      </Container>

      {bookingFormVisible && (
        <Container style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop: "20px"}}>
        <form onSubmit={handleBookingFormSubmit}>
          <h2>Booking Form</h2>
          <div style={{marginTop:"10px"}}>
            <label htmlFor="movieName">Movie Name:</label>
            <input
            style={{marginLeft:"10px"}}
              type="text"
              id="movieName"
              name="movieName"
              value={show.name}
              disabled
            />
          </div>
          <div style={{marginTop:"10px"}}>
            <label htmlFor="email">Email:</label>
            <input
              style={{marginLeft:"10px"}}
              type="email"
              id="email"
              name="email"
              value={bookingFormValues.email}
              onChange={event => setBookingFormValues({
                ...bookingFormValues,
                movieName: show.name,
                email: event.target.value
              })}
              required
            />
          </div>
          <div style={{marginTop:"10px"}}>
            <label htmlFor="phone">Phone:</label>
            <input
            style={{marginLeft:"10px"}}
              type="tel"
              id="phone"
              name="phone"
              value={bookingFormValues.phone}
              onChange={event => setBookingFormValues({
                ...bookingFormValues,
                phone: event.target.value
              })}
              required
            />
          </div>
          <Button style={{ marginTop: "15px",marginBottom:"15px",marginLeft:"90px", width:"10rem"}} variant="primary" type="submit">Book Now</Button>

        </form>
        </Container>
      )}
    </div>
  );
}

export default ShowSummary;
