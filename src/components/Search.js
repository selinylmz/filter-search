import React from "react";
import { useDispatch } from "react-redux";
import { setResult } from "../redux/actions/resultActions";

export const Seacrh = (props) => {
  const dispatch = useDispatch();
  const searchResult = (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    let arr = [];
    for (const [name, value] of data) {
      arr.push({ [name]: value });
    }
    const nameKey = arr.find((e) => e.name) && arr.find((e) => e.name).name.toLowerCase();
    const companyKey = arr.find((e) => e.company).company.toLowerCase();
    const result = props.company.filter(
      (e) =>
        e.name.toLowerCase().includes(nameKey) ||
        e.company.toLowerCase().includes(companyKey)
    );
    dispatch(setResult(result));
  };
  return (
    <form className="search" onSubmit={searchResult}>
      <input type="text" name="name" placeholder="Name"/>
      <select name="company">
        {props.company.map((e, i) => (
          <option value={e.company} key={i}>
            {e.company}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};
