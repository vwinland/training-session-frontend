export function fetchWorkouts() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };
}
