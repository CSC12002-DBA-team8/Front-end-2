import React, { Component} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import "./styles.css";
import "./button.css";
import { useParams } from "react-router-dom";

function mapStateToProps(state) {
  return {
    name: state.InfoReducer.tenTour,
    moTa: state.InfoReducer.moTa,
    listImg: state.InfoReducer.listImg,
  };
}


class Info extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <section className="py-5">
          <a
            href="/Info/Signup"
            className="btn btn-hover btn-lg fixed-bottombtn color-1 active"
            role="button"
            aria-pressed="true"
          >
            <div className="text-center my-2">Đăng ký tour </div>
          </a>

          <div className="container my-5">
            <Row className="g-4">
              <h3>{this.props.name}</h3>
              <p>{this.props.moTa}</p>
              {this.props.listImg.map((spImg, _idx) => {
                return(
                <Card>
                  <div class="row" key={_idx}>
                    <div class="col-6 col-md-4">
                      <Card.Img variant="top" className="img-responsive align-center" src={spImg.hinhAnh}/>                    
                    </div>
                    <div class="col-12 col-md-8">
                      <Card.Body>
                        <Card.Title>{spImg.title}</Card.Title>
                        <Card.Text>
                          {spImg.noiDung}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>);
              })}
            </Row>
          </div>
        </section>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
      </div>
    );
  }
}

export function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    return id
}

export default connect(mapStateToProps, null)(Info);

