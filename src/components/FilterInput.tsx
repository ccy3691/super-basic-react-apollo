import React from "react";

export default function FilterInput({ label, filterValue, callback }) {
  return (
    <>
      <label>
        {label}:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e) => callback(filterValue, e.target.value)}
        ></input>
      </label>
    </>
  );
}
