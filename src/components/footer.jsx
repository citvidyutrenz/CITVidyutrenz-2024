import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bottom-0 justify-center flex flex-col  text-white text-center md:flex-row lg:space-x-40"
      style={{
        WebkitBackdropFilter: "blur(3px)", // Apply the blur effect using -webkit-backdrop-filter
        backdropFilter: "blur(3px)",
      }}
    >
      <div className="md:flex flex items-center  justify-center space-x-10 mb-1 md:mb-0 text-l md:text-xl">
        <a href="https://www.facebook.com/">
          <FaYoutube className="" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com/">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="flex md:justify-center mx-10 text-xs mb-1 md:text-xs md:mb-0">
        <p className="mx-10">&copy; Copyright 2023</p>
      </div>
      <div className="text-[10px] md:text-xs ">
        <p className="text-xs">Chennai Institute of Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
