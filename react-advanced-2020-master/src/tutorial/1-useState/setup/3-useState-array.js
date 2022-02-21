import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [entries, setEntries] = useState(data);
  const eventHandle = (id, name) => {
    console.log(id, name);
  };
  const removeItem=(id)=>{
    let newPeople= entries.filter((people)=>people.id!==id)
    setEntries(newPeople)
  }
  return (
    <div>
      <h2>useState array example</h2>
      <section>
        {entries.map((entry) => {
          const { id, name } = entry;
          return (
            <div>
              <h4
                className="item"
                key={id}
                onClick={() => eventHandle(id, name)}
              >
                {name}
              
              <button className="btn" onClick={()=>removeItem(id)}>Remove Item</button></h4>
            </div>
          );
        })}
      </section>
      <article>
        <button className="btn" onClick={() => setEntries([])}>
          Clear Items
        </button>
      </article>
    </div>
  );
};

export default UseStateArray;
