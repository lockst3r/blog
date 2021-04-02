import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../blog.actions';
import { postsListSelector } from '../blog.selectors';
import Link from 'next/link';
import styled from 'styled-components';

const LinkStyled = styled.a`
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 1.3em;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #808080;
  }
`;

const PostStyled = styled.li`
display: flex;
  flex: 1 1;
  width: 100%
  flex-direction: column;
  overflow: hidden;
  margin: 0 0;
  padding: 0 40px 0 40px;
  border-bottom: 1px solid #eaeff1;
  background-size: cover;
}
`;
interface PropsPostList {
  getPostsList: () => void;
  posts: [];
}

const PostsList = ({ getPostsList, posts }: PropsPostList) => {
  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <>
      <ul>
        {posts
          .slice()
          .reverse()
          .map(({ id, title }) => (
            <PostStyled key={id}>
              <Link href={`./posts/[id]`} as={`/posts/${id}`}>
                <LinkStyled>{title}</LinkStyled>
              </Link>
            </PostStyled>
          ))}
      </ul>
    </>
  );
};

const mapDispatch = {
  getPostsList: postsActions.getPostsList,
};

interface Istate {
  posts: [];
}

const mapState = (state: Istate) => {
  return {
    posts: postsListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(PostsList);
