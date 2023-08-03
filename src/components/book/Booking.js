import { Formskel } from "./Formskel";
import { useParams } from "react-router-dom";
import "./booking.css";
export const Booking = () => {
    const { heading } = useParams();


    let images=
    [
        {
            heading:'Humayun\'s tomb',
            image:'https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            heading:'India Gate',
            image:'https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Qutub-Minar.jpg'
        },
        {
            heading:'Lodhi Garden',
            image:'https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Lotus-Temple.jpg'
        }
    ]
    const locationData = images.find((location) => location.heading === heading);
        

    return (
      <>
      <div class="container booking">
        <div class="image-container">
          <h1>{heading}</h1>
          <img src={locationData.image} alt="..." />
        </div>
        <div class="form-container">
          <Formskel />
        </div>
      </div>
    </>

  );
};
