import { useState } from "react";
function EventForm({ onAdd }) {
  const [form, setForm] = useState({
    eventname: "",
    location: "",
    time: "",
    date: "",
    year: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll)
      return alert("EventName & Location are required");
    onAdd({ ...form, id: Date.now() });
    setForm({
      eventname: "",
      location: "",
      time: "",
      date: "",
      month: "",
      year: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      {" "}
      <h2 className="text-xl font-semibold  mb-4">Add New Event</h2>{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="eventname"
        placeholder="eventname"
        value={form.eventname}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="location"
        placeholder="location"
        value={form.location}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="number"
        name="time"
        placeholder="time"
        value={form.time}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="number"
        name="date"
        placeholder="date"
        value={form.date}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="month"
        placeholder="month"
        value={form.month}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="number"
        name="year"
        placeholder="year"
        value={form.year}
        onChange={handleChange}
      />{" "}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {""}
        Add Event{""}
      </button>{""}
    </form>
  );
}
export default EventForm;
