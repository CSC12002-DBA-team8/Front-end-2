import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const mapStateToProps = (state) => {
  return { listTour: state.TourReducer.listTour };
};

const ToInfo = (codeTour) => {
  // const navigate = useNavigate();
  // navigate(`/Info/${codeTour}`,{state:{id:codeTour}});
}



class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <section className="py-5">
          <div className="container my-5">
            <Row xs={1} md={2} className="g-4">
              {this.props.listTour.map((spTour, _idx) => {
                return (
                  <Col key={_idx}>
                    <Card>
                      <Card.Img variant="top" className="img-responsive align-center" src={spTour.hinhAnh}/>
                      <Card.Body>
                        <Card.Title>{spTour.nameTour}</Card.Title>
                        <Card.Text>{spTour.moTa}</Card.Text>
                      </Card.Body>
                      <div class="card-footer">
                        <a
                          class="btn btn-primary btn-sm"
                          href = {`/Info/${spTour.maTour}`}
                          onClick={ToInfo(spTour.maTour)}                         
                        >
                          More Info
                        </a>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
      </div>
    );
  }
}


export default connect(mapStateToProps, null)(Home);
