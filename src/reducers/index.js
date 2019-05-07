import { combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses    // shorhand property name
    //courses: courses
});

export default rootReducer;