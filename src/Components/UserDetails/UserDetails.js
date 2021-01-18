import React, { useState, useEffect } from "react";
import "./UserDetails.css";

const UserDetails = (access) => {
  const [person, setPerson] = useState(null);

  useEffect(async function () {
    const response = await fetch("https://api.bybits.co.uk/policys/details", {
      method: "GET",
      headers: {
        "Content-Type": "application / json",
        environment: "mock",
        Authorization: access.access,
      },
    });
    const data = await response.json();

    const item = data;
    console.log(item);
    setPerson(item);
    console.log(access.access);
  }, []);

  return (
    <div className="login-wrapper">
      <h1>My Policy</h1>
      <div className="footer"></div>
      <div>
        <b>Policy Reference</b>
      </div>
      {person && <div>{person.policy.policy_ref}</div>}
      <br></br>
      <div>
        <b>Cover Type</b>
      </div>
      {person && <div>{person.policy.cover}</div>}
      <br></br>
      <div>
        <b>Car</b>
      </div>
      {person && (
        <div>
          {person.vehicle.make} {person.vehicle.model} {person.vehicle.colour}{" "}
          {person.vehicle.reg}
        </div>
      )}
      <br></br>
      <div>
        <b>Address</b>
      </div>
      {person && (
        <div>
          {person.policy.address.line_1}, {person.policy.address.line_2},{" "}
          {person.policy.address.postcode}
        </div>
      )}
      <br></br>
    </div>
  );
};

export default UserDetails;
/*
async function userDetails() {
  return fetch("https://api.bybits.co.uk/policys/details", {
    method: "GET",
    headers: {
      "Content-Type": "application / json",
      environment: "mock",
      Authorization: "MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs",
    },
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
}

userDetails();

export default function userDetails2() {
  return <div>hello</div>;
}*/
