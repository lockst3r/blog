import axios from 'axios';
import MainLoyaout from '../../src/components/MainLayout';
import styled from 'styled-components';

const PostContainer = styled.div`
  height: 100vh;
`;
const Title = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  margin: 15px;
`;

interface IObjectProps {
  post: {
    title: string;
    body: string;
  };
}

const Post: React.FC<IObjectProps> = ({ post }) => {
  return (
    <MainLoyaout>
      <PostContainer>
        <Title>{post.title}</Title>
        <Text>{post.body}</Text>
      </PostContainer>
    </MainLoyaout>
  );
};

export const getServerSideProps = async ({ query, req }: any) => {
  if (!req) {
    return { post: null };
  }
  const res = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}`);
  const post = await res.data;

  return {
    props: {
      post,
    },
  };
};

export default Post;
