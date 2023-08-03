import "./formskel.css"
import React, { useState } from 'react';
export const Formskel=()=>
{


  const [formInput, setFormInput] = useState({
    name: '',
    phone: '',
    emailID: '',
    date: '',
    count_children: 0,
    count_adult: 0,
    count_abroad:0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: value,
    }));
  };

  const handleIncrement = (field) => {
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [field]: Math.min(prevFormInput[field] + 1, 10), // Increment count, but limit to max 10
    }));
  };

  const handleDecrement = (field) => {
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [field]: Math.max(prevFormInput[field] - 1, 0), // Decrement count, but limit to min 0
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', formInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Enter your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Eg: Himank verma"
          onChange={handleInput}
          value={formInput.name}
        />
      </div>
      <div className="mb-3">
        <label>Enter your Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Eg: 9643619579"
          onChange={handleInput}
          value={formInput.phone}
        />
      </div>

      <div className="mb-3">
        <label>Enter your Email</label>
        <input
          type="text"
          name="emailID"
          placeholder="Eg: xyz@xyz.com"
          onChange={handleInput}
          value={formInput.emailID}
        />
      </div>

      <div>
        <label>Book your date</label>
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={formInput.date}
        />
        <input type="hidden" name="csrfToken" value="1234567890abcdef" />
        <input type="hidden" name="city" value="DELHI" />
        <input type="hidden" name="monument" value="Humayuns Tomb" />
        <input type="hidden" name="price_adult" value="35" />
        <input type="hidden" name="price_children" value="0" />
        <input type="hidden" name="price_abroad" value="550" />
      </div>

      
      <div className="counter-group">
        <div>
          <label htmlFor="count_children">Children:</label>
          <button type="button" className="small-button" onClick={() => handleDecrement('count_children')}>-</button>
          <input
            type="number"
            id="count_children"
            name="count_children"
            value={formInput.count_children}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button type="button" className="small-button" onClick={() => handleIncrement('count_children')}>+</button>
        </div>
        <div>
          <label htmlFor="count_adult">Adults:</label>
          <button type="button" className="small-button" onClick={() => handleDecrement('count_adult')}>-</button>
          <input
            type="number"
            id="count_adult"
            name="count_adult"
            value={formInput.count_adult}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button type="button" className="small-button" onClick={() => handleIncrement('count_adult')}>+</button>
        </div>
        <div>
          <label htmlFor="count_abroad">Foreigners:</label>
          <button type="button" className="small-button" onClick={() => handleDecrement('count_abroad')}>-</button>
          <input
            type="number"
            id="count_abroad"
            name="count_abroad"
            value={formInput.count_abroad}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button type="button" className="small-button" onClick={() => handleIncrement('count_abroad')}>+</button>
        </div>
      </div>
      
     
      <br />
      <br />
      <button type="submit">Book Now</button>
      <br />
      <br />
    </form>
  );


        
}