import {connect} from "react-redux";

import Sector from './Sector'

import {fetchSectorData, fetchSectorMap} from "../../store/actions/sector";
import {selectSeat, unSelectSeat} from "../../store/actions/reservation";

const mapStateToProps = (state) => {
    return {
        sector: state.sector,
    }
};

const mapDispatchToProps = {fetchSectorData, fetchSectorMap, selectSeat, unSelectSeat};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sector);
