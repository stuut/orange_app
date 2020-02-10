/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import React from "react"
import Form from "../components/form"
import PropTypes from "prop-types"
import theme from '../styles/theme'
import { Link } from "gatsby"
import "./layout.css"
import GlobalStyle from '../styles/global'
const Container = styled.div`
  @media (min-width: ${props => props.theme.responsive.small}) {
    display:flex;
  }
`
const Column = styled.div`
padding:10px;
  @media (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 50%;
    padding:10px 25px 10px 0px;
  }
`


const InnerFooter = styled.div`
padding:10px;
margin: 0 auto;
max-width:1050px;
  @media (min-width: ${props => props.theme.responsive.small}) {
    padding:25px 25px 0px 25px;
  }
`

const Header = styled.div`
padding:10px;
position:fixed;
top: 0px;
left:0px;
margin: 0 auto;
text-align:right;
color:#ffffff;
font-weight:bold;
font-size:15px;
display:block;
width:100%;
z-index:100;
  @media (min-width: ${props => props.theme.responsive.small}) {
    padding:25px 25px 0px 25px;
  }
`
const activeLinkStyle = {
  color: 'rgb(246, 134, 31)',
}

const Layout = ({ children, location }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let headerCont
  if (location.pathname === rootPath) {
     headerCont = (
       <Header >
       <Link to="/submit">SUBMISSIONS</Link>
       </Header >

     )
   } else {
     headerCont = (
       <Header >
        <Link style={{marginRight:'10px', color:'#000000'}} to="/">HOME</Link>
        <Link to="/submit">SUBMISSIONS</Link>
       </Header >
     )
   }

  return (
    <>
      <ThemeProvider theme={theme}>
      <div>
        <header>{headerCont}</header>
        <main style={{position:'relative'}}>{children}</main>
        <footer style={{margin:'0 auto',width:'100%', zIndex: '1', borderTop:'2px solid #f6861f', position: 'relative', background: '#fff', padding:'25px'}}>

        <InnerFooter >
        <h2 style={{color:'#f6861f'}}><strong>CREATED BY LOCALS, FOR LOCALS</strong></h2>
          <Container>
          <Column>
          <p>
          Locally owned and operated by<br />
           Inxcess Pty. Ltd.<br />
          t/as www.yourlocalapp.com.au<br />
          <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
          </Column>
          <Column>
          <p>
          <strong>EMAIL: </strong><a href="mailto:cheryl.newsom@inxcess.com.au">cheryl.newsom@inxcess.com.au</a><br />
          <strong>PH:</strong> 0411 211 065<br />
          <a href="https://www.yourlocalapp.com.au">www.yourlocalapp.com.au</a>
          </p>
          </Column>
          </Container>
        </InnerFooter >
          <Form/>
        </footer>
              </div>
        </ThemeProvider>
        <GlobalStyle />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
