import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import QRCode from "react-qr-code";

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [isVerificationPopupOpen, setVerificationPopupOpen] = useState(false); // State to toggle second popup
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    mobileNumber: "",
    amountPaid: "",
  });

  // Handle input changes in the second popup form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Open the second popup
  const openVerificationPopup = () => {
    setVerificationPopupOpen(true);
  };

  // Close the second popup
  const closeVerificationPopup = () => {
    setVerificationPopupOpen(false);
  };

  const [amount] = useState(500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const merchantUpiId = "humdanis786@oksbi";
  const userName = "Aasra Foundation";

  const upiUrl = `upi://pay?pa=${merchantUpiId}&pn=${encodeURIComponent(
    userName
  )}&am=${amount}&cu=INR`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      title: "Provide Healthy Food for Poor People",
      description: "Provide Healthy Food for Poor People.",
      imageUrl: "/images/food.jpeg",
    },
    {
      title: "Support for Victims of Natural Disasters",
      description: "Support for Victims of Natural Disasters",
      imageUrl: "/images/disaster.jpeg",
    },
    {
      title: "Provide Shelter for Homeless Refugees",
      description: "Provide Shelter for Homeless Refugees",
      imageUrl: "/images/shelter.jpeg",
    },
    {
      title: "Donate for the Rehabilitation of Disabled Victims",
      description: "Donate for the Rehabilitation of Disabled Victims",
      imageUrl: "/images/disability.jpeg",
    },
    {
      title: "Help Restore Access to Education in Disaster Zones",
      description: "Help Restore Access to Education in Disaster Zones",
      imageUrl: "/images/educa.jpeg",
    },
    {
      title: "Urgent Aid for Fire Victims",
      description: "Urgent Aid for Fire Victims",
      imageUrl: "/images/fire.jpeg",
    },
    {
      title: "Blood Donation",
      description: "Urgent Aid for blood requirement",
      imageUrl: "/images/blood.jpeg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Nikah Junction</title>
        <meta
          name="description"
          content="Join Nikah Junction, India's trusted Muslim matrimony platform. Find your perfect life partner with ease. Register today!"
        />
        <meta
          name="keywords"
          content="Muslim matrimony, Nikah Junction, matrimony service, Muslim marriage, Islamic wedding, find rishta, matrimony India"
        />
        <meta name="author" content="Nikah Junction" />
        <link
          rel="canonical"
          href="https://nikahjunction.netlify.app/Services"
        />
        <meta property="og:title" content="Services - Nikah Junction" />
        <meta
          property="og:description"
          content="Nikah Junction helps you find your ideal life partner. Register now to connect with compatible matches!"
        />
        <meta
          property="og:image"
          content="https://nikahjunction.netlify.app/nikah-logo1.png"
        />
        <meta
          property="og:url"
          content="https://nikahjunction.netlify.app/Services"
        />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nikah Junction - Trusted Muslim Matrimony Service"
        />
        <meta
          name="twitter:description"
          content="Find your perfect Muslim partner on Nikah Junction. Register today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        /> */}
      </Helmet>
      <div className="relative">
        <div className="p-8 lg:mt-1 mx-auto max-w-6xl rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-2xl"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h2 className="lg:text-2xl text-lg font-semibold text-green-700">
                  {service.title}
                </h2>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Donate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 font-extrabold right-2 text-gray-600 hover:text-gray-900"
              >
                X
              </button>
              <h1 className="lg:text-3xl text-2xl text-pink-700 text-center font-bold mb-8">
                Complete Your Payment
              </h1>

              <div className="flex justify-center mb-6">
                <QRCode value={upiUrl} lg:size={180} size={140} />
              </div>

              <p className="text-lg text-center font-medium text-gray-600 mb-2">
                UPI ID:{" "}
                <span className="font-mono text-gray-800">{merchantUpiId}</span>
              </p>

              <p className="text-xl text-center font-bold text-gray-700 mb-6">
                Amount: ₹{amount}
                <span className="block text-blue-500 mt-4">
                  Scan the QR Code to pay!
                </span>
              </p>

              <div className="flex justify-center">
                <button
                  onClick={openVerificationPopup}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Verify Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Second Popup: Verification Form */}
        {isVerificationPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
              <button
                onClick={closeVerificationPopup}
                className="absolute top-2 font-extrabold right-2 text-gray-600 hover:text-gray-900"
              >
                X
              </button>
              <h1 className="lg:text-3xl text-2xl text-pink-700 text-center font-bold mb-6">
                Verify Your Payment
              </h1>

              {/* Full Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={userDetails.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                />
              </div>

              {/* Mobile Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={userDetails.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                />
              </div>

              {/* Amount Paid Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Amount Paid
                </label>
                <input
                  type="number"
                  name="amountPaid"
                  value={userDetails.amountPaid}
                  onChange={handleInputChange}
                  placeholder="Enter amount paid"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    console.log("User Details:", userDetails);
                    alert("Payment details submitted successfully!");
                    closeVerificationPopup();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
