import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


const Details = () => {
  const history = useHistory();
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`)
    // fetch(`https://aqueous-dawn-65962.herokuapp.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setCourse(data);
        } else {
          alert("something went wrong!");
        }
      });
  }, [id]);


  return (
    <div className="my-4 h-100">
      {course?.title ? (
        <Container>

          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={course.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h5>{course.city}</h5>
              <h2>{course.title}</h2>
              <h5>{course.desc}</h5>
              <Row>
                <Col>
                  <h1>Price:{course.price}$</h1>


                  <form >
                            <div class="form-group">
                                <span class="form-label">Your Destination</span>
                                <input class="form-control" type="text" placeholder="Enter a destination or Booking"/>
                            </div>
                            <div class="form-group">
                                <span class="form-label">Your Destination</span>
                                <input class="form-control" type="email" placeholder="Enter a Email"/>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <span class="form-label">Check In</span>
                                        <input class="form-control" type="date" required/>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <span class="form-label">Check out</span>
                                        <input class="form-control" type="date" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <span class="form-label">Rooms</span>
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span class="select-arrow"></span>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <span class="form-label">Adults</span>
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span class="select-arrow"></span>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <span class="form-label">Children</span>
                                        <select class="form-control">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <span class="select-arrow"></span>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="form-btn">
                                <button class="submit-btn">Check availability</button>
                            </div> */}
                        </form>




                  <div className="my-2">
                
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(course);
                          // swal("Wow!!!", "Your Booking has added to the cart", "success")
                          history.push('/dashboard')
                        } else {
                          history.push("/login");
                        }
                      }}
                      className="btn btn-warning  w-100"
                    >
                      Booking
                    </button>
                  </div>
                </Col>
                <Col>
                  <div className="text-center my-3">
                  <Rating
                      initialRating={course.rating}
                      readonly
                      emptySymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={emptyStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={fullStar}
                        />
                      }
                    />
                    <span> {course.rating}</span>
                    <p className="mb-3">Total Review: {course.ratingCount}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Course Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
