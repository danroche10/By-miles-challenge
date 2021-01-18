import React from "react";
import { render, screen, act } from "@testing-library/react";
import Login from "./Components/Login/Login";
//import UserDetails from "./Components/UserDetails/UserDetails";
import App from "./Components/App/App";
import "@testing-library/jest-dom/extend-expect";

import fetchMock from "fetch-mock";

describe("Test App", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("Verify login endpoint ", async () => {
    fetchMock.mock("https://api.bybits.co.uk/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application / json",
        environment: "mock",
      },
      body: {
        username: "testuser",
        password: "EbpucVzUP5cvsYha0E9i",
        type: "USER_PASSWORD_AUTH",
      },
      status: 200,
    });
  });

  test("Verify policy details endpoint ", async () => {
    fetchMock.mock("https://api.bybits.co.uk/policys/details", {
      method: "GET",
      headers: {
        "Content-Type": "application / json",
        environment: "mock",
        Authorization: "MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs",
      },

      status: 200,
    });
  });
});
