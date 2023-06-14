import {
    GET_LEADERBOARD_REQUEST,
    GET_LEADERBOARD_SUCCESS,
    GET_LEADERBOARD_ERROR,
} from '../actions/LeaderboardActions';

const initialState = {
    group: null,
    league: null,
    nextLeague: null,
    error: null,
    isLoading: false,
};

const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEADERBOARD_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_LEADERBOARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                group: action.payload.group,
                league: action.payload.league,
                nextLeague: action.payload.nextLeague,
            };
        case GET_LEADERBOARD_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default leaderboardReducer;
