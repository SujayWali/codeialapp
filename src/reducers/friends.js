import {
  FETCH_FRIENDS_SUCCSESS,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from '../actions/actionTypes';

const defaultProfileState = [];

// profile reducer
export default function friends(state = defaultProfileState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCSESS:
      return [...action.friends];
    case ADD_FRIEND:
      return state.concat(action.friend);
    case REMOVE_FRIEND:
      const newArr = state.filter(
        (friend) => friend.to_user._id !== action.userId
      );
      return newArr;
    default:
      return state;
  }
}
