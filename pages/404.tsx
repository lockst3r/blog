import MainLoyaout from '../src/components/MainLayout';
import Router from 'next/router';
import styled from 'styled-components';

const ErrorContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: calc(100vh - 120px);
`;

const Title = styled.h1`
  text-align: center;
`;

const HomeButton = styled.button`
  margin: 0 auto;
  width: 150px;
  border: none;
  color: black;
  background-color: #ccc;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

 const ErrorPage: React.FC = () =>{
  const linkCkickhandle = ():void => {
    Router.push('/');
  };
  return (
    <MainLoyaout>
      <ErrorContainer>
        <Title>Erorr 404</Title>
        <HomeButton onClick={linkCkickhandle}>Go back to Home</HomeButton>
      </ErrorContainer>
    </MainLoyaout>
  );
}

export default ErrorPage;