import React, { Component } from "react";
import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-color fixed-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="/Login">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Header - set the background image for the header in the line below*/}
                <header className="py-5 bg_img img-fluid" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6136262/pexels-photo-6136262.jpeg?cs=srgb&amp;dl=pexels-quang-nguyen-vinh-6136262.jpg&amp;fm=jpg")' }}>
                    <div className="text-center my-5">
                        <img className="img-fluid rounded-circle mb-4" src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg" alt="..." />
                        <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
                        <p className="text-white-50 mb-0"></p>
                    </div>
                </header>

            </div >
        )
    }
}

