import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  max-width: 100%;
  height: 60px;
  display: flex;
  align-item: center;
  margin-left: 15px;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  text-align: center;
  word-break: break-all;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 60px;
  color: #15171a;
  text-align: center;
`;

const LinkStyled = styled.a`
  margin-left: 10px;
  line-height: 1.3em;
  font-size: 20px;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 1px black;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/ghost-logo-1.svg" width={100} height={100} />
      </Logo>
      <Nav>
        <Link href={'/'}>
          <LinkStyled>Home</LinkStyled>
        </Link>
        <Link href={'/posts/'}>
          <LinkStyled>Posts</LinkStyled>
        </Link>
        <Link href={'/posts/new'}>
          <LinkStyled>Create Post</LinkStyled>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
