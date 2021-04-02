import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  height: 60px;
  background-color: #000000;
  color: #fff;
`;
const FooterText = styled.p`
  margin: 0 auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© Copyright 2015 - 2021 Blog LLC. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
