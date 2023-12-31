import { useState } from "react";
import emailjs from "emailjs-com";
import "../pages/Contact.css";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [queries, setQueries] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_yhnrkdw";
    const templateID = "template_zcp5p4s";
    const userID = "A8dIRtbpOSpYTOe5_";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: `Full Name: ${name}\nEmail: ${email}\nMobile: ${phoneNumber}\nQueries: ${queries}`,
      reply_to: email,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        alert("Email Sent Successfully");
        console.log("Email sent successfully:", result.text);

        // Clear the input fields
        setEmail("");
        setPhoneNumber("");
        setName("");
        setQueries("");
      },
      (error) => {
        console.error("Email sending failed:", error.text);
      }
    );
  };

  return (
    <div
      className="mt-4 min-h-screen flex items-center justify-center w-[80%] md:w-auto"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <form className=" rounded-lg blur-form" onSubmit={sendEmail}>
        <h1 className="  text-center text-xl md:text-2xl lg:text-3xl font-semibold  text-white mb-8">
          Contact Us
        </h1>
        <div className="font-serif px-8 flex flex-col items-center md:flex-row md:space-x-24  ">
          <div className="text-white flex flex-col   md:space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input custom-input md:text-2xl "
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input custom-input md:text-2xl "
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={phoneNumber}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/\D/g, "");
                const limitedValue = numericValue.slice(0, 10);
                setPhoneNumber(limitedValue);
              }}
              required
              className="input custom-input md:text-2xl md:mb-4"
            />
            <textarea
              placeholder="Enter Your Queries"
              value={queries}
              onChange={(e) => {
                const inputValue = e.target.value;
                const words = inputValue.split(/\s+/); // Split text into words
                if (words.length <= 50) {
                  setQueries(inputValue);
                }
              }}
              onKeyDown={(e) => {
                const inputValue = e.target.value;
                const words = inputValue.split(/\s+/);
                if (words.length >= 50 && e.key !== "Backspace") {
                  e.preventDefault(); // Prevent further input
                }
              }}
              required
              className="input custom-input md:text-2xl mb-12"
              style={{ resize: "none" }}
            />
            <button
              type="submit"
              className="mb-2 md:mt-4 md:ml-12 md:mr-12 pt-2 mr-4 ml-4 pb-2 text-m border rounded-xl md:text-3xl "
            >
              Send
            </button>
          </div>
          <div className=" flex flex-col space-y-4  pb-16 md:mt-2 md:pr-12 ">
            <p className="text-xl text-center bg-black bg-opacity-50 p-4 rounded-lg  md:text-2xl md:pr-14   ">
              President
              <br />
              <a href="tel:7358572565" className="text-base md:text-xl  ">
                Yuvaraj <br /> 7358572565
              </a>
            </p>
            <p className="text-center bg-black bg-opacity-50 p-4 rounded-lg text-s  md:text-2xl ">
              Vice President
              <br />
              <a href="tel:9894226269" className="text-base md:text-xl">
                Jeesmon SJ <br />
                9894226269
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUS;
