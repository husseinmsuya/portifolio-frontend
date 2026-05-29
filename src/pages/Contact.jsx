fetch("https://portifolio-backend-1-hw7w.onrender.com/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    email,
    message
  })
});