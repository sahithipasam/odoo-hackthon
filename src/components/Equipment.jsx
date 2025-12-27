import { useState } from "react";
import Navbar from "./Navbar";
import "../styles/Equipment.css";

export default function Equipment(){

  const [tab,setTab]=useState("work");

  const workCenters=[
    {name:"CNC Workshop",dept:"Production",supervisor:"Rahul",machines:6},
    {name:"Boiler House",dept:"Utilities",supervisor:"Kiran",machines:3}
  ];

  const machines=[
    {name:"CNC Machine 01",serial:"CNC-9821",dept:"Production",team:"Mechanical",health:25},
    {name:"Printer 12",serial:"PRN-9002",dept:"Admin",team:"IT Support",health:88}
  ];

  function healthClass(h){
    if(h<30) return "bad";
    if(h<60) return "warn";
    return "good";
  }

  return(
    <div className="equipment-page">

      <Navbar />

      <h2>Equipment</h2>

      <div className="inner-tabs">
        <button className={tab==="work"?"active":""} onClick={()=>setTab("work")}>
          Work Center
        </button>

        <button className={tab==="machine"?"active":""} onClick={()=>setTab("machine")}>
          Machine & Tools
        </button>
      </div>


      {tab==="work" && (
        <div className="equipment-table">
          <table>
            <thead>
              <tr>
                <th>Work Center</th>
                <th>Department</th>
                <th>Supervisor</th>
                <th>Total Machines</th>
              </tr>
            </thead>

            <tbody>
              {workCenters.map((w,i)=>(
                <tr key={i}>
                  <td>{w.name}</td>
                  <td>{w.dept}</td>
                  <td>{w.supervisor}</td>
                  <td>{w.machines}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


      {tab==="machine" && (
        <div className="equipment-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Serial</th>
                <th>Department</th>
                <th>Team</th>
                <th>Health</th>
              </tr>
            </thead>

            <tbody>
              {machines.map((m,i)=>(
                <tr key={i}>
                  <td>{m.name}</td>
                  <td>{m.serial}</td>
                  <td>{m.dept}</td>
                  <td>{m.team}</td>
                  <td>
                    <span className={`health ${healthClass(m.health)}`}>
                      {m.health}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
