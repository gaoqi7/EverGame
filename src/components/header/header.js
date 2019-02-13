import React from "react";
import "../header/header.css";

function Header() {
  return (
           
           <div className="container-fluid headingHolder">

                <button type="button" id="sidebarCollapse" className="btn btn-warning headingLeft">
                    <span>Retract</span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                <button type="button" className="btn btn-warning loginBtn">Login</button>

            </div>
  );
}

export default Header;