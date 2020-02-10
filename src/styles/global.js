import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Nunito Sans', sans-serif;

  }
  p{
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    line-height:1.45;
    font-size:18px;
  }
  bold{
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
  }
  strong{
    font-weight: 900;
  }
  h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito Sans', sans-serif;
  }
  h1{
    font-size: 60px;
    line-height: 1.11905;
  }
  h2{
    font-size: 40px;
    line-height: 1.16667;
  }
  h3{
    font-size: 35px;
    line-height: 1.16667;
  }
  h4{
    font-size: 22px;
    line-height: 1.16667;
    margin:10px 0px;
  }
  h5{
    font-size: 15px;
    line-height: 1.16667;
  }

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }

  h3{
    margin-top:15px;
  }



a{
  text-decoration:none!important;
  border-bottom:0px;
  color:#f6861f;
}
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  ol li, ul li {
    padding-left: 0;
    margin: 10px 0;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: white;
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }


`
export default GlobalStyle
