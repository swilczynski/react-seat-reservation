import {combineReducers} from "redux";

import {sector} from "./sector";
import {reservation} from "./reservation";

export default combineReducers({
    sector,
    reservation,
});
