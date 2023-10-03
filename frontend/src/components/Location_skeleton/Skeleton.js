import Location from './Location.js';
import React from "react";
import { useParams } from "react-router-dom";

export const Skeleton = () => {
  const { id } = useParams();
  const locations = [
    {
        id:1,
        heading:'New Delhi',
        description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
        c1name:'Humayun\'s tomb',
        c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
        c2name:'India Gate',
        c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
        c3name:'Lodhi Garden',
        c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',

    },
    {
      id:2,
      heading:'Jaipur',
      description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
      c1name:'Humayun\'s tomb',
      c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
      c2name:'India Gate',
      c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
      c3name:'Lodhi Garden',
      c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
      
  },
  {
    id:3,
    heading:'Pune',
    description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
    c1name:'Humayun\'s tomb',
    c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
    c2name:'India Gate',
    c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
    c3name:'Lodhi Garden',
    c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
    
},
{
  id:4,
  heading:'Kolkata',
  description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
  c1name:'Humayun\'s tomb',
  c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c2name:'India Gate',
  c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c3name:'Lodhi Garden',
  c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  
},
{
  id:5,
  heading:'Hyderabad',
  description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
  c1name:'Humayun\'s tomb',
  c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c2name:'India Gate',
  c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c3name:'Lodhi Garden',
  c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  
},
{
  id:6,
  heading:'Agra',
  description:'It has been termed as the capital since ancient times or for over a thousand years. Besides, it was also termed as the capital of the state during the rule of the Muslim Kings. For instance, the Delhi of the current time was established by Shah Jahan. The palace of the city was the red fort back then. The ancient Delhi was present close to the Chandni Chowk and the Red Fort. Back in the ancient time, there used to be a beautiful lake situated near the Chandni Chowk. While Delhi was under the rule of Altumash, and Qutubudin-Aibak, it was located nearer to the Mehrauli and Qutub Minar. Whereas, during the rule of Lodi dynasty, the locations closer to the Lodi gardens and the tombs became their official headquarters. Similarly, every Muslim king decided to take up the locations for themselves according to their needs or choices.',
  c1name:'Humayun\'s tomb',
  c1img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c2name:'India Gate',
  c2img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  c3name:'Lodhi Garden',
  c3img:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG',
  
},
    // Add more locations...
  ];
  const locationData = locations.find((location) => location.id === parseInt(id));
  const {
    heading,
    description,
    c1name,
    c1img,
    c2name,
    c2img,
    c3name,
    c3img,
  } = locationData;
  return (
    <div>
      <Location
        heading={heading}
        description={description}
        c1name={c1name}
        c1img={c1img}
        c2name={c2name}
        c2img={c2img}
        c3name={c3name}
        c3img={c3img}
      />
    </div>
  );
};

