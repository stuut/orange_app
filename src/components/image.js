import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Logo from '../images/logo.png'
import Android from '../images/android.png'
import Apple from '../images/apple.png'
const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 800px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  &::after {
    content: '';
    background: #ffffff;
    position: absolute;
    transform: rotate(-5deg) translateY(-55%);
    left: 0;
    bottom: -220px;
    height: 230px;
    width: 120%;
    z-index: 1;
  }

`

const LogoImage  = styled.img`
max-width:550px;
`


const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Title  = styled.h1`
color:#ffffff;
@media (max-width: ${props => props.theme.responsive.small}) {
  font-size: 40px;
}
`
const Text  = styled.p`
color:#ffffff;
margin:25px 0px;
max-width:400px;
`

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <BgImg
      height={props.height}
      fluid={data.placeholderImage.childImageSharp.fluid} />
      <Container>
      <LogoImage src={Logo}/>
      <Title>connecting our <br /><strong>local community</strong></Title>
      <Text>The first comprehensive mobile news and information service, created especially for Orange city and surrounds.</Text>
      <Text>With real-time local news pushed to your device every day plus 100s of local listings, there's no easier way to keep in touch with everything Orange.</Text>
      <div style={{display:'flex', alignItems: 'center',}}>
      <a href="#"><img style={{maxWidth:'150px'}} src={Android}/></a>
      <div style={{
        backgroundColor:'#ff4406',
        width:'2px',
        height:'55px',
        margin:'0px 10px 0px 15px',
      }}></div>
      <a href="https://apps.apple.com/us/app/the-orange-app/id1478804810?ls=1"><img style={{maxWidth:'140px'}} src={Apple}/></a>
      </div>
      </Container>
    </Wrapper>
  )
}

export default Image
