import React from "react";

const Person = ({ item }) => {
  const {
    src: { large },
    photographer,
  } = item;
  console.log(large);
  return (
    <div className="firstdivinperson">
      <div className="row">
        <div>
          <img src={large} alt="" />
          <a href="#">{photographer}</a>
        </div>
      </div>
    </div>
  );
};

export default Person;
