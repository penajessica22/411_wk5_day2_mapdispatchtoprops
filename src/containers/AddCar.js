import { connect } from "react-redux";
import AddCar from "../components/AddCar"
import AddCar from "../redux/actions"
// import Car from "../components/Car";

const mapStateToProps = state => {
  return { cars: state.cars };
};

export default connect(
  mapStateToProps,
  null
)(Car);
