import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }

    if (!formData.guests) {
      newErrors.guests = "Please select number of guests.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  }

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          🍋 Little Lemon
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Reservations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>

            <p>
              We are a family owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>

            <a href="#booking" className="reserve-button">
              Reserve a Table
            </a>
          </div>

          <div className="hero-image">
            <div className="lemon-circle">🍋</div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <h2>About Little Lemon</h2>

          <p>
            Little Lemon is a charming neighborhood restaurant serving
            delicious Mediterranean food. Our chefs combine fresh
            ingredients with traditional family recipes to create
            memorable meals.
          </p>
        </section>

        {/* MENU */}
        <section id="menu" className="menu">
          <h2>Specials</h2>

          <div className="menu-grid">

            <article className="menu-card">
              <div className="food-image">🥗</div>
              <div>
                <h3>Greek Salad</h3>
                <p className="price">$12.99</p>
                <p>
                  Fresh vegetables, olives and feta cheese
                  with our homemade dressing.
                </p>
              </div>
            </article>

            <article className="menu-card">
              <div className="food-image">🍅</div>
              <div>
                <h3>Bruschetta</h3>
                <p className="price">$8.99</p>
                <p>
                  Crispy bread topped with tomatoes, herbs
                  and fresh Mediterranean flavors.
                </p>
              </div>
            </article>

            <article className="menu-card">
              <div className="food-image">🍝</div>
              <div>
                <h3>Pasta</h3>
                <p className="price">$14.99</p>
                <p>
                  Homemade pasta served with a delicious
                  Mediterranean sauce.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking" className="booking">
          <div className="booking-container">

            <h2>Reserve a Table</h2>

            {submitted && (
              <div className="success-message">
                Your reservation has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="date">
                  Choose date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  aria-describedby="date-error"
                />

                {errors.date && (
                  <span id="date-error" className="error">
                    {errors.date}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="time">
                  Choose time
                </label>

                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  aria-describedby="time-error"
                >
                  <option value="">Select a time</option>

                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                {errors.time && (
                  <span id="time-error" className="error">
                    {errors.time}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="guests">
                  Number of guests
                </label>

                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={handleChange}
                  aria-describedby="guests-error"
                />

                {errors.guests && (
                  <span id="guests-error" className="error">
                    {errors.guests}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="occasion">
                  Occasion
                </label>

                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  aria-describedby="occasion-error"
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Other">Other</option>
                </select>

                {errors.occasion && (
                  <span id="occasion-error" className="error">
                    {errors.occasion}
                  </span>
                )}
              </div>

              <button type="submit">
                Make Your Reservation
              </button>

            </form>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <h2>Contact Little Lemon</h2>
          <p>Chicago, Illinois</p>
          <p>Phone: (312) 555-0123</p>
          <p>Email: info@littlelemon.com</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Little Lemon Restaurant</p>
      </footer>

    </div>
  );
}

export default App;