import React from "react"
import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hand from "../images/hand.png"
import heroImage from "../images/main-image.jpg"
import Icon1 from "../images/icon1.jpg"
import Icon2 from "../images/icon2.jpg"
import Icon3 from "../images/icon3.jpg"
import Icon4 from "../images/icon4.jpg"
import Icon5 from "../images/icon5.jpg"

import styled from 'styled-components'

const Container = styled.div`
padding-bottom:25px;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    display:flex;
    padding-right:10%;
    & div:nth-child(3){
    align-self: flex-end;
    }
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
      padding-right:0;
  }

`
const HandContainer = styled.img`
    @media (min-width: ${props => props.theme.responsive.small}) {
      max-width: 400px;
      position: absolute;
      right: 0px;
      bottom: -2px;
      top: 100%;
      transform: translateY(-100%);
    }
`
const Column = styled.div`
padding:10px;

  @media (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 33%;
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    width:50%;
  }

`
const Icon = styled.img`
  max-width:80px;
  margin-top:25px;

`



const IndexPage = (props) => {
return (
  <Layout location={props.location}>
    <SEO title="The Orange App" />
    <Image image={heroImage} height={'75vh'} />
    <div style={{maxWidth:'1050px', margin:'0 auto', padding:'0 1rem'}}>
    <h2 style={{marginBottom:'25px'}}>Free to download and easy to use.</h2>
    <Container>
    <Column>
      <Icon src={Icon1} />
      <h4><bold>REAL TIME DAILY NEWS</bold></h4>
      <p>Stay up to date with local news and sport, with regular stories delivered every day.</p>
      <Icon src={Icon3} />
      <h4><bold>COMMUNITY INFO</bold></h4>
      <p>Key services such as public transport and flight information.</p>
    </Column>
    <Column>
    <Icon src={Icon2} />
    <h4><bold>SEARCH DIRECTORIES</bold></h4>
    <p>Everything you need to know about what"s happening, what to do and where to go.</p>
    <Icon src={Icon4} />
    <h4><bold>INTERACTIVE</bold></h4>
    <p>Daily push notifications and links to external websites drive high traffic volume.</p>

    </Column>
    <Column>
    <Icon src={Icon5} />
    <h4><bold>COMMUNITY INFO</bold></h4>
    <p>Key services such as public transport and flight information with links to WCC services.</p>

    </Column>
    </Container>

    </div>
    <HandContainer src={Hand}/>

  </Layout>
)
}

export default IndexPage
