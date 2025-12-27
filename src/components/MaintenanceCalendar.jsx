import Navbar from "./Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/MaintenanceCalendar.css";

export default function MaintenanceCalendar(){

  // ⭐ Backend later
  const events = [
    {date:"2025-01-08",status:"overdue"},
    {date:"2025-01-10",status:"completed"},
    {date:"2025-01-15",status:"scheduled"}
  ];

  function format(d){
    return d.toISOString().split("T")[0];
  }

  return (
    <div className="calendar-page">

      <Navbar />

      <h2>Maintenance Calendar</h2>

      <Calendar
        className="flat-calendar"
        tileClassName={({date})=>{
          const f = format(date);
          const e = events.find(ev=>ev.date===f);

          if(!e) return "";

          if(e.status==="overdue") return "overdue-date";
          if(e.status==="completed") return "completed-date";
          if(e.status==="scheduled") return "scheduled-date";

          return "";
        }}
      />

    </div>
  );
}