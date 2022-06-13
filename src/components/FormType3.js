import React from "react";

const FormType3 = ({ formData, setFormData }) => {
  return (
    <div className="form-type3">
      <div className="form-left">
        <input
          type="text"
          placeholder="Team 1 Name"
          onChange={(e) => setFormData({ ...formData, team1: e.target.value })}
          value={formData.team1}
        />
        <hr width="80%" />
        <span>VS</span>
        <input
          type="text"
          placeholder="Team 2 Name"
          onChange={(e) => setFormData({ ...formData, team2: e.target.value })}
          value={formData.team2}
        />
      </div>
      <div className="form-right">
        <select
          onChange={(e) =>
            setFormData({ ...formData, team1_ha: e.target.value })
          }
          value={formData.team1_ha}
        >
          <option value="" disabled selected hidden>
            Home or Away
          </option>
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
        <hr width="80%" />
        <select
          onChange={(e) =>
            setFormData({ ...formData, team2_ha: e.target.value })
          }
          value={formData.team2_ha}
        >
          <option value="" disabled selected hidden>
            Home or Away
          </option>
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>
    </div>
  );
};
export default FormType3;
