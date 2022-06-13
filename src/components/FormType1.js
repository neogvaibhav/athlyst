import React from "react";

const FormType1 = ({ formData, setFormData }) => {
  return (
    <div className="form-type1">
      <select
        onChange={(e) =>
          setFormData({ ...formData, match_type: e.target.value })
        }
        value={formData.match_type}
      >
        <option value="" disabled selected hidden>
          Match Type
        </option>
        <option value="Friendly">Friendly</option>
        <option value="Tournament">Tournament</option>
      </select>
    </div>
  );
};
export default FormType1;
