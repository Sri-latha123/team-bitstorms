import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    description: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://srilathagn.app.n8n.cloud/webhook/campus-main", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("✅ Event Created & Workflow Triggered");
      navigate("/");
    } catch (err) {
      alert("❌ Failed to send");
    } finally {
      setLoading(false);
    }
  };
   return (
    <div className="container">
      <h1>📅 Add Event</h1>

      <form onSubmit={handleSubmit} className="form">
        <input name="eventName" placeholder="Event Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input name="phone" placeholder="WhatsApp Number" onChange={handleChange} />

        <button type="submit">
          {loading ? "Sending..." : "Submit 🚀"}
        </button>
      </form>
      </div>
  );
}
