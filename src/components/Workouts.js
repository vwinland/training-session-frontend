import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

import "../App.css";

const Workouts = (props) => {
  const [toggle, setToggle] = useState(false);

  const alphabetize = () => {
    console.log(toggle);
    if (toggle) {
      return [...props.workouts].sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      return props.workouts;
    }
  };

  const handleToggledClick = () => {
    setToggle(!toggle);
  };

  return (
    <div class="flex-container">
      <NavigationBar />
      <h2>Workouts</h2>
      <div onSubmit={props.handleSubmit}>
        <label>{toggle}</label>
        <div class="card">
          <button onClick={handleToggledClick}>Alphabetize!</button>

          {alphabetize().map((workout) => (
            <li class="container" key={workout.id} value={workout.id}>
              <Link to={`/workouts/${workout.id}`}>
                {workout.name} <br />
              </Link>
              {workout.category}

              {/* <Counter /> */}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
