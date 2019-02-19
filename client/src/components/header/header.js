import React from "react";
import Login from "../../pages/Login";
import "../header/header.css";

// class Header extends React.Component{

//     constructor(props, context) {
//         super(props, context)
//         // console.log(this.props);
//     }

//     render() {    
//     return (

//         <div className="container-fluid headingHolder">

//             <button type="button" id="sidebarCollapse" className="btn btn-warning headingLeft">
//                 <span>Retract</span>
//             </button>
//             <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <i className="fas fa-align-justify"></i>
//             </button>
//             {/* <button type="button" className="btn btn-warning loginBtn">Login</button> */}
//             <Login handleLogout={this.props.handleLogout} retrieveList={this.props.retrieveList} reload={this.props.reload}/>

//         </div>
//     );
//     }
// }

// export default Header;


function Header(props) {
    console.log(props);
    return (

        <div className="container-fluid headingHolder">

            <button type="button" id="sidebarCollapse" className="btn btn-warning headingLeft">
                <span>Retract</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify"></i>
            </button>
            {/* <button type="button" className="btn btn-warning loginBtn">Login</button> */}
            <Login reload={props.reload}/>

        </div>
    );
}

export default Header;