import React from "react";
import { Redirect } from "react-router-dom";
import ExercisesContainer from "../containers/ExercisesContainer";

const Workout = (props) => {
  let workout = props.workouts.filter(
    (workout) => workout.id == props.match.params.id
  )[0];
  console.log(workout);
  return (
    <div>
      <h2>
        {workout ? workout.name : null} - {workout ? workout.category : null}
      </h2>
      <ExercisesContainer workout={workout} />
    </div>
  );
};

export default Workout;
