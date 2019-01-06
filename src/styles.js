import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin:0;
    padding:0;
    background: #ece5dd;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-width:350px;
    /* align-items: center; */
  }
`;

export const Header = styled.header`
  display: flex;
  flex: 1 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 80px 20px;
  background: #25d366;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

export const FormWarp = styled.div`
  display: flex;
  align-self: center;
  width: 90%;
  transform: translateY(-50%);
  padding: 40px 20px;
  background: #fff;

  .intl-tel-input {
    display: flex;
    flex: 1;
    input {
      width: 100%;
      height: 40px;
      font-size: 18px;
      color: #075e54;
      border: none;
      border-bottom: 2px solid #25d366;

      &:focus {
        border-bottom-color: #34b7f1;
      }
    }
  }
`;

export const Button = styled.button`
  width: 60px;
  margin-left: 4px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: #25d366;
  background: #fff;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 72px;
  text-transform: uppercase;
  color: #dcf8c6;
  span {
    color: #075e54;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 18px !important;
  font-weight: 500;
  color: #075e54;
  font-size: 12px;
`;

export const About = styled.div`
  text-align: center;
  font-size: 18px !important;
  font-weight: 500;
  color: #075e54;
  font-size: 12px;

  img {
    margin: 0 4px;
    max-width: 18px;
  }
`;
