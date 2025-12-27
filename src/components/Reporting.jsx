import Navbar from "./Navbar";
import "../styles/Reporting.css";

export default function Reporting(){

  const reports = [
    {subject:"Oil Leak", equipment:"CNC Machine 01", team:"Mechanical", status:"Repaired", hours:3},
    {subject:"Printer Jam", equipment:"Office Printer", team:"IT Support", status:"In Progress", hours:1.5},
    {subject:"Boiler Noise", equipment:"Boiler 02", team:"Maintenance", status:"New", hours:0},
  ];

  return(
    <div className="reporting-page">

      <Navbar />

      <h2>Maintenance Reports</h2>

      <p className="subtitle">
        Track request progress and repair performance.
      </p>

      <div className="report-table">

        <table>
          <thead>
            <tr>
              <th>Request</th>
              <th>Equipment</th>
              <th>Team</th>
              <th>Status</th>
              <th>Hours Spent</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((r,i)=>(
              <tr key={i}>
                <td>{r.subject}</td>
                <td>{r.equipment}</td>
                <td>{r.team}</td>
                <td>
                  <span className={`status ${r.status.replace(" ","").toLowerCase()}`}>
                    {r.status}
                  </span>
                </td>
                <td>{r.hours}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
