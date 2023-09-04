import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../pages/Contact.css';

const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [queries, setQueries] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_yhnrkdw';
    const templateID = 'template_zcp5p4s';
    const userID = 'A8dIRtbpOSpYTOe5_';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: `Full Name: ${name}\nEmail: ${email}\nMobile: ${phoneNumber}\nQueries: ${queries}`,
      reply_to: email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (result) => {
          alert('Email Sent Successfully');
          console.log('Email sent successfully:', result.text);

          // Clear the input fields
          setEmail('');
          setPhoneNumber('');
          setName('');
          setQueries('');
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };

  return (
    <div className="mt-4 min-h-screen flex items-center justify-center " style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form className='font-serif  rounded-lg blur-form' >
        <h1 className=" mt-12 text-center text-xl md:text-2xl lg:text-3xl font-semibold  text-white mb-8">Contact Us Form</h1>
        <div className="px-8 flex flex-col items-center md:flex-row md:space-x-24  ">
          <div className="text-white flex flex-col  mb-  md:space-y-6">
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
            <input type="tel"
            placeholder="Mobile"
            value={phoneNumber}
            onChange={(e) => {
             const inputValue = e.target.value;
              const numericValue = inputValue.replace(/\D/g, '');
              const limitedValue = numericValue.slice(0, 10);
            setPhoneNumber(limitedValue);}}
            required
            className="input custom-input md:text-2xl md:mb-4" />
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
                if (words.length >= 50 && e.key !== 'Backspace') {
                  e.preventDefault(); // Prevent further input
                }
              }}
              required
              className="input custom-input md:text-2xl mb-12"
              style={{ resize: 'none' }}
            />
            <button type="submit" className="mb-2 md:mt-4 md:ml-12 md:mr-12 pt-2 mr-4 ml-4 pb-2 text-m border rounded-xl md:text-3xl ">
              Send
            </button>
          </div>
          <div className="flex flex-col space-y-4 mb-10 pb-16 md:mt-2 md:p-12 ">
          <p className="bg-black bg-opacity-50 py-2 rounded-lg text-xs md:text-xl "> 
            <a href="tel:9894226269">Yuvaraj SJ: <br /> 9894226269</a></p>
          <p className=" bg-opacity-50 py-2 rounded-lg text-xs md:text-xl">
            <a href="tel:9894226269">Jeesmon SJ: <br />9894226269</a>
          </p>
          <p className="bg-black bg-opacity-50  rounded-lg text-xs md:text-xl">
            <a href="tel:9894226269">Sangamithra: <br />9894226269</a>
          </p>

            
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUS;
