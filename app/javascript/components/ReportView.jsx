import React, {useEffect, useState} from "react";
import { reportList } from "../services/report";

function ReportView() {
  const [report, setReport] = useState([]);
  const [error, setError] = useState(null);
  console.log(report);

  useEffect(() => {
    async function fetchRegisterData() {
      try {
        const response = await reportList();
        setReport(response);
      } catch (error) {
        setError("We couldn't load the employeer register");
      }
    }
    fetchRegisterData();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Entry Day</th>
          <th>Entry</th>
          <th>Exit Day</th>
          <th>Exit</th>
        </tr>
      </thead>
      <tbody>
        {report.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.entry_day}</td>
              <td>{item.entry}</td>
              <td>{item.exit_day}</td>
              <td>{item.exit}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReportView;
