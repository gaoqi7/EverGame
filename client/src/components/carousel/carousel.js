import React from "react";
import "../carousel/carousel.css";

function Carousel() {
  return (

    <div className="carouselHolder">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="1000">
                <img src="https://www.platinumgames.com/wp-content/uploads/2018/06/baby_eyecatch.png" className="" alt="..."></img>
                </div>
                <div className="carousel-item"  data-interval="1000">
                <img src="https://compass-ssl.xbox.com/assets/fb/8b/fb8b14bd-cc80-470e-83af-f8f9707c835f.jpg?n=Sekiro-Shadows-Die-Twice_GLP-Page-Hero-1084_1920x835.jpg" className="" alt="..."></img>
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

  );
}

export default Carousel;