import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [matches, setMatches] = useState({});
  useEffect(() => {
    const match = JSON.parse(localStorage.getItem("Matches"));
    if (match) {
      setMatches(match);
    }
  }, []);
  return (
    <div>
      <h1>Matches</h1>
      <Link to="/addmatch">Add Matches</Link>
      <table>
        <th>Team1</th>
        <th>Team2</th>
        <th>Match Type</th>
        <th>Tournament Name</th>
        <th>Start Date&Time</th>
        <th>End Date&Time</th>
        <th>Location</th>
        <th>Comments</th>
        <tr>
          <td>{matches.team1}</td>
          <td>{matches.team2}</td>
          <td>{matches.match_type}</td>
          <td>{matches.tournament_name ? matches.tournament_name : "--"}</td>
          <td>{matches.start_dt}</td>
          <td>{matches.end_dt}</td>
          <td>{matches.match_location}</td>
          <td>{matches.comments}</td>
        </tr>
      </table>
    </div>
  );
};
export default Home;
