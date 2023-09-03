import "../pages/Contact.css"
const ContactUS = () => {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form className='rounded-lg blur-form'>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">Contact Us Form</h1>
        <div className="p-8 flex flex-col items-center md:flex-row md:space-x-24 mb ">
          <div className="text-white flex flex-col mb-4 md:mb-0 ">
            <input type="text" placeholder="Full Name" required className="input custom-input" />
            <input type="email" placeholder="Email" required className="input custom-input" />
            <input type="text" placeholder="Mobile" required className="input custom-input" />
            <textarea
              placeholder="Enter Your Queries"
              required
              defaultValue={""}
              className="input custom-input"
              style={{ resize: 'none' }}
            />
            <button type="submit" className="bg-gray-900 text-white md:w-auto">
              Send
            </button>
          </div>
          <div className="flex flex-col space-y-4 mb-12">
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">President: 154</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Jees: 456</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Hari: 54578</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">President: 154</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Jees: 456</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Hari: 54578</p>
          </div>
        </div>
      </form>
    </div>
      
    );
  
};
export default ContactUS;