import styles from "./GetConsultation.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const GetConsultation = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lehmzes",
        "template_ix3pkbm",
        form.current,
        "fMeVZQyFTdWD2hYOJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );  setFirstName('');
      setLastName('');
  };
  
 return (
 <form className={styles.mainblock} ref={form} onSubmit={sendEmail}>
    <p className={styles.header}>Отримати консультацію</p>
      <input
        className={styles.input}
        id="first_name"
        type="text"
        onChange={event => setFirstName(event.target.value)}
        value={firstName}
        name="user_name"
        placeholder="Ім'я"
      /> 
     
      <input
        required
        className={styles.input}
        type="number"
        name="user_number"
        placeholder="Номер телефону"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
       <button  className={styles.btn} type="submit">
        Надіслати
      </button> 
    
    </form> 
  );
};
export default GetConsultation;
