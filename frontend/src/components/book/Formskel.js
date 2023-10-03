import "./formskel.css";
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import QrCode from 'react-qr-code';


export const Formskel = (props) => {
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    email: "",
    identification_type: "",
    identification_number: "",
    date: new Date(),
    count_children: 0,
    count_adult: 0,
    count_abroad: 0,
    amount:0,
    paymentId:""
  });

  const [paymentId, setPaymentId] = useState("");
  const [amount, setAmount] = useState(0);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //validation of phone
  const isValidPhoneNumber = (number) => {
    const phoneNumberRegex =
      /^(?:(?:\+|0{0,2})91(\s*[ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return phoneNumberRegex.test(number);
  };
  //validation email
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const isValidIdentification = (id_num) => {
    if (formInput.identification_type === "Adhar") {
      const adharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      return adharRegex.test(id_num);
    } else if (formInput.identification_type === "Passport") {
      const passportRegex = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
      return passportRegex.test(id_num);
    }
  };

  const isValidDate = (date) => {
    const currentDate = new Date();
    const enteredDate = new Date(date);

    const currentDateStr = currentDate.toISOString().substr(0, 10); // YYYY-MM-DD
    const enteredDateStr = enteredDate.toISOString().substr(0, 10); // YYYY-MM-DD

    return enteredDateStr >= currentDateStr;
  };

  const [isFormValid, setIsFormValid] = useState(false);

  // Update overall form validation status whenever formInput changes
  useEffect(() => {
    const isNameValid = formInput.name.trim() !== "";
    const isPhoneValid = isValidPhoneNumber(formInput.phone);
    const isEmailValid = isValidEmail(formInput.email);
    const isIdValid = isValidIdentification(formInput.identification_number);
    const isDateValid = isValidDate(formInput.date);

    setIsFormValid(
      isNameValid && isPhoneValid && isEmailValid && isIdValid && isDateValid
    );
  }, [formInput]);

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

  const paymentHandler = async (e) => {
    e.preventDefault();

    try {
      const amount = 200;
      const API_URL = 'http://localhost:8080/payment';
      const orderUrl = `${API_URL}/order?amount=${amount}`;
      const response = await axios.get(orderUrl);
      const { data } = response;
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        name: "Testing",
        description: "Some Description",
        order_id: data.id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            const captureUrl = `${API_URL}/capture`;
            const captureResponse = await axios.post(captureUrl, { amount, paymentId });
            console.log(captureResponse.data);

            // Payment is successful, resolve the promise
            setAmount(amount);
            setPaymentId(paymentId)  ;
            paymentPromiseResolver();
          } catch (err) {
            console.log(err);
            paymentPromiseRejecter(err);
          }
        },
        theme: {
          color: "#686CFD",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.log(err);
      paymentPromiseRejecter(err);
    }
  };

  let paymentPromiseResolver;
  let paymentPromiseRejecter;
  const paymentPromise = new Promise((resolve, reject) => {
    paymentPromiseResolver = resolve;
    paymentPromiseRejecter = reject;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await paymentHandler(e);
      await paymentPromise;
      const updatedFormInput = {
        ...formInput,
        amount:amount,
        paymentId: paymentId,
      };
      
      const response = await axios.post(
        "http://localhost:8080/users",
        updatedFormInput
      )
        // console.log("Successful:", response.data),
        setIsPaymentSuccessful(true);
        onOpen();
      

      
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  


  const nameValidationClass =
    formInput.name.trim() !== "" ? "valid" : "invalid";
  const phoneValidationClass = isValidPhoneNumber(formInput.phone)

    ? "valid"
    : "invalid";
  const emailValidationClass = isValidEmail(formInput.email)
    ? "valid"
    : "invalid";
  const idValidationClass = isValidIdentification(
    formInput.identification_number
  )
    ? "valid"
    : "invalid";
  const dateValidationClass = isValidDate(formInput.date) ? "valid" : "invalid";

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
          className={`input-field ${nameValidationClass}`}
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
          className={`input-field ${phoneValidationClass}`}
        />
        {!isValidPhoneNumber(formInput.phone) && (
          <div className="error-message">Enter a valid Indian phone number</div>
        )}
      </div>

      <div className="mb-3">
        <label>Enter your Email</label>
        <input
          type="text"
          name="email"
          placeholder="Eg: xyz@xyz.com"
          onChange={handleInput}
          value={formInput.email}
          className={`input-field ${emailValidationClass}`}
        />
        {/* {!isValidEmail(formInput.email)&&(<div className="error-message">Enter a valid Indian phone number</div>)} */}
      </div>

      <div className="mb-3">
        <label>Select Identification Type</label>
        <select
          name="identification_type"
          onChange={handleInput}
          value={formInput.identification}
        >
          <option value="">Select</option>
          <option value="Adhar">Adhar</option>
          <option value="Passport">Passport</option>
        </select>

        <input
          type="text"
          name="identification_number"
          onChange={handleInput}
          value={formInput.identification_number}
          className={`input-field ${idValidationClass}`}
        />
      </div>

      <div>
        <label>Book your date</label>
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={formInput.date}
          className={`input-field ${dateValidationClass}`}
        />
        <input type="hidden" name="csrfToken" value="1234567890abcdef" />
        <input type="hidden" name="city" value="DELHI" />
        <input type="hidden" name="monument" value={props.location} />
        <input type="hidden" name="price_adult" value="35" />
        <input type="hidden" name="price_children" value="0" />
        <input type="hidden" name="price_abroad" value="550" />
      </div>

      <div className="counter-group">
        <div>
          <label htmlFor="count_children">Children:</label>
          <button
            type="button"
            className="small-button"
            onClick={() => handleDecrement("count_children")}
          >
            -
          </button>
          <input
            type="number"
            id="count_children"
            name="count_children"
            value={formInput.count_children}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button
            type="button"
            className="small-button"
            onClick={() => handleIncrement("count_children")}
          >
            +
          </button>
        </div>
        <div>
          <label htmlFor="count_adult">Adults:</label>
          <button
            type="button"
            className="small-button"
            onClick={() => handleDecrement("count_adult")}
          >
            -
          </button>
          <input
            type="number"
            id="count_adult"
            name="count_adult"
            value={formInput.count_adult}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button
            type="button"
            className="small-button"
            onClick={() => handleIncrement("count_adult")}
          >
            +
          </button>
        </div>
        <div>
          <label htmlFor="count_abroad">Foreigners:</label>
          <button
            type="button"
            className="small-button"
            onClick={() => handleDecrement("count_abroad")}
          >
            -
          </button>
          <input
            type="number"
            id="count_abroad"
            name="count_abroad"
            value={formInput.count_abroad}
            onChange={handleInput}
            min="0"
            max="10"
          />
          <button
            type="button"
            className="small-button"
            onClick={() => handleIncrement("count_abroad")}
          >
            +
          </button>
        </div>
      </div>

      <br />
      <br />
      <button
        className="book"
        type="submit"
        // disabled={!isFormValid}  
        onClick={(e) => {
          if (!isFormValid) {
            e.preventDefault(); // Prevent the form from submitting
            alert(
              "Please fill in all the required fields with valid information."
            );
          }
        }}
      >
        Book Now
      </button>
      <br />
      <br />
      {isPaymentSuccessful && 
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" height="150vh" isCentered>
        <ModalOverlay />
        <ModalContent display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <ModalHeader>Payment Successful</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <QrCode value={paymentId} />
          </div>
          <h3>Payment was successful. Thank you for booking!</h3>
          </ModalBody>
        </ModalContent>
      </Modal>
      }
      
    </form>
    
  );
};
