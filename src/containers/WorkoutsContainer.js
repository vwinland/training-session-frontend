import React, { Component } from "react";
import { connect } from "react-redux";
import Workouts from "../components/Workouts";
import WorkoutInput from "../components/WorkoutInput";
import { fetchWorkouts } from "../actions/fetchWorkouts";

class WorkoutsContainer extends Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return (
      <div>
        <WorkoutInput />
        <br></br>
        <Workouts workouts={this.props.workouts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
  };
};

export default connect(mapStateToProps, { fetchWorkouts })(WorkoutsContainer);
