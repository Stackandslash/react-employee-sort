import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
      {/* <span className="remove" onClick={() => props.remove(props.id)}>𝘅</span> */}
    </div>
  );
}

export default EmployeeCard;
