import React from 'react';
import { Card } from './home/Card.js';
import { Carasoul } from './home/Carasoul';
import './css/home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  let cards_details = [
    {
      id: "1",
      city: "New Delhi",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
      link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
    {
      id: "2",
      city: "Jaipur",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
    {
      id: "3",
      city: "Pune",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
    {
      id: "4",
      city: "Kolkata",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
    {
      id: "5",
      city: "Hyderabad",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
    {
      id: "6",
      city: "Agra",
      desciption:
        "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG"
    },
  ];

  return (
    <>
      <Carasoul />
      <div>
        <p className="Location">Choose Your Next Destination</p>
      </div>
      <div className="cards">
        <div className="card-container">
          <div className="card-grid">
            {cards_details.map((item) => (
              <Link to={`/location/${item.id}`} key={item.id} className="grid-item">
                <Card title={item.city} link={item.link} btn="Explore"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
