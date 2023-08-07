import React, { useState, useEffect } from "react";
import { useStore } from "./store";
import { useNavigate } from "react-router";
export const Home = () => {
    const navigate = useNavigate();
    const { data, addData } = useStore();
    const [input, setInput] = useState("");
    const setdata = useStore( (state) => state.setdata);
    const [update, setUpdate] = useState({
      id: null,
      name: "",
    });
  

    const addDataHandler = (e) => {
      e.preventDefault();
      addData(input);
      setInput("");
     
    };
    const updateClickHandler = (drama) => {
      setIsEdit(true);
      setUpdate({
        id: drama.id,
        name: drama.name,
      });
    };

    useEffect(() => {
      setdata(data)
    }, [])


    return (
        <div>
        <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new Korean Drama"
        />
        <button onClick={addDataHandler}>Add</button>
      </div>
      <br />
      {data.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <button onClick={() => updateClickHandler(el)}>
            <i className="ti ti-edit-circle"></i>
          </button>
        </div>
      ))}
      <br />
     <button onClick={() => {
      console.log(data);
      navigate('/about')
     }}>About Page</button>
      <button onClick={() => {
      console.log(data);
      navigate('/contacts')
     }}>Contacts Page</button>
    </div>
        
    )

}