import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #EB5757;
    --gray: #333333;
    --gray-medium: #4F4F4F;
    --gray-light: #828282;
    --gray-ultra-light: #BDBDBD;
    --background: #FFFFFFFF;
  }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body, input, button {
      font-family: 'Montserrat', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    body {
      position: relative;
      overflow-x: hidden;
      min-height: 100vh;
    }

    html {
      font-size: 62.5%;

      @media(max-width: 350px) {
        font-size: 55%;
      }
    }

    img {
      display: block;
      max-width: 100%;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    span {
      display: inline-block;
    }

    ul, li {
      list-style: none;
    }

    #header-root {
      transition: all 1s;
    }
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0rem auto;
  padding: 0 4%;
  overflow: hidden;
`;
