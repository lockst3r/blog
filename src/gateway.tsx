import axios from 'axios';

const url = 'https://simple-blog-api.crew.red/posts';

export const fetchPostsList = async () => {
  const response = await axios.get(url);
  return response;
};

export const createPost = (post: any) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });
};
