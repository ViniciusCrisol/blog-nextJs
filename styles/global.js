import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin : 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}
html, body , #root{
  min-height: 100%;
  width: 100%;
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased !important;
}

body,input, button{
  font-size: 14px;
  color: var(--text);
  font-family: --apple-system, sans-serif;
}

a{
  text-decoration: none;
  color: var(--text)
}

:root{
--background: #fff;
--text: #171717;
--main: #09BF97;
--dark: #1B1B1B;
--white: #fff;
--opacity-gray: #eee6;
--gray: #888;
}
`;
