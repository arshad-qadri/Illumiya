import React from 'react'
import "../../../style/navbar.css"

const Navbar = () => {
    return (
        <div  >
            <nav className="navbar navbar-expand-lg navbar-light px-lg-5 pt-3 z4">
                <div className="container-fluid mynavbar">
                    <a className="navbar-brand" href="/#">
                        <img className="logo" src="assets/images/logo.png" alt="logo" />
                    </a>
                    <button className=" toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Plans</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/#">For parents</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">For teachers</a>
                            </li>    <li className="nav-item">
                                <a className="nav-link" href="/#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contacts</a>
                            </li>

                        </ul>

                        <div className="btns d-flex align-items-center ">

                            <button className="btn  getStarted" >Get started</button>
                            <div className="user" ><i className="fas fa-user"></i></div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
