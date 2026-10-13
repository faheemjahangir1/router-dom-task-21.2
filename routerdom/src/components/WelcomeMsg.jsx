import React from "react";
import { useParams } from "react-router-dom";

const WelcomeMsg = () => {
  const { username } = useParams();

  return <h1>Welcome guys {username}</h1>;
};

export default WelcomeMsg;
