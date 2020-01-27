import {connect} from "react-redux";

import Summary from './Summary'

import {makeReservation} from "../../store/actions/reservation";

const mapStateToProps = (state) => {
    return {
        reservation: state.reservation
    }
};

const mapDispatchToProps = {makeReservation};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary);
