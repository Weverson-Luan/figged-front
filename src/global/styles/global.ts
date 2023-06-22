/**
 * IMPORTS
 */
import { createGlobalStyle } from "styled-components";

/**
 * I am a global style.
 */
export default createGlobalStyle`

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 *,
 *::before,
 *::after {
   box-sizing: inherit;
 }

 html {
   box-sizing: border-box;
   height: -webkit-fill-available;
   -ms-overflow-style: scrollbar;
 }

 body {
   width: 100%;
   min-height: 100vh;
   min-height: -webkit-fill-available;
   font-family: 'Poppins', sans-serif;
   
 }

 img {
   max-width: 100%;
 }

 button{
   background-color: transparent;
   border: none;
   box-shadow: none;
   cursor: pointer;
   outline: none;
   padding: 0;
   -webkit-box-shadow: none;
 }
 input{
  outline: none;
 }

 li {
  list-style-type: none;
 }

 @-ms-viewport {
   width: device-width;
 }


`;
