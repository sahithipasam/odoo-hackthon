import Navbar from "./Navbar";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

  const navigate = useNavigate();

  // ⭐ These will come from backend later
  const criticalAssets = 5;
  const technicianLoad = 82;
  const openRequests = 12;

  const recentRequests = [
    { req:"Oil Leak", machine:"CNC Machine 01", team:"Mechanical", status:"New"},
    { req:"Printer Jam", machine:"Office Printer", team:"IT Support", status:"In Progress"}
  ];


  return (
    <div className="dashboard-page">

      <Navbar />

      {/* ===== CARDS ===== */}
      <div className="cards">

        <div className="card red" onClick={()=>navigate("/equipment?filter=risk")}>
          <h3>Machines At Risk</h3>
          <p>{criticalAssets}</p>
        </div>

        <div className="card blue">
          <h3>Technician Load</h3>
          <p>{technicianLoad}%</p>
        </div>

        <div className="card green" onClick={()=>navigate("/reporting?filter=open")}>
          <h3>Open Requests</h3>
          <p>{openRequests}</p>
        </div>

      </div>


      {/* ===== LABEL ===== */}
      <div className="separator">
        <span>Recent Maintenance Requests</span>
      </div>


      {/* ===== TABLE ===== */}
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Request</th>
              <th>Machine</th>
              <th>Team</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentRequests.map((r,i)=>(
              <tr key={i}>
                <td>{r.req}</td>
                <td>{r.machine}</td>
                <td>{r.team}</td>
                <td>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
