import { connect } from "react-redux";
import AddCar from "../components/AddCar"
import {addCar} from "../redux/actions"


// const mapStateToProps = state => {
//   return { cars: state.cars };
// };
const mapDispatchToProps = dispatch => {
    return { 
        addCar: (Car) => dispatch(addCar(Car))
    }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCar);
