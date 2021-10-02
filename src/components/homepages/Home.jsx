import React, { Fragment } from "react";
import img from "../../img/slider_background.jpg";
import img2 from "../../img/colorlib.png";
import "./main_styles.css";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <Fragment>

<div className="super_container">

	<div className="home">
		<div className="home_background_container prlx_parent">
			<div className="home_background prlx" style={{"background-image":`url(${img})`}}></div>
		</div>
		
		<div className="hero_slider_container">
			
			<div className="owl-carousel owl-theme hero_slider">

				<div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
					<span>Portafolio</span>
					<span>Manuel David Buitrago Sotelo</span>
					<span>Conocer mas de mi</span>
					<div className="button icon_box_button trans_200">
						<Link to="/Portafolio"> <a className="trans_200">Ver Portafolio</a> </Link>
					</div>
				</div>
                </div>
                </div>
                </div>
                </div>

        </Fragment>
    );
 };
 export default Home