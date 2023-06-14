import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import lessonReducer from "./reducers/LessonReducer";
import singleLessonReducer from "./reducers/SingleLessonReducer";
import awardReducer from "./reducers/awardReducer";
import userExperienceReducer from "./reducers/userExperienceReducer";
import leaderboardReducer from "./reducers/leaderboardReducer";
import notificationReducer from "./reducers/notificationReducer";

const rootReducer = combineReducers({
    user: userReducer,
    lessons: lessonReducer,
    lesson: singleLessonReducer,
    awards: awardReducer,
    userExperience: userExperienceReducer,
    leaderboard: leaderboardReducer,
    notification: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
