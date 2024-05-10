import { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  function Search() {
    const result = searchName;
    navigate(`Page1?inputfield=${result}`);
  }

  return (
    <>
      <h1>Pokemon search</h1>
      <input
        type="text"
        placeholder="lowercase english only"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      <div>
        <button onClick={Search}>Search</button>
      </div>
    </>
  );
}
