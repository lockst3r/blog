import MainLoyaout from '../../src/components/MainLayout';
import PoststList from '../../src/components/PostsList';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

const Posts: React.FC = () => {
  return (
    <MainLoyaout>
      <PostsListContainer>
        <Title>All Posts</Title>
        <PoststList />
      </PostsListContainer>
    </MainLoyaout>
  );
};

export default Posts;
