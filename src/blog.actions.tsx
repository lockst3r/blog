import * as postsGateway from './gateway';

export const POSTS_LIST_RECIEVED: string = 'POSTS_LIST_RECIEVED';

export const postsListRecived = (postsList: Array<string>) => {
  const action = {
    type: POSTS_LIST_RECIEVED,
    payload: {
      postsList,
    },
  };
  return action;
};

export const getPostsList = () => {
  const thunkAction = function (dispatch: any) {
    postsGateway.fetchPostsList().then(postsList => dispatch(postsListRecived(postsList.data)));
  };
  return thunkAction;
};

interface IPostData {
  title: string;
  body: string;
}

export const createPost = (postData: IPostData) => {
  const thunkAction = function (dispatch: any) {
    thunkAction.createPost(postData).then(() => dispatch(getPostsList()));
  };
  return thunkAction;
};
