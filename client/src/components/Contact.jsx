import { useState } from "react";
import contact from "../assets/contact.png";

const Contact = ({ darkMode }) => {

  const [firstname, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formdata = {
    firstName: firstname,
    lastName: lastName,
    emailAddress: email,
    phoneNumber: phoneNumber,
    message: message
  };

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const data = await res.json(); // 👈 missing await

    if (data.success) {
      alert("Message sent successfully!");
    }
  } catch (error) {
    alert("Something went wrong");
  }

  // reset
  setFirstName("");
  setLastName("");
  setEmail("");
  setPhoneNumber("");
  setMessage("");
};

  // Theme-based constants
  const cardBg = darkMode 
    ? "linear-gradient(to bottom right, #1a1a1a, #111111)" 
    : "linear-gradient(to bottom right, #ffffff, #faf9fb)";
  const inputBg = darkMode ? "#262626" : "#ffffff";
  const textColor = darkMode ? "white" : "#1f2937";
  const subTextColor = darkMode ? "#d1d5db" : "#6b7280";

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden transition-colors duration-300"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-lg">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6" style={{ color: textColor }}>
            Let's Build Something <span style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>Great</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg opacity-80" style={{ color: subTextColor }}>
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration with Geometric Frame */}
          <div 
            className="relative flex justify-center order-2 lg:order-1" 
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
               {/* Decorative Circles */}
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
              <img
                src={contact}
                alt="Contact Illustration"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Refined Form */}
          <form onSubmit={handleSubmit}
            style={{ 
              background: cardBg, 
              borderColor: darkMode ? "rgba(255,255,255,0.1)" : "#e5e7eb" 
            }}
            className="flex flex-col gap-5 p-8 md:p-10 rounded-[2.5rem] border shadow-2xl order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1" style={{ color: subTextColor }}>First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ backgroundColor: inputBg, color: textColor }}
                  className="w-full px-5 py-4 rounded-2xl border border-transparent focus:border-orange-500/50 outline-none transition-all shadow-inner"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1" style={{ color: subTextColor }}>Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ backgroundColor: inputBg, color: textColor }}
                  className="w-full px-5 py-4 rounded-2xl border border-transparent focus:border-orange-500/50 outline-none transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1" style={{ color: subTextColor }}>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: inputBg, color: textColor }}
                className="w-full px-5 py-4 rounded-2xl border border-transparent focus:border-orange-500/50 outline-none transition-all shadow-inner"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1" style={{ color: subTextColor }}>Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ backgroundColor: inputBg, color: textColor }}
                className="w-full px-5 py-4 rounded-2xl border border-transparent focus:border-orange-500/50 outline-none transition-all shadow-inner"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1" style={{ color: subTextColor }}>Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ backgroundColor: inputBg, color: textColor }}
                className="w-full px-5 py-4 rounded-2xl border border-transparent focus:border-orange-500/50 outline-none transition-all shadow-inner resize-none"
                required
              />
            </div>

            <button
              type="submit"
              style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
              className="w-full py-5 mt-4 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;