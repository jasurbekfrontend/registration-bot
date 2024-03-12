import React, { useState } from "react";
import axios from "axios";
import "./all.css";
function App() {
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = "6731309975:AAGTZwyvZgCtJ40FFwGvdJiXt9pO4V_3170";
        const chatId = "@axios_web";
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: `First Name: ${formdata.firstName} Last Name: ${formdata.lastName} Phone Number: ${formdata.phoneNumber}`,
        });

        setFormdata({
          firstName: "",
          lastName: "",
          phoneNumber: "",
        });
      } catch (error) {
        console.error("Xato ketdi", error);
        alert("malumoting yuborilmadi");
      }
    };
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formdata.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formdata.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formdata.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button>Send</button>
        </form>
      </div>
    );
  
}
export default App;
