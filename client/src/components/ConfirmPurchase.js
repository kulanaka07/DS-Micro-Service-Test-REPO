import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

export default function ConfirmPurchase() {
  const form = useRef();
  const location = useLocation();
  const { customerName,  deliveryAddress, tot, email } = location.state;

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6evvsp",
        "template_ghsotz8",
        form.current,
        "6LOBZyhN6QY0b3dM3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };



  return (

<section>
      <div>
        <h2>Contact Post</h2>
        <form ref={form} onSubmit={sendEmail}>
          Customer Name: 
          <input type="text"  name="user_name" value={customerName}/>
          Customer Email: 
          <input type="text"  name="user_email" value={email}/>
          <input type="text"  name="subject" value="Funky Pop clothing order" />
          <textarea name="message" cols="30" rows="10" value={`Delivery Address: ${deliveryAddress}\n Name: ${customerName}\n Order is placed Successfully `}/>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    // <div>
    //   <h2>Order Details:</h2>
      
    //   <p>Customer Name: {customerName}</p>
    //   <p>Customer Phone: {customerPhone}</p>
    //   <p>Delivery Address: {deliveryAddress}</p>
    //   <p>Total Amount: {tot}</p>
    //   <button >Confirm Order </button>
    //   </div>
    );
}
