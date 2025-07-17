function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">{event.name}</h2>
      <p>
        <strong>EventName:</strong> {event.eventname}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Year:</strong> {event.year}
      </p>
    </div>
  );
}

export default EventCard;
