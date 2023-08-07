import React, { useEffect, useState } from "react";
import { useStore } from "./store";
import { useNavigate } from "react-router";
export const Contacts = () => {
  const [arr, setArr] = useState([]);
  const data = useStore((state) => state.data);
  const navigate = useNavigate();
  useEffect(() => {
    setArr(data);
    console.log(data)
  }, []);

  return (
    <>
      <h1>Contacts page</h1>
      {arr.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
        </div>
      ))}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </>
  );
};