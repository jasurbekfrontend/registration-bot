import React, { useState } from "react";
import axios from "axios";

import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Register() {
  const [discipline, setDiscipline] = useState("");
  const [time, setTime] = useState("");

  console.log(discipline);

  const [formdata, setFormdata] = useState({
    firstName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = "6731309975:AAGTZwyvZgCtJ40FFwGvdJiXt9pO4V_3170";
      const chatId = "@smartbrain_kanal";
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `Ismi: ${formdata.firstName}
Telefon raqami: ${formdata.phoneNumber}
Hafta kuni: ${discipline}
Tanlangan vaqt: ${time} `,
      });

      setFormdata({
        firstName: "",
        phoneNumber: "",
      });
      setDiscipline("");
      setTime("");
    } catch (error) {
      console.error("Xato ketdi", error);
      alert("malumoting yuborilmadi");
    }
  };
  return (
    <div className="wrapper">
          <b>SmartBrain IT markazi uchun qabul</b>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            name="firstName"
            placeholder="Ismingizni kiriting"
            value={formdata.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            required
            name="phoneNumber"
            placeholder="Telefon raqamingizni kiriting"
            value={formdata.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          <select onChange={(e) => setDiscipline(e.target.value)}>
            <option value="" disabled selected>
              Hafta kunini tanlang
            </option>
            <option value="dDushanba-Chorshanba-Juma">
              Dushanba-Chorshanba-Juma
            </option>
            <option value="Seshanba-Payshanba-Shanba">
              Seshanba-Payshanba-Shanba
            </option>
          </select>
          <select onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled selected>
              Vaqtni tanlang
            </option>
            <option value="8:00-10:00">8:00-10:00</option>
            <option value="10:00-12:00">10:00-12:00</option>
            <option value="13:00-15:00">13:00-15:00</option>
            <option value="15:00-17:00">15:00-17:00</option>
            <option value="17:00-19:00">17:00-19:00</option>
          </select>
        </label>
        <button>Yuborish</button>
      </form>
    </div>
  );
}
export default Register;
