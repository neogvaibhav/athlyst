import React from "react";

const FormType2 = ({ formData, setFormData }) => {
  return (
    <div className="form-type2">
      <div className="form-left">
        <label>Start Date & Time: </label>
        <input
          type="datetime-local"
          onChange={(e) =>
            setFormData({ ...formData, start_dt: e.target.value })
          }
          value={formData.start_dt}
        />
        <input 
          type="text"
          placeholder="Match Location"
          onChange={(e) =>
            setFormData({ ...formData, match_location: e.target.value })
          }
          value={formData.match_location}
        />
        {formData.match_type === "Tournament" ? (
          <input
            type="text"
            placeholder="Tournament Name"
            style={{ display: "block" }}
            onChange={(e) =>
              setFormData({ ...formData, tournament_name: e.target.value })
            }
            value={formData.tournament_name}
          />
        ) : (
          ""
        )}
      </div>
      <div className="form-right">
        <label>End Date & Time: </label>
        <input
          type="datetime-local"
          onChange={(e) => setFormData({ ...formData, end_dt: e.target.value })}
          value={formData.end_dt}
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Comments"
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
          value={formData.comments}
        />
      </div>
    </div>
  );
};
export default FormType2;
