import Navbar from "./Navbar";
import "../styles/Teams.css";

export default function Teams(){

  const teams = [
    {
      name:"Mechanical Team",
      members:["Rahul","Ankit","Suresh"],
      workload:75
    },
    {
      name:"Electrical Team",
      members:["Kiran","Vishnu"],
      workload:55
    },
    {
      name:"IT Support",
      members:["Meghana","Rohit","Aditi"],
      workload:30
    }
  ];

  return(
    <div className="teams-page">

      <Navbar/>

      <h2>Maintenance Teams</h2>

      <p className="subtitle">
        View technicians and workload across maintenance teams.
      </p>


      <div className="team-table">

        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Members</th>
              <th>Workload</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((t,i)=>(
              <tr key={i}>
                <td>{t.name}</td>

                <td>
                  {t.members.join(", ")}
                </td>

                <td>
                  <span className={`badge load-${getLoadLevel(t.workload)}`}>
                    {t.workload}%
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

function getLoadLevel(load){
  if(load>=70) return "high";
  if(load>=40) return "mid";
  return "low";
}
