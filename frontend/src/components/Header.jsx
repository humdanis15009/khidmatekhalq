

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pop, setPop] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setMessage("Please fill in all fields.");
      return;
    }
    try {
      // await addDoc(collection(db, "contactRequests"), { name, phone });
      setMessage("Thank you! We will contact you shortly.");
      setName("");
      setPhone("");
    } catch (error) {
      setMessage("Error submitting the form. Please try again later.");
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="flex mx-2 justify-between items-center">
        <div
          className="lg:text-[70px] flex text-[29px] lg:leading-[60px] leading-[26px] pt-1 font-extrabold"
          style={{ fontFamily: "Dancing Script" }}
        >
          Aasra Foundation
          <img
            className="lg:h-[86px] lg:w-20 h-9 w-8 lg:ml-0 ml-1"
            src="images/logo2.png"
          />
        </div>

        <nav className="hidden mt-16 text-2xl md:flex space-x-8 items-center">
          <ul
            className={`lg:flex lg:static lg:flex-row lg:bg-transparent lg:gap-x-20 lg:text-2xl text-sm font-semibold flex flex-col bg-gray-800 lg:top-0 lg:left-0 absolute left-[10px] w-[90%] lg:w-auto transition-transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <li className="cursor-pointer relative group py-2 lg:py-0 text-center">
              <p className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full">
                Home
              </p>
            </li>

            <li className="cursor-pointer relative group py-2 lg:py-0 text-center">
              <Link
                className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
                to="/Services"
              >
                Services
              </Link>
            </li>

            <li className="cursor-pointer relative group py-2 lg:py-0 text-center">
              <p className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full">
                Donate Now
              </p>
            </li>

            <li className="cursor-pointer relative group py-2 lg:py-0 text-center">
              <Link
                className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
                to="/ZakatCalculator"
              >
                Zakat Calculator
              </Link>
            </li>

            <li
              className="cursor-pointer relative group py-2 lg:py-0 text-center"
              onClick={() => setPop((prev) => !prev)}
            >
              <p
                className={`after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full ${
                  pop ? "text-green-800" : "text-black"
                }`}
              >
                Contact Us &#x25BE;
              </p>
            </li>
          </ul>
          {pop && (
            <div className="absolute right-3 mt-52 w-48 bg-white shadow-md rounded-md">
              <a
                href="https://wa.me/+916394958577?text=Hello%20Aasra%20Foundation,%20I%20am%20interested%20in%20learning%20more%20about%20your%20charity%20initiatives.%20Please%20provide%20me%20with%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaWhatsapp className="inline mr-2" /> WhatsApp
              </a>
              <a
                href="mailto:aasrafoundation11@gmail.com"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <IoIosMail className="inline mr-2" /> Email
              </a>
              <button
                onClick={() => setShowContactForm(true)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Talk to us...
              </button>
              <p className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Link className="hover:underline" to="/Contact">
                  View more
                </Link>
                ...
              </p>
            </div>
          )}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="material-icons">&#9776;</span>
        </button>

        {menuOpen && (
          <div className="absolute top-full w-[180px] h-[210px] right-0 lg:w-full bg-white shadow-md md:hidden">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/Services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Services
            </Link>

            <Link
              to="/donate"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Donate Now
            </Link>
            <Link
              to="/zakatCalculator"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Zakat Calculator
            </Link>
            <Link
              to="/Contact"
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact Us
            </Link>
            {pop && (
              <div className="absolute right-10 mt-64 w-48 bg-white shadow-md rounded-md">
                <a
                  href="https://wa.me/+916394958577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaWhatsapp className="inline mr-2" /> WhatsApp
                </a>
                <a
                  href="mailto:aasrafoundation11@gmail.com"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <IoIosMail className="inline mr-2" /> Email
                </a>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Talk to us...
                </button>
                <p className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <Link className="hover:underline" to="/Contact">
                    View more
                  </Link>
                  ...
                </p>
              </div>
            )}
          </div>
        )}

        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-600"
                onClick={() => {
                  setShowContactForm(false);
                  setMessage("");
                }}
              >
                &times;
              </button>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h2 className="text-lg text-center font-bold text-gray-700">
                  Contact Us
                </h2>
                {message && <p className="text-sm text-green-600">{message}</p>}
                <div>
                  <label className="block text-sm text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
