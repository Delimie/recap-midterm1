import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";
  
  const navigate = useNavigate()

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    // console.log(name, value);
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      console.log("Register successfully", res.data);
      toast.success("ลงทะเบียนสำเร็จ!!")
      navigate('/post')
      
    } catch (error) {
      console.log("เกิดข้อผิดพลาด");
      toast.error("ลงทะเบียนผิดพลาด")
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        onSubmit={hdlSubmit}
        className="bg-white p-6 rounded-md w-full max-w-md flex flex-col"
      >
        <h2 className="text-center">Create Account</h2>
        <label htmlFor="">username:</label>
        <input
          type="text"
          className={inputStyle}
          name="username"
          placeholder="username"
          onChange={hdlChange}
          value={formData.username}
        ></input>

        <label htmlFor="" name="password">
          password:
        </label>
        <input
          type="password"
          className={inputStyle}
          name="password"
          placeholder="password"
          onChange={hdlChange}
          value={formData.password}
        ></input>

        <label htmlFor="">email:</label>
        <input
          type="email"
          className={inputStyle}
          name="email"
          placeholder="example@mail.com"
          onChange={hdlChange}
          value={formData.email}
        ></input>

        <label htmlFor="">phone:</label>
        <input
          type="text"
          className={inputStyle}
          name="phone"
          placeholder="081-XXXXXXXX"
          onChange={hdlChange}
          value={formData.phone}
        ></input>
        <button className="bg-amber-300 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-rose-400 transition-all duration-150">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
