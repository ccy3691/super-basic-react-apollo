import React from "react";

export default function FilterInput({ label, filterValue, callback }) {
  return (
    <>
      <label>
        {label}:
        <input
          type="text"
          onChange={(e) => callback(filterValue, e.target.value)}
        ></input>
      </label>
    </>
  );
}
