import { Link } from "react-router-dom";
import Card from "../home/Card";
import Carousel2 from "./Caraouselskel.js";
import "./skeleton.css";
export const Location=({heading,description,c1name,c1img,c2name,c2img,c3name,c3img,})=>
{
  let images_detail =
  [
    {
      id:1,
      img:c1img,
      names:c1name
    },
    {
      id:2,
      img:c2img,
      names:c2name
    },
    {
      id:3,
      img:c3img,
      names:c3name
    },
  ]
  return(
    <>    
    <h1 class='heading'>{heading}</h1>
    <div class="settingCarousel">
      <div class="carousel-container">
        <Carousel2 />
      </div>
      <p class="Ctext">{description}</p>
    </div>
    <div className="cards">
        <div className="card-container">
          <div className="card-grid">
            {images_detail.map((item) => (
              <Link to={`/booking/${item.names}`} key={item.names} className="grid-item">
                <Card title={item.names} link={item.img} btn="Book Now"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
  </>
  );
}

export default Location;
