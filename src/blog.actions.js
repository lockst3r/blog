import * as postsGateway from './gateway';

export const POSTS_LIST_RECIEVED = 'POSTS_LIST_RECIEVED';

export const postsListRecived = postsList => {
  const action = {
    type: POSTS_LIST_RECIEVED,
    payload: {
      postsList,
    },
  };
  return action;
};

export const getPostsList = () => {
  const thunkAction = function (dispatch) {
    postsGateway.fetchPostsList().then(postsList => dispatch(postsListRecived(postsList.data)));
  };
  return thunkAction;
};

export const createPost = postData => {
  const thunkAction = function (dispatch) {
    thunkAction.createPost(postData).then(() => dispatch(getPostsList()));
  };
  return thunkAction;
};
