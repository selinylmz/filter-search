import React from "react";

export const List = (props) => {
  return (
    <div className="list">
      <div className="list__item">
        {/* <img src={props.company.image} alt="" /> */}
        <img src="https://picsum.photos/100" alt="" width="100" height="100"/>
        <div>
          <h1>{props.company.name}</h1>
          <h2>{props.company.company}</h2>
          <p>{props.company.jobdescription}</p>
        </div>
      </div>
    </div>
  );
};
