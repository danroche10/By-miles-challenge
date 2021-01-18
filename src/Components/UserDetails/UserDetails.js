import React, { useState, useEffect } from "react";
import "./UserDetails.css";

const UserDetails = (access) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://api.bybits.co.uk/policys/details", {
        method: "GET",
        headers: {
          "Content-Type": "application / json",
          environment: "mock",
          Authorization: access.access,
        },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="login-wrapper">
      <h1>My Policy</h1>
      <div className="footer"></div>
      <div>
        <b>Policy Reference</b>
      </div>
      {!loading && <div>{data.policy.policy_ref}</div>}
      <br></br>
      <div>
        <b>Cover Type</b>
      </div>
      {!loading && <div>{data.policy.cover}</div>}
      <br></br>
      <div>
        <b>Car</b>
      </div>
      {!loading && (
        <div>
          {data.vehicle.make} {data.vehicle.model} {data.vehicle.colour}{" "}
          {data.vehicle.reg}
        </div>
      )}
      <br></br>
      <div>
        <b>Address</b>
      </div>
      {!loading && (
        <div>
          {data.policy.address.line_1}, {data.policy.address.line_2},{" "}
          {data.policy.address.postcode}
        </div>
      )}
      <br></br>
    </div>
  );
};

export default UserDetails;
