import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormType1 from "./FormType1";
import FormType2 from "./FormType2";
import FormType3 from "./FormType3";

const Form = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const FormTitle = ["Type 1/3", "Type 2/3", "Type 3/3"];
  const [formData, setFormData] = useState({
    match_type: "",
    start_dt: "",
    end_dt: "",
    match_location: "",
    tournament_name: "",
    comments: "",
    team1: "",
    team1_ha: "",
    team2: "",
    team2_ha: ""
  });

  const getForm = () => {
    if (page === 0) {
      return <FormType1 formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <FormType2 formData={formData} setFormData={setFormData} />;
    } else {
      return <FormType3 formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <p>{FormTitle[page]}</p>
      </div>
      <div className="form-body">{getForm()}</div>
      <div className="form-footer">
        {page ? (
          <button
            className="btn"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
        ) : (
          ""
        )}
        {page === 2 ? (
          <button
            className="btn"
            onClick={() => {
              console.log(formData);
              localStorage.setItem("Matches", JSON.stringify(formData));
              alert("Form Submitted!");
              navigate("/");
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
