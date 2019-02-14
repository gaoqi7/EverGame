import React from "react";
import "../wrapper/wrapper.css";

function Wrapper() {
  return (
    <div className="wrapper">

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="heading">EverGame</h3>
                <strong>EG</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="google.com">
                        <i className="fas fa-briefcase"></i>
                        Your List
                    </a>
                </li>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-home"></i>
                        Home
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="google.com">Home 1</a>
                        </li>
                        <li>
                            <a href="google.com">Home 2</a>
                        </li>
                        <li>
                            <a href="google.com">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-briefcase"></i>
                        About
                    </a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>
                        Games
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="google.com">Multiplayer</a>
                        </li>
                        <li>
                            <a href="google.com">Action</a>
                        </li>
                        <li>
                            <a href="google.com">RPG</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-image"></i>
                        Movies
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-question"></i>
                        Concerts
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-paper-plane"></i>
                        Contact
                    </a>
                </li>
            </ul>

            {/* <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul> */}
        </nav>

        <div id="content">

            <div className="container-fluid headingHolder">

                <button type="button" id="sidebarCollapse" className="btn btn-danger headingLeft">
                    {/* <i className="fas fa-align-left"></i> */}
                    <span>Retract</span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                <button type="button" className="btn btn-primary loginBtn">Login</button>

            </div>
            
            <div className="logoHolder">
                <div className="logo">EverGame </div>
            </div>

                <div className="carouselHolder">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="1000">
                            <img src="https://d1pqlgpcx1bu0k.cloudfront.net/static/img/GOW-OG-image.jpg" className="" alt="..."></img>
                            </div>
                            <div className="carousel-item"  data-interval="1000">
                            <img src="https://cdn.gamerant.com/wp-content/uploads/The-Last-of-Us-Part-Two-Joel-and-Ellie-dead-or-alive-PSX-2017.jpg.optimal.jpg" className="" alt="..."></img>
                            </div>
                            <div className="carousel-item"  data-interval="1000">
                            <img src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2017/06/anthem-dylan.jpg.adapt.crop191x100.1200w.jpg" className="" alt="..."></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="listDiv">

                    <div className="listHolder">

                        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/92/a1/ee/92a1ee90-b019-14b4-96e9-537368d39ee2/mzl.tpzbfswp.jpg/300x0w.jpg" className="listImg" alt="..."></img>

                        <p>Name: Chrono Trigger</p>
                        <p className="listDescription">Description: Chrono Trigger[a] is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System in 1995. Chrono Trigger's development team included three designers that Square dubbed the "Dream Team": Hironobu Sakaguchi, the creator of Square's successful Final Fantasy series; Yuji Horii, a freelance designer and creator of Enix's popular Dragon Quest series; and Akira Toriyama, a manga artist famed for his work with Dragon Quest and Dragon Ball. Kazuhiko Aoki produced the game,[6] Masato Kato wrote most of the plot, while composer Yasunori Mitsuda wrote most of the soundtrack before falling ill and deferring the remaining tracks to Final Fantasy series composer Nobuo Uematsu.[3][7] The game's story follows a group of adventurers who travel through time to prevent a global catastrophe.</p>

                        <div className="countdownTimer"> 00:00:00 </div>

                    </div>

                    <div className="listHolder">

                        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/92/a1/ee/92a1ee90-b019-14b4-96e9-537368d39ee2/mzl.tpzbfswp.jpg/300x0w.jpg" className="listImg" alt="..."></img>

                        <p>Name: Chrono Trigger</p>
                        <p className="listDescription">Description: Chrono Trigger[a] is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System in 1995. Chrono Trigger's development team included three designers that Square dubbed the "Dream Team": Hironobu Sakaguchi, the creator of Square's successful Final Fantasy series; Yuji Horii, a freelance designer and creator of Enix's popular Dragon Quest series; and Akira Toriyama, a manga artist famed for his work with Dragon Quest and Dragon Ball. Kazuhiko Aoki produced the game,[6] Masato Kato wrote most of the plot, while composer Yasunori Mitsuda wrote most of the soundtrack before falling ill and deferring the remaining tracks to Final Fantasy series composer Nobuo Uematsu.[3][7] The game's story follows a group of adventurers who travel through time to prevent a global catastrophe.</p>

                        <div className="countdownTimer"> 00:00:00 </div>

                    </div>

                    <div className="listHolder">

                        <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/92/a1/ee/92a1ee90-b019-14b4-96e9-537368d39ee2/mzl.tpzbfswp.jpg/300x0w.jpg" className="listImg" alt="..."></img>

                        <p>Name: Chrono Trigger</p>
                        <p className="listDescription">Description: Chrono Trigger[a] is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System in 1995. Chrono Trigger's development team included three designers that Square dubbed the "Dream Team": Hironobu Sakaguchi, the creator of Square's successful Final Fantasy series; Yuji Horii, a freelance designer and creator of Enix's popular Dragon Quest series; and Akira Toriyama, a manga artist famed for his work with Dragon Quest and Dragon Ball. Kazuhiko Aoki produced the game,[6] Masato Kato wrote most of the plot, while composer Yasunori Mitsuda wrote most of the soundtrack before falling ill and deferring the remaining tracks to Final Fantasy series composer Nobuo Uematsu.[3][7] The game's story follows a group of adventurers who travel through time to prevent a global catastrophe.</p>

                        <div className="countdownTimer"> 00:00:00 </div>

                    </div>

                </div>

        </div>
    </div>
  );
}

export default Wrapper;