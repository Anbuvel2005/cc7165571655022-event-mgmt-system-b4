import EventCard from "../components/EventCard";

const dummyEvents = [
  {
    id: 1,
    eventname: "Anirudh Concert",
    location: "Chennai",
    time: "12.30pm",
    date: "15",
    month: "january",
    year: "2025",
  },
  {
    id: 2,
    eventname: "TVK manadu",
    location: "GangaiKondaCholapuram",
    time: "10.30am",
    date: "20",
    month: "April",
    year: "2026",
  },
  {
    id: 1,
    eventname: "Thalapathy's CM swearing",
    location: "kanyakumari",
    time: "8.00am",
    date: "05",
    month: "september",
    year: "2026",
  },
  {
    id: 2,
    eventname: "Thalapathy's Road Show",
    location: "GangaiKondaCholapuram",
    time: "9.00am",
    date: "20",
    month: "August",
    year: "2026",
  },
];

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummyEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
export default Home;
