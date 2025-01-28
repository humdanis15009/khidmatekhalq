import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import QRCode from "react-qr-code";
// import QRCode from "react-qr-code";

const Blogs = () => {
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
  const userName = "Khidmat-e-Khalq";

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

  const blogs = [
    {
      title: "Why Charity is Essential for a Better Society",
      description:
        "Charity fosters equality, improves lives, and creates opportunities for underprivileged communities. Discover how acts of kindness shape a better society and the role Aasra Foundation plays in this mission.",
      imageUrl: "/images/charity-essence.jpeg",
    },
    {
      title: "The Power of Giving: Transforming Lives Through Charity",
      description:
        "Giving is not just about making a donation; it's about making a difference. Learn how charitable acts create long-lasting impacts and inspire positive change in communities.",
      imageUrl: "/images/power-of-giving.jpeg",
    },
    {
      title: "How Charity Bridges the Gap Between Privilege and Need",
      description:
        "Charity serves as a bridge to address disparities in society, offering hope and resources to those in need. See how Aasra Foundation is working to close this gap with impactful programs.",
      imageUrl: "/images/bridge-gap.jpeg",
    },
    {
      title: "The Importance of Community Support in Charity Initiatives",
      description:
        "No charity can thrive without community involvement. Explore how Aasra Foundation brings together people from all walks of life to build a culture of compassion and care.",
      imageUrl: "/images/community-support.jpeg",
    },
    {
      title: "Small Acts of Kindness That Make Big Impacts",
      description:
        "Every small effort counts when it comes to charity. Read inspiring stories of how simple gestures have created profound changes in the lives of those in need.",
      imageUrl: "/images/kindness-impact.jpeg",
    },
    {
      title: "Charity as a Lifeline During Natural Disasters",
      description:
        "During crises, charity becomes a lifeline for survival. Learn how Aasra Foundation responds to natural disasters, providing aid and hope to affected families.",
      imageUrl: "/images/disaster-aid.jpeg",
    },
    {
      title: "The Role of Education in Charity and Uplifting Communities",
      description:
        "Education is a powerful tool for breaking the cycle of poverty. Discover how Aasra Foundation focuses on restoring education in underserved and disaster-affected areas.",
      imageUrl: "/images/education-charity.jpeg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Aasra Foundation - Empowering Communities Through Charity</title>
        <meta
          name="description"
          content="Aasra Foundation is a trusted Muslim charity platform in India. Join us in making a difference by supporting those in need through various charitable initiatives."
        />
        <meta
          name="keywords"
          content="Charity, Aasra Foundation, Islamic charity, community support, donations, zakat, sadaqah, helping the needy, charity India"
        />
        <meta name="author" content="Aasra Foundation" />
        <link rel="canonical" href="https://aasrafoundation.netlify.app" />
        <meta
          property="og:title"
          content="Aasra Foundation - Empowering Communities Through Charity"
        />
        <meta
          property="og:description"
          content="Join Aasra Foundation, India's trusted Muslim charity platform, and contribute to transforming lives. Together, we can make a difference!"
        />
        <meta
          property="og:image"
          content="https://aasrafoundation.netlify.app/khidmat-logo.png"
        />
        <meta property="og:url" content="https://aasrafoundation.netlify.app" />
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

export default Blogs;
