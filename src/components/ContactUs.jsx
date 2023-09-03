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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form className='rounded-lg blur-form' onSubmit={sendEmail}>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">Contact Us Form</h1>
        <div className="p-8 flex flex-col items-center md:flex-row md:space-x-24 mb ">
          <div className="text-white flex flex-col  mb-4 md:mb-0 ">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input custom-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input custom-input"
            />
            <input
              type="text"
              placeholder="Mobile"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="input custom-input"
            />
            <textarea
              placeholder="Enter Your Queries"
              value={queries}
              onChange={(e) => setQueries(e.target.value)}
              required
              className="input custom-input"
              style={{ resize: 'none' }}
            />
            <button type="submit" className="md:ml-6 p-3 text-xs border rounded-xl">
              Send
            </button>
          </div>
          <div className="flex flex-col space-y-4 mb-12">
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-xs">Jeesmon S J: 9894226269</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg text-xs">Sufiyaan. I: 9444303122</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUS;
