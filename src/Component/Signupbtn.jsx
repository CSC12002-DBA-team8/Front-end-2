import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    PriceAdult: state.PriceReducer.ticketAdult,
    PriceChild: state.PriceReducer.ticketChild,
  };
}

function Signupbtn(props) {
  let [authMode] = useState("signin");
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [adress, setAdress] = useState("");
  const [phonenum, setPn] = useState("");
  const [birthday, setBirth] = useState("");
  const [mail, setMail] = useState("");
  const [ticketB, setTicketB] = useState(0);
  const [ticketA, setTicketA] = useState(0);

  const [temp, setTemp] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (authMode === "signin") {
    return (
      <div className="container my-5">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Form đăng ký tour</h3>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Nhập số CMND"
                  value={id}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setID(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Địa chỉ"
                  value={adress}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setAdress(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="tel"
                  className="form-control mt-1"
                  placeholder="Di động"
                  value={phonenum}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setPn(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email"
                  value={mail}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setMail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label className="mt-1">Ngày sinh</label>
                <input
                  type="date"
                  className="form-control mt-1"
                  value={birthday}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setBirth(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-3">
              <label className="mt-1">Chọn số vé đăng ký: </label>
                <div class="row">
                  <div class="col-6 col-md-6">
                    <input
                      type="number"
                      min="0"
                      className="form-control mt-1"
                      placeholder="Vé người lớn"
                      value={ticketB}
                      onChange={(e) => {
                        // <signupbtn></signupbtn>
                        setTicketB(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-6 col-md-6">
                    <input
                      type="number"
                      min="0"
                      className="form-control mt-1"
                      placeholder="Vé Trẻ em"
                      value={ticketA}
                      onChange={(e) => {
                        // <signupbtn></signupbtn>
                        setTicketA(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <div class="row">
                  <div class="col-6 col-md-6" >Giá vé người lớn: {props.PriceAdult}</div>
                  <div class="col-6 col-md-6" >Giá vé trẻ em: {props.PriceChild}</div>
                </div>
              </div>
              <div className="mt-1">
                Tổng tiền:{" "}
                {props.PriceAdult * ticketB + props.PriceChild * ticketA}
              </div>
              <div className="form-group col-xs-12">
              <label className="mt-1">Ghi chú: </label>
                <textarea
                  name="textarea"
                  maxLength="200"
                  style={{height : 150}}
                  className="form-textarea"
                  value={temp}
                  onChange={(e) => {
                    // <signupbtn></signupbtn>
                    setTemp(e.target.value);
                  }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Signupbtn);
