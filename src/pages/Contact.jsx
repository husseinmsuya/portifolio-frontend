import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://portifolio-backend-1-hw7w.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Kosa:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2>Wasiliana Nami</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Jina lako"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Barua pepe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Ujumbe wako"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Inatuma..." : "Tuma"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ color: "green" }}>✅ Ujumbe umetumwa!</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>❌ Imeshindwa kutuma. Jaribu tena.</p>
      )}
    </section>
  );
}