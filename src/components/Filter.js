import React from "react";
import { useDispatch } from "react-redux";
import { setResult } from "../redux/actions/resultActions";

export const Filter = (props) => {
  const dispatch = useDispatch();

  const filterResult = (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    let arr = [];
    for (const [name, value] of data) {
      arr.push({ [name]: value });
    }
    const jobKey = arr.find((e) => e.job) && arr.find((e) => e.job).job.toLowerCase();
    const areaKey = arr.find((e) => e.area).area.toLowerCase();
    const result = props.result.filter(
      (e) =>
        e.job.toLowerCase().includes(jobKey) ||
        e.area.toLowerCase().includes(areaKey)
    );
    dispatch(setResult(result));
  };

  return props.result.length ? (
    <form className="filter" onSubmit={filterResult}>
      <input type="text" name="job" placeholder="Job Title" />
      <select name="area">
        {props.result.map((e, i) => (
          <option value={e.area} key={i}>
            {e.area}
          </option>
        ))}
      </select>
      <button type="submit">Filter</button>
    </form>
  ) : (
    ""
  );
};
