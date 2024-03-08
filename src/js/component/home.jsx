import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	const cardImages = ["https://images.hola.com/imagenes/viajes/20220930218161/salto-angel-venezuela-catarata-mas-alta-mundo/1-145-411/salto-del-angel-canaima-venezuela-t.jpg",
	"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/01/6b/6f/caption.jpg?w=1200&h=-1&s=1",
	"https://deguantasoy.com/wp-content/uploads/2023/05/patanemo.jpg",
	"https://cdn0.geoenciclopedia.com/es/posts/7/8/6/pico_bolivar_687_orig.jpg"]
	return (
<>               
			<Navbar/>
		<div className = "container">
			<Jumbotron/>
			
			<div className="d-flex">
			{cardImages.map((item,index) => {
				return(
					<Card key={index} img={item}/>
				)
			})}
			</div>
			
		</div>

	</>
	);
};

export default Home;
