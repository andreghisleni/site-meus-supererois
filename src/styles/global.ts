import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text[0]};
    font: 400 16px Roboto, sans-serif;

  }
  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    max-width: 800px;
    text-indent: 30px;
    text-align: justify;
    padding: 10px 20px;
  }
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;

    &.normal {
      font-weight: normal;
      font-size: 30px;
    }
  }
  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    color: ${props => props.theme.colors.text[0]};
    font-weight: 400;

    :hover {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
    }
  }


  ul {
    list-style: none;
  }
  .container {
    width: 100%;
    max-width: 1200px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 700px) {
    padding: 0 15px;
  }
  }
  .blankSpace {
    width: 100%;
    height: calc(100vh - 497px);
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px 0;

    &.callaction {
      background: ${props => props.theme.colors.callaction.background};
    }
  }


`;
