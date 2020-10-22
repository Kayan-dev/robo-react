import React from "react";
import Card from "./Card";

const CardList = ({ rob }) => {
  console.log("ROB:", rob);
  const cardArray = rob.map((user, i) => {
    return (
      <Card key={i} id={rob[i].id} name={rob[i].name} email={rob[i].email} />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;
