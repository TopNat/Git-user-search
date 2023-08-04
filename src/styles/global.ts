import  { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
 
    width: 1200px;
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);

  }
`;