import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

function mapStateToProps(state) {
  return {
    listTour: state.TourReducer.listTour,
    // moTa: state.InfoReducer.moTa,
    // listImg: state.InfoReducer.listImg,
  };
}

// const columns = [{
//     header: 'Name',
//     accessor: 'name' // Cái này sẽ là đại diện cho giá trị của thuộc tính của phần tử ở cột này. Với thuộc tính đơn giản thì chỉ cần truyền vào key của đối tượng trong data.
//   }, {
//     header: 'Age',
//     accessor: 'age',
//     Cell: props => <span className='number'>{props.value}</span> // Tùy biến component Cell.
//   }, {
//     id: 'friendName', // Khi accessor không phải là 1 chuỗi thì phải cung cấp id để đại diện cho thuộc tính cột.
//     header: 'Friend Name',
//     accessor: d => d.friend.name // Tùy biến giá trị đại diện cho giá trị của thuộc tính của phần tử ở cột này.
//   }, {
//     header: props => <span>Friend Age</span>, // Tùy biến component Header
//     accessor: 'friend.age' // Khi 1 thuộc tính của dữ liệu có kiểu là 1 đối tượng, chúng ta cũng có thể cung cấp đường dẫn đến thuộc tính cần lấy giá trị.
//   }];

class AdminPage extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6 col-md-6">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {this.props.listTour.map((spTour, _idx) => {
                  return (
                    <tr key={_idx}>
                      <th scope="row">{_idx}</th>
                      <td>{spTour.nameTour}</td>
                      <td>{spTour.nameTour}</td>
                      <td>{spTour.nameTour}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class="col-6 col-md-6">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {this.props.listTour.map((spTour, _idx) => {
                  return (
                    <tr key={_idx}>
                      <th scope="row">{_idx}</th>
                      <td>{spTour.nameTour}</td>
                      <td>{spTour.nameTour}</td>
                      <td>{spTour.nameTour}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(AdminPage);
