// import the connect hook from react-redux
import { connect } from "react-redux";

// import the visual component for Home
// that we want to give global state super powers to
import Home from "../components/Home";

// make a function to map global state of cars to props
const mapStateToProps = (state) => {
  // return an object that matches the key in state.js
  return {
    cars: state.cars,
  };
};

// note currying syntax - also called partial application
// way to add params after the fact on a function
export default connect(mapStateToProps)(Home);
