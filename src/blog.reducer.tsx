import { POSTS_LIST_RECIEVED } from './blog.actions';
import { combineReducers } from 'redux';

interface Iaction {
  type: any;
  payload: {
    postsList: any;
  };
}

const initialState = {
  postsList: [],
};

const postsReducer = (state = initialState, action: Iaction) => {
  switch (action.type) {
    case POSTS_LIST_RECIEVED:
      return {
        ...state,
        postsList: action.payload.postsList,
      };
    default:
      return state;
  }
};

const reducers = {
  posts: postsReducer,
};

export default combineReducers(reducers);
