import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap');
  
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.lightestGray};
  }

  h1 {
    font-size: ${props => props.theme.title1};
    line-height: 42px;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: ${props => props.theme.title2};
    line-height: 39px;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: ${props => props.theme.default};
    line-height: 18px;
    margin: 0;
    padding: 0;
  }

  .small-text {
    font-size: ${props => props.theme.small};
    line-height: 18px
  }

  .big-text {
    font-size: ${props => props.theme.important};
    font-weight: 600;
  }

  .city-box {
    border-radius: 25px;
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
  }
  
  .cloudy {
    background-color: ${props => props.theme.cloudy};
  }
`
export default GlobalStyles;