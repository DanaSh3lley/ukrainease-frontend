import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import lessonReducer from "./reducers/LessonReducer";

const rootReducer = combineReducers({
    user: userReducer,
    lessons: lessonReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
