// // VolunteerRegistration.js
// import useState from "react";
// import { db, addDoc, collection } from "../Firebase";

// const Volunteer = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     availability: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       // Save the volunteer data to Firestore
//       const docRef = await addDoc(collection(db, "volunteers"), formData);
//       setSuccess("Registration successful! Thank you for your interest.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         availability: "",
//       });
//     } catch (error) {
//       setError("Error registering volunteer: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="volunteer-registration">
//       <h2>Volunteer Registration</h2>

//       {error && <div className="error-message">{error}</div>}
//       {success && <div className="success-message">{success}</div>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Availability</label>
//           <textarea
//             name="availability"
//             value={formData.availability}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Register as Volunteer"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Volunteer;
