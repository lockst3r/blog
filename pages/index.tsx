import Head from 'next/head';
import MainLayaout from '../src/components/MainLayout';
import PostsList from '../src/components/PostsList';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;
const StyledText = styled.p`
  margin-left: 5px;
  font-size: 20px;
`;
const PostContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 10px;
`;

const Avatar = styled.img`
  display: block;
  height: 150px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const Home: React.FC = () => {
  return (
    <MainLayaout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Blog by Author</Title>
      <Avatar src="/avatar.png" alt="avatar" />
      <StyledText>Recent posts</StyledText>
      <hr />
      <PostContainer>
        <PostsList />
      </PostContainer>
    </MainLayaout>
  );
};

export default Home;
