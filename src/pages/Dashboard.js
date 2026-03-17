import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>🚀 Campus Automation Dashboard</h1>

      <div className="card">
        <h2>Create Event</h2>
        <p>Create events and trigger automation instantly.</p>
        <Link to="/add">
          <button>Go to Add Event ➜</button>
        </Link>
      </div>

      <div className="card">
        <h2>Features</h2>
         <ul>
          <li>📅 Google Calendar Integration</li>
          <li>📲 WhatsApp Notification</li>
          <li>⚡ Automated Workflow (n8n)</li>
        </ul>
      </div>
    </div>
  );
}
